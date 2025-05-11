import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", sales: 50 },
  { name: "2", sales: 550 },
  { name: "3", sales: 600 },
  { name: "4", sales: 900 },
  { name: "5", sales: 100 },
  { name: "6", sales: 500 },
  { name: "7", sales: 300 },
  { name: "8", sales: 900 },
  { name: "9", sales: 650 },
  { name: "10", sales: 100 },
  { name: "11", sales: 500 },
  { name: "12", sales: 450 },
];

const MyBarChart = () => {
  return (
    <div className="bg-white mt-9 p-5">
      <h1>Total Outstanding Open Loans - Monthly</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          className="mt-6"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="sales" fill="#0378E3" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyBarChart;
