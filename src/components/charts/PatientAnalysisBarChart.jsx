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

import patientAnalysis from "../../assets/jsonData/patientAnalysis.json";

export const PatientAnalysisBarChart = () => {
  return (
    <div className="p-0 md:p-3 shadow">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold mb-3">Year wise Patient Growth Comparison</h2>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={patientAnalysis}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />

          {/* Bars */}
          <Bar dataKey="new" fill="#4f46e5" name="New Patients" />
          <Bar dataKey="returning" fill="#10b981" name="Returning Patients" />
          <Bar dataKey="lost" fill="#ef4444" name="Lost Patients" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
