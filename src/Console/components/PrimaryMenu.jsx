import React, { useState } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  Stack,
  useTheme,
} from "@mui/material";

import { BorderColor, ExpandLess, ExpandMore } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import data from "./primary_menu_data";

function PrimaryMenu() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const theme = useTheme();

  const handleClick = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <List component="nav" sx={{ p: 1 }}>
      {data.map((menu) => (
        <React.Fragment key={menu.id}>
          {menu?.submenu ? (
            <>
              <ListItem
                onClick={() => handleClick(menu.id)}
                sx={{ cursor: "pointer" }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  gap={2}
                  width="100%"
                >
                  {menu?.icon && (
                    <ListItemIcon>
                      <menu.icon />
                    </ListItemIcon>
                  )}
                  <ListItemText primary={menu.label} />
                  {openSubmenu === menu.id ? <ExpandLess /> : <ExpandMore />}
                </Stack>
              </ListItem>
              <Collapse
                in={openSubmenu === menu.id}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding sx={{ pl: 2 }}>
                  {menu.submenu.map((i) => (
                    <ListItem key={i.id} as={NavLink} to={i.to}>
                      <ListItemText primary={i.label} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItem
              as={NavLink}
              to={menu.to}
              style={({ isActive }) =>
                isActive
                  ? {
                      background: "#fff",
                      border: "1px solid #eceef0",
                      borderRadius: 8,
                      borderColor: "#eceef0",
                      color: theme.palette.primary.main,
                    }
                  : {
                      background: "transparent",
                      border: "1px solid transparent",
                    }
              }
            >
              {menu?.icon && (
                <ListItemIcon sx={{ color: "black" }}>
                  <menu.icon color="red" />
                </ListItemIcon>
              )}
              <ListItemText primary={menu.label} />
            </ListItem>
          )}
        </React.Fragment>
      ))}
    </List>
  );
}

export default PrimaryMenu;
