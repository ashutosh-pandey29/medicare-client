import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import revenueAnalysis from "../../assets/jsonData/revenueAnalysis.json";

export const RevenueBarChart = () => {
  return (
    <div className=" rounded shadow p-4">
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={revenueAnalysis}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(value) => `₹${value / 1000}k`} />
          <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]} />

          <Bar dataKey="revenue" fill="#2563EB" radius={[6, 6, 0, 0]} name="Revenue" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
