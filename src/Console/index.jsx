import { Suspense, lazy } from "react";
import { Box, Typography } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import PrimaryMenu from "./components/PrimaryMenu";
import Header from "./components/Header";
import { Leaderboard } from "@mui/icons-material";

const Dashboard = lazy(() => import("./Dashboard"));
const Agents = lazy(() => import("./Agents"));
const Account = lazy(() => import("./Account"));
const Profile = lazy(() => import("./Profile"));
const Generation = lazy(() => import("./LeadGeneration"));
const Marketing = lazy(() => import("./Marketing"));
const Payment = lazy(() => import("./Payment"));
const Report = lazy(() => import("./Report"));
const Task = lazy(() => import("./Task"));
const Sales = lazy(() => import("./Sales"));
const Settings = lazy(() => import("./Settings"));
const Help = lazy(() => import("./Help"));


const Console = () => {
  return (
    <Box height={"100vh"}>
      <Header />
      <Box display={"flex"}>
        <Box
          bgcolor={"#fbfbfb"}
          minWidth={200}
          height={"calc(100vh - 70px)"}
          borderRight={1}
          overflow={"auto"}
          borderColor={"ButtonShadow"}
          sx={{
            "::-webkit-scrollbar": { display: "none" },
            "&:hover": {
              "::-webkit-scrollbar": { display: "block" },
            },
          }}
        >
          <PrimaryMenu />
        </Box>
        <Box height={"calc(100vh - 70px)"} overflow={"auto"} flexGrow={1}>

          <Routes>
            <Route
              path="/dashboard"
              element={
                <Suspense fallback={<Loading />}>
                  <Dashboard />
                </Suspense>
              }
            />

            <Route
              path="/agents/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Agents />
                </Suspense>
              }
            />

            <Route
              path="/accounts/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Account />
                </Suspense>
              }
            />

            <Route
              path="/profile/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Profile />
                </Suspense>
              }
            />

            <Route
              path="/leadgeneration/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Generation />
                </Suspense>
              }
            />

            <Route
              path="/marketing/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Marketing />
                </Suspense>
              }
            />

            <Route
              path="/payment/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Payment />
                </Suspense>
              }
            />

            <Route
              path="/report/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Report />
                </Suspense>
              }
            />


            <Route
              path="/task/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Task />
                </Suspense>
              }
            />

            <Route
              path="/sales/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Sales />
                </Suspense>
              }
            />

            <Route
              path="/settings/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Settings />
                </Suspense>
              }
            />

            <Route
              path="/help/*"
              element={
                <Suspense fallback={<Loading />}>
                  <Help />
                </Suspense>
              }
            />

            <Route path="*" element={<Navigate to="./dashboard" />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default Console;

const Loading = () => (
  <Box sx={{ display: "grid", placeContent: "center", height: "70vh" }}>
    <Typography>Loading ...</Typography>
  </Box>
);
