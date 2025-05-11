import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "1", uv: 520 },
  { name: "2", uv: 400 },
  { name: "3", uv: 240 },
  { name: "4", uv: 750 },
  { name: "5", uv: 80 },
  { name: "6", uv: 250 },
  { name: "7", uv: 300 },
  { name: "8", uv: 60 },
  { name: "9", uv: 110 },
  { name: "10", uv: 780 },
  { name: "11", uv: 270 },
  { name: "12", uv: 1000 },
];

const MyLineChart = () => {
  return (
    <div className="bg-white mt-9 p-5">
      <h1>Loans Released Monthly</h1>
      <LineChart
        width={1200}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        className="mt-6"
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* <Legend /> */}
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default MyLineChart;
