import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import Session from "./Session";

const Conversation = React.lazy(() => import("./Conversation"));

const SingleAgent = () => {
  return (
    <Stack direction={"row"} gap={4}>
      <Box p={1} minWidth={"250px"}>
        <Session />
      </Box>
      <Box height={"calc(100vh - 80px)"} overflow={"auto"} width={"100%"}>
        <Routes>
          <Route
            path="/session/:sessionId"
            element={
              <Suspense fallback={<Typography>Loading ...</Typography>}>
                <Conversation />
              </Suspense>
            }
          />
          <Route path="*" element={<EmptyChat />} />
        </Routes>
      </Box>
    </Stack>
  );
};

export default SingleAgent;

const EmptyChat = () => (
  <Box height={"100%"} sx={{ placeContent: "center", display: "grid" }}>
    <Typography color="#777" fontSize={"small"}>
      No chat session selected
    </Typography>
  </Box>
);
