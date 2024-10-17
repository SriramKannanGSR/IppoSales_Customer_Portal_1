import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableContainer,
  useTheme,
} from "@mui/material";
import { format } from "date-fns/format";
import { useNavigate } from "react-router-dom";

const fetcher = () => {
  const url = `${import.meta.env.VITE_BASE_URL}/client/agents`;
  return axios.get(url).then(({ data }) => data);
};

const Agents = () => {
  const theme = useTheme();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["agents"],
    queryFn: fetcher,
  });

  const navigate = useNavigate();

  if (isError) return <Typography p={6}>Something went wrong ...</Typography>;

  if (isLoading) return <Typography p={6}>Loading ...</Typography>;

  const handleClick = (id) => navigate(`/console/agents/${id}`);

  return (
    <Box padding={3}>
      <Typography variant="h6" p={2}>
        Chat Agents
      </Typography>
      <TableContainer
        sx={{
          border: `1px solid buttonShadow`,
          borderRadius: 2,
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Agent Name</TableCell>
              <TableCell align="right">Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                key={item.id}
                onClick={() => handleClick(item.id)}
                sx={{ "&:hover": { cursor: "pointer", background: "#f6f6f6" } }}
              >
                <TableCell>{item.name}</TableCell>
                <TableCell align={"right"}>
                  {format(new Date(item.createdAt), "dd-MM-yyyy hh:mm aaa")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Agents;
