import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { useUser } from "../../store/userStore";

const Header = () => {
  const { user, logout } = useUser();
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={2}
      py={2}
      borderBottom={1}
      borderColor={"ButtonShadow"}
      bgcolor={"#fbfbfb"}
    >
      <Typography variant="h6" fontWeight={"bold"}>
        IppoSales
      </Typography>

      <Stack direction={"row"} alignItems={"center"} gap={2}>
        <Typography>Hi {user.name}</Typography>
        <Button startIcon={<LogoutOutlined />} variant="text" onClick={logout}>
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
