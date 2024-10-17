import { Box } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    month: "Jan",
    uv: 4000,
  },
  {
    month: "Feb",
    uv: 3000,
  },
  {
    month: "Mar",
    uv: 2000,
  },
  {
    month: "Apr",
    uv: 2780,
  },
  {
    month: "May",
    uv: 1890,
  },
  {
    month: "Jun",
    uv: 2390,
  },
  {
    month: "Jul",
    uv: 3490,
  },
];
const EngagedChart = () => {
  return (
    <Box width={"100%"} height={300}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          {/* <Tooltip /> */}
          <Legend />
          <Bar dataKey="uv" name="Customers" fill="#039be5" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default EngagedChart;
