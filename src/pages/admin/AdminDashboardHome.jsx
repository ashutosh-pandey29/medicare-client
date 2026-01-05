import React from "react";
import { DarkMiniCard } from "../../components/common/dashboard/card/DarkMiniCard";
import { AdminWelcomeCard } from "../../components/common/dashboard/card/AdminWelcomeCard";
import { PatientAnalysisBarChart } from "../../components/charts/PatientAnalysisBarChart";
import { RevenueBarChart } from "../../components/charts/RevenueAnalysis";
import { FaUserMd, FaUsers, FaCalendarCheck, FaRupeeSign } from "react-icons/fa";
import {
  HiCheck,
  HiOutlineArrowTrendingUp,
  HiOutlinePresentationChartBar,
  HiXMark,
} from "react-icons/hi2";
import { BsClockHistory, BsPersonCircle, BsThreeDotsVertical } from "react-icons/bs";

export const AdminDashboardHome = () => {
  const tableData = [
    { id: 1, name: "John Doe", role: "Doctor", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Nurse", status: "Inactive" },
  ];

  return (
    <section className="h-auto border">
      <AdminWelcomeCard />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-5 md:mt-10">
        {/* Total Doctors */}
        <DarkMiniCard icon={<FaUserMd />} title="Total Doctors" value={200} />

        {/* Total Patients */}
        <DarkMiniCard icon={<FaUsers />} title="Total Patients" value={1280} />

        {/* Today's Appointments */}
        <DarkMiniCard icon={<FaCalendarCheck />} title="Today's Appointments" value={42} />

        {/* Revenue */}
        <DarkMiniCard icon={<FaRupeeSign />} title="Revenue (Today)" value="₹18,500" />
      </div>

      {/*  staff and approval*/}

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Staff Management Table */}
        <div className="bg-[#0B1220] rounded-xl border border-[#1F2937] shadow-xl overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b border-[#1F2937] bg-[#111827]/50">
            <div>
              <h2 className="text-xl font-bold text-white">Staff on Duty</h2>
              <p className="text-xs text-slate-400 mt-1">Currently clocked-in personnel</p>
            </div>
            <button className="text-sm text-blue-400 hover:underline">View All</button>
          </div>

          <div className="overflow-x-auto custom-scrollbar">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#111827] text-left">
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-[#1F2937]">
                    Staff Member
                  </th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-[#1F2937]">
                    Department
                  </th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-[#1F2937]">
                    Shift
                  </th>
                  <th className="py-4 px-5 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-[#1F2937]">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2937]">
                {tableData.map((row) => (
                  <tr key={row.id} className="hover:bg-blue-600/5 transition-colors group">
                    <td className="py-4 px-5 border-b border-[#1F2937]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold text-xs border border-blue-500/30">
                          {row.name.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-white group-hover:text-blue-400">
                          {row.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-sm text-slate-300 border-b border-[#1F2937]">
                      <span className="bg-slate-800 px-2 py-1 rounded text-[11px] font-medium">
                        Cardiology
                      </span>
                    </td>
                    <td className="py-4 px-5 text-sm text-slate-400 border-b border-[#1F2937]">
                      <div className="flex items-center gap-2">
                        <BsClockHistory className="text-blue-500" /> 09:00 - 17:00
                      </div>
                    </td>
                    <td className="py-4 px-5 border-b border-[#1F2937]">
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        ACTIVE
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Approval Requests List */}
        <div className="bg-[#0B1220] rounded-xl border border-[#1F2937] shadow-xl overflow-hidden flex flex-col">
          <div className="flex justify-between items-center p-5 border-b border-[#1F2937] bg-[#111827]/50">
            <div>
              <h2 className="text-xl font-bold text-white">Pending Approvals</h2>
              <p className="text-xs text-slate-400 mt-1">Actions required by Admin</p>
            </div>
            <span className="px-2.5 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-lg text-xs font-bold">
              3 Requests
            </span>
          </div>

          <div className="divide-y divide-[#1F2937] grow">
            {/* Item 1 */}
            <div className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/2 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <BsPersonCircle size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Doctor Registration</p>
                  <p className="text-xs text-slate-400 mt-0.5 tracking-wide uppercase font-medium">
                    Dr. Rahul Sharma • Oncology
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-1.5 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all">
                  <HiCheck /> APPROVE
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-1.5 text-xs font-bold bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                  <HiXMark /> REJECT
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:bg-white/2 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                  <BsClockHistory size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">Emergency Leave</p>
                  <p className="text-xs text-slate-400 mt-0.5 tracking-wide uppercase font-medium">
                    Nurse Anjali • General Ward
                  </p>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-1.5 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 hover:bg-emerald-500 hover:text-white transition-all">
                  <HiCheck /> APPROVE
                </button>
                <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 px-4 py-1.5 text-xs font-bold bg-red-500/10 text-red-400 rounded-lg border border-red-500/20 hover:bg-red-500 hover:text-white transition-all">
                  <HiXMark /> REJECT
                </button>
              </div>
            </div>
          </div>

          <button className="w-full py-4 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all border-t border-[#1F2937]">
            Manage All Requests
          </button>
        </div>
      </div>

      {/* Chart -patient track and payment track */}

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/*  Patient Track Chart Container */}
        <div className="bg-[#0B1220] rounded-2xl border border-[#1F2937] shadow-xl overflow-hidden transition-all hover:border-blue-500/30">
          <div className="p-5 md:p-6 flex items-center justify-between bg-[#111827]/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <HiOutlinePresentationChartBar className="text-blue-400 text-xl" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Patient Track
                </h2>
                <p className="text-xs text-slate-400">Monthly patient admission analytics</p>
              </div>
            </div>
          </div>

          <div className=" md:p-1 min-h-[300px] w-full flex items-center justify-center">
            <div className="w-full h-full opacity-90 hover:opacity-100 transition-opacity">
              <PatientAnalysisBarChart />
            </div>
          </div>

          <div className="px-6 py-3 bg-[#111827]/20 border-t border-[#1F2937] flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Real-time Data
            </span>
            <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
              <HiOutlineArrowTrendingUp /> +8% from last month
            </span>
          </div>
        </div>

        {/* Revenue Track Chart Container */}
        <div className="bg-[#0B1220] rounded-2xl border border-[#1F2937] shadow-xl overflow-hidden transition-all hover:border-emerald-500/30">
          <div className="p-5 md:p-6 flex items-center justify-between bg-[#111827]/30">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg">
                <HiOutlineArrowTrendingUp className="text-emerald-400 text-xl" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  Revenue Track
                </h2>
                <p className="text-xs text-slate-400">Total earnings vs Operational costs</p>
              </div>
            </div>
          </div>

          <div className="md:p-1 min-h-[300px] w-full flex items-center justify-center">
            <div className="w-full h-full opacity-90 hover:opacity-100 transition-opacity">
              <RevenueBarChart />
            </div>
          </div>

          <div className="px-6 py-3 bg-[#111827]/20 border-t border-[#1F2937] flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Live Updates
            </span>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="text-[10px] text-slate-400 uppercase">Income</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-[10px] text-slate-400 uppercase">Expense</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
