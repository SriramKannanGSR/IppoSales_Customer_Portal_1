import React from "react";
import { TextField, Typography, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const Password = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}/client/profile`;
    axios
      .put(url, data)
      .then(({ data }) => {
        toast.success(data.message);
      })
      .catch((error) => {
        reset();
        if (error?.response?.data?.error?.message)
          toast.error(error.response.data.error.message);
        else console.log(error);
      })
      .finally(() => {
        reset();
      });
  };

  return (
    <Card
      sx={{ minWidth: 275, border: "1px solid buttonShadow", borderRadius: 2 }}
      elevation={0}
    >
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={2}>
            <Typography variant="h6" align="center" component={"h3"}>
              Change Password
            </Typography>

            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  size="small"
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                  size="small"
                />
              )}
            />

            <LoadingButton
              type="submit"
              variant="contained"
              color="primary"
              loading={isSubmitSuccessful}
            >
              Update
            </LoadingButton>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default Password;
