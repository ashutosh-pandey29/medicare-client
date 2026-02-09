import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { useEffect, useState } from "react";
import { useStateAndGraph } from "../../hooks/admin/useStatsAndGraph";

export const PatientAnalysisBarChart = () => {
  const [patients, setPatient] = useState([]);
  const { loading, getPatientGraphData } = useStateAndGraph();

  useEffect(() => {
    const loadStats = async () => {
      const response = await getPatientGraphData();
      if (response.success) {
        setPatient(response.data);
      }
    };
    loadStats();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={patients}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="total" fill="#4f46e5" name="Total Patients" />
      </BarChart>
    </ResponsiveContainer>
  );
};
