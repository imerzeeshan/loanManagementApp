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
  { name: "1", sales: 1 },
  { name: "2", sales: 6 },
  { name: "3", sales: 7 },
  { name: "4", sales: 9 },
  { name: "5", sales: 2 },
  { name: "6", sales: 5 },
  { name: "7", sales: 3 },
  { name: "8", sales: 9 },
  { name: "9", sales: 6 },
  { name: "10", sales: 2 },
  { name: "11", sales: 5 },
  { name: "12", sales: 4 },
];

const BarGraphPaymentCollections = () => {
  return (
    <div className="bg-white mt-9 p-5">
      <h1>Number of Repayments Collected - Monthly</h1>
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
          <Bar dataKey="sales" fill="#A61B13" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraphPaymentCollections;
