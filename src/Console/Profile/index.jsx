import React from "react";
import Basic from "./components/Basic";
import Password from "./components/Password";
import { Box, Stack } from "@mui/material";

const Profile = () => {
  return (
    <Stack gap={4} p={2} maxWidth={"350px"}>
      <Basic />
      <Password />
    </Stack>
  );
};

export default Profile;
