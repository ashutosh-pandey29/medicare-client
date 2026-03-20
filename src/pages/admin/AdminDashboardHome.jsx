import React, { useEffect, useState } from "react";
import { DarkMiniCard } from "../../components/common/dashboard/card/DarkMiniCard";
import { AdminWelcomeCard } from "../../components/common/dashboard/card/AdminWelcomeCard";
import { PatientAnalysisBarChart } from "../../components/charts/PatientAnalysisBarChart";
import { RevenueBarChart } from "../../components/charts/RevenueAnalysis";
import { FaUserMd, FaUsers, FaCalendarCheck, FaRupeeSign } from "react-icons/fa";
import { HiOutlineArrowTrendingUp, HiOutlinePresentationChartBar } from "react-icons/hi2";
import { useStateAndGraph } from "../../hooks/admin/useStatsAndGraph";

export const AdminDashboardHome = () => {
  // get stats
  const [stats ,  setStats] =  useState({});
  const { loading, getStatsForAdmin } = useStateAndGraph();

  useEffect(() => {
    const loadStats = async () => {
      const response = await getStatsForAdmin();
      if (response.success) {
        setStats(response.data);
      }
    };
    loadStats();
  }, []);

  return (
    <section className="h-auto border">
      <AdminWelcomeCard />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2.5 mt-5 md:mt-10">
        {/* Total Doctors */}
        <DarkMiniCard icon={<FaUserMd />} title="Total Doctors" value={`${stats.totalDoctor}`} />

        {/* Total Patients */}
        <DarkMiniCard icon={<FaUsers />} title="Total Patients" value={`${stats.totalAppointment}`} />

        {/* Today's Appointments */}
        <DarkMiniCard icon={<FaCalendarCheck />} title="Total Department" value={stats.totalDepartment || "00"} />

        {/* Revenue */}
        <DarkMiniCard icon={<FaRupeeSign />} title="Total Revenue" value={stats.totalRevenue}/>
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
