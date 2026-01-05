import React, { useState, useEffect } from "react";
import { BsActivity, BsCalendar2, BsShieldCheck, BsClock } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaServer } from "react-icons/fa";

export const AdminWelcomeCard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) =>
    date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-2xl border transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #0B1220 0%, #111827 50%, #1E40AF 100%)",
        borderColor: "#1F2937",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]" />

      <div className="relative z-10 p-5 md:p-8 lg:p-10">
        {/* Main Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Left Side: Title and Icon */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="shrink-0 w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30 shadow-inner">
              <HiOutlineBuildingOffice2 className="w-7 h-7 md:w-10 md:h-10 text-blue-400" />
            </div>

            <div>
              <h2 className="text-base md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Hospital Administration
              </h2>
              <p className="text-xs md:text-lg text-slate-300 mt-1 opacity-80">
                System overview & operational control
              </p>
            </div>
          </div>

          {/* Right Side: Status Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
            <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <BsShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Access Level
                </p>
                <p className="text-sm font-bold text-white">Administrator</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl border border-white/10">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/20 flex items-center justify-center">
                <FaServer className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  System Status
                </p>
                <p className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Operational
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Date & Time */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <BsCalendar2 className="text-blue-400 w-5 h-5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Date</p>
              <p className="text-sm font-semibold text-white">{formatDate(currentTime)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BsClock className="text-blue-400 w-5 h-5" />
            <div>
              <p className="text-[10px] uppercase tracking-wider text-slate-400">Current Time</p>
              <p className="text-sm font-bold text-white tabular-nums">{formatTime(currentTime)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
