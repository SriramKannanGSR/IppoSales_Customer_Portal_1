import React from "react";
import { Grid2 as Grid, Typography } from "@mui/material";
import SalesChart from "./components/SalesChart";
import EngagedChart from "./components/EngagedChart";
import CompareChart from "./components/CompareChart";

const Dashboard = () => {
  return (
    <Grid container spacing={2} p={4}>
      <Grid size={{ sm: 12, md: 6, xl: 4 }}>
        <Typography variant="h6" align="center" pb={2}>
          Sales and Expenditure
        </Typography>
        <SalesChart />
      </Grid>
      <Grid size={{ sm: 12, md: 6, xl: 4 }}>
        <Typography variant="h6" align="center" pb={2}>
          Customer engaged
        </Typography>
        <EngagedChart />
      </Grid>
      <Grid size={{ sm: 12, md: 6, xl: 4 }}>
        <Typography variant="h6" align="center" pb={2}>
          Web vs Whatsapp
        </Typography>
        <CompareChart />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
