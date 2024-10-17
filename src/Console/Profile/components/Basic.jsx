import React, { useState } from "react";
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
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name should be atleast 3 characters long"),
  mobile: yup.string().required("Mobile is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});
const url = `${import.meta.env.VITE_BASE_URL}/client/profile`;
const Basic = () => {
  const [isSubmitting, setSubmitting] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isLoading },
  } = useForm({
    defaultValues: async () => await axios.get(url).then(({ data }) => data),
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setSubmitting(true);
    axios
      .put(url, data)
      .then(({ data }) => {
        toast.success(data.message);
      })
      .catch((error) => {
        if (error?.response?.data?.error?.message)
          toast.error(error.response.data.error.message);
        else console.log(error);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Card
      sx={{ minWidth: 275, border: "1px solid buttonShadow", borderRadius: 2 }}
      elevation={0}
    >
      <CardContent>
        {isLoading ? (
          <Typography>Loading ...</Typography>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <Typography variant="h6" align="center" component={"h3"}>
                Profile
              </Typography>

              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    size="small"
                  />
                )}
              />

              <Controller
                name="mobile"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Mobile"
                    variant="outlined"
                    error={!!errors.mobile}
                    helperText={errors.mobile?.message}
                    size="small"
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    size="small"
                    disabled
                  />
                )}
              />

              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={isSubmitting}
              >
                Update
              </LoadingButton>
            </Stack>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default Basic;
