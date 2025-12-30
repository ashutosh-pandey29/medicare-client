import React from "react";
import { DarkMiniCard } from "../../components/common/dashboard/card/DarkMiniCard";
import { FaUsers } from "react-icons/fa";
import { AdminWelcomeCard } from "../../components/common/dashboard/card/AdminWelcomeCard";
import { PatientAnalysisBarChart } from "../../components/charts/PatientAnalysisBarChart";
import { RevenueBarChart } from "../../components/charts/RevenueAnalysis";

export const AdminDashboardHome = () => {
  const tableData = [
    { id: 1, name: "John Doe", role: "Doctor", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Nurse", status: "Inactive" },
  ];

  return (
    <section className="h-auto border">
      <AdminWelcomeCard />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-5 md:mt-10">
        <DarkMiniCard icon={<FaUsers />} title={"testing"} value={20} />
        <DarkMiniCard icon={<FaUsers />} title={"testing"} value={20} />
        <DarkMiniCard icon={<FaUsers />} title={"testing"} value={20} />
        <DarkMiniCard icon={<FaUsers />} title={"testing"} value={20} />
      </div>

      {/*  */}

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
        <div className="bg-[#020617]  rounded-md border border-[#1F2937] shadow-lg mt-6">
          <div className="flex justify-between items-center mb-4 p-3">
            <h2 className="text-xl font-bold text-white">Notifications</h2>
            <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-4 py-2 rounded-md transition">
              Add Staff
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#111827] text-left">
                  <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">Sr.no.</th>
                  <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">Name</th>
                  <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">
                    Working Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-[#111827]">
                    <td className="py-3 px-4 text-[#E5E7EB] border-b border-[#1F2937]">{row.id}</td>
                    <td className="py-3 px-4 text-[#E5E7EB] border-b border-[#1F2937]">
                      {row.name}
                    </td>
                    <td
                      className={`py-3 px-4 border-b border-[#1F2937] font-semibold ${
                        row.status === "Active" ? "text-emerald-400" : "text-red-500"
                      }`}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-[#020617] rounded-md border border-[#1F2937] shadow-lg mt-6">
          <div className="flex justify-between items-center p-4">
            <h2 className="text-lg font-bold text-white">Approval Requests</h2>
            <span className="text-xs text-yellow-400">Pending: 3</span>
          </div>

          <div className="divide-y divide-[#1F2937]">
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-slate-200 font-medium">Doctor Registration</p>
                <p className="text-sm text-slate-400">Dr. Rahul Sharma</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded hover:bg-emerald-500/20">
                  Approve
                </button>
                <button className="px-3 py-1 text-sm bg-red-500/10 text-red-400 rounded hover:bg-red-500/20">
                  Reject
                </button>
              </div>
            </div>

            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-slate-200 font-medium">Leave Request</p>
                <p className="text-sm text-slate-400">Nurse – Anjali</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm bg-emerald-500/10 text-emerald-400 rounded">
                  Approve
                </button>
                <button className="px-3 py-1 text-sm bg-red-500/10 text-red-400 rounded">
                  Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Management Table */}

      <div className="bg-[#020617]  rounded-md border border-[#1F2937] shadow-lg mt-10">
        <div className="flex justify-between items-center mb-4 p-3">
          <h2 className="text-xl font-bold text-white">Today Working Staff</h2>
          <button
            className="
  bg-[#0F172A]
  border border-[#1F2937]
  text-slate-200
  px-4 py-2
  rounded-md
  flex items-center gap-2
  hover:bg-[#111827]
  hover:border-[#3B82F6]
  hover:text-[#3B82F6]
  transition-all duration-200
"
          >
            + Add Staff
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#111827] text-left">
                <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">Sr.no.</th>
                <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">Name</th>
                <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">Department</th>
                <th className="py-3 px-4 text-slate-300 border-b border-[#1F2937]">Working Time</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-[#111827]">
                  <td className="py-3 px-4 text-[#E5E7EB] border-b border-[#1F2937]">{row.id}</td>
                  <td className="py-3 px-4 text-[#E5E7EB] border-b border-[#1F2937]">{row.name}</td>
                  <td className="py-3 px-4 text-[#E5E7EB] border-b border-[#1F2937]">department</td>
                  <td className="py-3 px-4 text-[#E5E7EB] border-b border-[#1F2937]">
                    working time
                  </td>
                  {/* <td
                    className={`py-3 px-4 border-b border-[#1F2937] font-semibold ${
                      row.status === "Active" ? "text-emerald-400" : "text-red-500"
                    }`}
                  >
                    {row.status}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-2.5">
        <div className="bg-[#020617] rounded-md border border-[#1F2937] shadow-lg mt-6">
          <h1 className="text-white font-bold text-2xl p-5">Patient Track</h1>
          <hr className="border border-gray-600" />
          {/* <MyChart /> */}
          <PatientAnalysisBarChart />
        </div>

        <div className="bg-[#020617] rounded-md border border-[#1F2937] shadow-lg mt-6">
          <h1 className="text-white font-bold text-2xl p-5">Revenue Track</h1>
          <hr className="border border-gray-600" />

          <RevenueBarChart />
        </div>
      </div>
    </section>
  );
};
