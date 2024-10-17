import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Stack,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { format } from "date-fns";

const fetcher = ({ queryKey }) => {
  const { agent } = queryKey[1];
  const url = `${
    import.meta.env.VITE_BASE_URL
  }/client/history/session/${agent}`;
  return axios.get(url).then(({ data }) => data);
};
const Session = () => {
  const { agentId: agent } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["session", { agent }],
    queryFn: fetcher,
  });

  if (isLoading) return <Typography>Loading ...</Typography>;
  if (isError) return <Typography>Something went wrong</Typography>;

  return (
    <Box border={1} borderRadius={3} borderColor={"#ececec"} width={"100%"}>
      <Typography
        variant="h6"
        px={2}
        py={1}
        borderBottom={1}
        borderColor={"#ececec"}
      >
        Chat Session
      </Typography>
      <Box height={"calc(100vh - 140px)"} overflow={"auto"}>
        {data && data.length === 0 ? (
          <Box sx={{ display: "grid", placeContent: "center", height: "100%" }}>
            <Typography fontSize={"small"}>
              No chat session available
            </Typography>
          </Box>
        ) : (
          <List>
            {data.map((item) => (
              <Item key={item.session_id} item={item} agent={agent} />
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export default Session;

const Item = ({ item, agent }) => {
  const theme = useTheme();
  return (
    <ListItemButton
      component={NavLink}
      to={`/console/agents/${agent}/session/${item.session_id}`}
      style={({ isActive }) =>
        isActive
          ? {
              borderLeft: `3px solid ${theme.palette.primary.main}`,
              background: "#fbfbfb",
            }
          : { borderLeft: "3px solid transparent" }
      }
    >
      <Stack direction={"row"} justifyContent={"space-between"} width={"100%"}>
        <Typography fontSize={"0.85em"}>
          {format(new Date(item.date), "dd MMM yyyy hh:mm aaa")}
        </Typography>
        <Typography
          fontSize={"0.78em"}
          bgcolor={"#444"}
          color="white"
          width={25}
          borderRadius={"50%"}
          align="center"
          p={0.25}
        >
          {item.count}
        </Typography>
      </Stack>
    </ListItemButton>
  );
};
