import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

import revenueAnalysis from "../../assets/jsonData/revenueAnalysis.json";

export const RevenueBarChart = () => {

  console.log(revenueAnalysis)
  return (
   
       <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueAnalysis}>
                    <CartesianGrid stroke="#374151" />
                    <XAxis dataKey="year" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      dot={{ r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>

      // <ResponsiveContainer width="100%" height={300}>
      //   <BarChart data={revenueAnalysis}>
      //     <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
      //     <XAxis dataKey="year" stroke="#E5E7EB" />
      //     <YAxis stroke="#E5E7EB" />
      //     <Tooltip
      //       contentStyle={{
      //         backgroundColor: "#111827",
      //         border: "1px solid #374151",
      //         color: "#fff",
      //       }}
      //     />
      //     <Bar dataKey="revenue" fill="#3B82F6" radius={[6, 6, 0, 0]} />
      //   </BarChart>
      // </ResponsiveContainer>
  );
};
