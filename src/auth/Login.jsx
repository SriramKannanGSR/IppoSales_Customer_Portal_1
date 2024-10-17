import React from "react";
import { Box, TextField, Typography, Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../store/userStore";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const { setUser, setToken } = useUser();
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const url = `${import.meta.env.VITE_BASE_URL}/auth/login`;
    axios
      .post(url, data)
      .then(({ data }) => {
        var UserName = data.name
        setUser({
          id: data.id,
          name: data.name,
          email: data.email,
        }); 
               
        setToken(data.token);
        navigate("/console");
        toast.success(" Hi..! " + UserName + " Welcome Back");
        
      })
      .catch((error) => {
        reset();
        if (error?.response?.data?.error?.message)
          toast.error(error.response.data.error.message);
        else console.log(error);
      });
  };

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      gap={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card
        elevation={0}
        sx={{
          minWidth: 275,
          border: "1px solid buttonShadow",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={2}>
              <Typography variant="h6" align="center" component={"h3"}>
                Login
              </Typography>

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
                  />
                )}
              />

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

              <LoadingButton
                type="submit"
                variant="contained"
                color="primary"
                loading={isSubmitSuccessful}
              >
                Login
              </LoadingButton>
            </Stack>
          </form>

          <Typography fontSize={"small"} align="center" pt={3}>
            New user? <Link to={"/auth/signup"}>Create account</Link>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
