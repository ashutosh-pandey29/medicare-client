import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { FaUsers, FaRupeeSign, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { MdOutlineAutoGraph } from "react-icons/md";
import { PatientAnalysisBarChart } from "../../components/charts/PatientAnalysisBarChart";

export const Analysis = () => {
  const [departmentFilter, setDepartmentFilter] = useState("All Departments");
  const [monthFilter, setMonthFilter] = useState("December");
  const [yearFilter, setYearFilter] = useState(2025);

  // ================= Patient Data =================
  const patientMonthlyData = [
    { month: "Jan", new: 120, old: 200, lost: 30 },
    { month: "Feb", new: 140, old: 210, lost: 25 },
    { month: "Mar", new: 160, old: 220, lost: 40 },
    { month: "Apr", new: 130, old: 190, lost: 20 },
    { month: "May", new: 180, old: 230, lost: 35 },
    { month: "Jun", new: 170, old: 240, lost: 28 },
    { month: "Jul", new: 200, old: 260, lost: 45 },
    { month: "Aug", new: 190, old: 250, lost: 32 },
    { month: "Sep", new: 175, old: 235, lost: 27 },
    { month: "Oct", new: 210, old: 270, lost: 50 },
    { month: "Nov", new: 195, old: 255, lost: 34 },
    { month: "Dec", new: 230, old: 280, lost: 60 },
  ];

  // ================= Payment Data =================
  const paymentData = [
    { month: "January", value: 5000 },
    { month: "February", value: 7000 },
    { month: "March", value: 6500 },
    { month: "April", value: 8000 },
    { month: "May", value: 6000 },
    { month: "June", value: 7500 },
    { month: "July", value: 9000 },
    { month: "August", value: 8500 },
    { month: "September", value: 7000 },
    { month: "October", value: 9500 },
    { month: "November", value: 8000 },
    { month: "December", value: 10000 },
  ];

  // ================= Weekly Mini Graph Data =================
  const weeklyStats = [
    {
      title: "New Patients",
      value: 120,
      icon: <FaUsers className="text-blue-500" />,
      change: "+15%",
    },
    {
      title: "Missed Appointments",
      value: 30,
      icon: <FaArrowDown className="text-red-500" />,
      change: "-5%",
    },
    {
      title: "Payments Received",
      value: 9500,
      icon: <FaRupeeSign className="text-green-500" />,
      change: "+10%",
    },
    {
      title: "Old Patients",
      value: 200,
      icon: <FaUsers className="text-yellow-400" />,
      change: "+8%",
    },
  ];

  return (
    <>
      <div className="sm:max-w-sm md:min-w-full mx-auto p-1 h-auto">
        {/* Heading */}
        <AdminPageHeading
          title="Analytics & Reports"
          subtitle="  Gain insights into patient trends, appointments, and hospital revenue in real time."
          icon={MdOutlineAutoGraph}
        />

        <div className="p-6 bg-gray-900 min-h-screen text-gray-200">
               
          {/* Header */}
          <div className="mb-6 ">
            <h2 className="text-3xl font-bold text-white mb-2 md:mb-0">Reports & Analysis</h2>
            <p className="text-gray-400">
              Track patients and payments efficiently with department-wise, monthly, and yearly
              filters.
            </p>
          </div>

          {/* Patient Chart */}
          <div className="bg-gray-800 rounded-md shadow p-6 mb-6">
            <div className="flex  justify-between items-center">
              <h3 className="text-xl font-semibold mb-4">Patient Tracking</h3>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                >
                  <option>All Departments</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                </select>

                <select
                  value={monthFilter}
                  onChange={(e) => setMonthFilter(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>

                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(Number(e.target.value))}
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                >
                  {[2023, 2024, 2025, 2026].map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* <ResponsiveContainer width="100%" height={320}>
              <BarChart data={patientMonthlyData}>
                <CartesianGrid stroke="#374151" />
                <XAxis dataKey="month" stroke="#E5E7EB" />
                <YAxis stroke="#E5E7EB" />
                <Tooltip />
                <Legend />

                <Bar dataKey="new" stackId="patients" fill="#3B82F6" name="New Patients" />
                <Bar dataKey="old" stackId="patients" fill="#10B981" name="Old / Returning" />
                <Bar dataKey="lost" stackId="patients" fill="#EF4444" name="Lost / Missed" />
              </BarChart>
            </ResponsiveContainer> */}


            <PatientAnalysisBarChart/>
          </div>

          {/* Payment Chart */}
          <div className="bg-gray-800 rounded-md shadow p-6 mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold mb-4">Payment Tracking</h3>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                >
                  <option>All Departments</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Dermatology</option>
                </select>

                <select
                  value={monthFilter}
                  onChange={(e) => setMonthFilter(e.target.value)}
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>

                <select
                  value={yearFilter}
                  onChange={(e) => setYearFilter(Number(e.target.value))}
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                >
                  {[2023, 2024, 2025, 2026].map((y) => (
                    <option key={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={paymentData}>
                <CartesianGrid stroke="#374151" />
                <XAxis dataKey="month" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#3B82F6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
