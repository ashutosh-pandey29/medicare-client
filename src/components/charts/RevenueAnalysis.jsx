import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useStateAndGraph } from "../../hooks/admin/useStatsAndGraph";
import { useEffect, useState } from "react";

export const RevenueBarChart = () => {
  const [revenue, setRevenue] = useState([]);
  const { loading, getRevenueGraphData } = useStateAndGraph();

  useEffect(() => {
    const loadStats = async () => {
      const response = await getRevenueGraphData();
      if (response.success) {
        setRevenue(response.data);
      }
    };
    loadStats();
  }, []);

  

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={revenue}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis dataKey="year" stroke="#E5E7EB" />
        <YAxis stroke="#E5E7EB" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#111827",
            border: "1px solid #374151",
            color: "#fff",
          }}
        />
        <Bar dataKey="revenue" fill="#3B82F6" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};
