import React, { useState, useEffect } from "react";
import { BsActivity, BsCalendar2, BsShieldCheck } from "react-icons/bs";
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
      className="relative w-full rounded-xl overflow-hidden shadow border"
      style={{
        background: "linear-gradient(135deg, #0B1220 0%, #111827 50%, #1E40AF 100%)",
        borderColor: "#1F2937",
      }}
    >
      {/* Subtle grid decoration */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size[20px_20px]" />

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
              <HiOutlineBuildingOffice2 className="w-8 h-8 text-blue-400" />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Hospital Administration</h2>
              <p className="text-sm md:text-base text-slate-300 mt-1">
                System overview, approvals & operational control
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <BsShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Access Level</p>
                <p className="text-sm font-semibold text-white">Administrator</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-lg bg-blue-600/20 flex items-center justify-center">
                <FaServer className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400">System Status</p>
                <p className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                  <BsActivity /> Operational
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Time / Date */}
        <div className="mt-6 flex flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
              <BsCalendar2 className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Today</p>
              <p className="text-sm font-semibold text-white">{formatDate(currentTime)}</p>
            </div>
          </div>

          {/* <div>
            <p className="text-xs text-slate-400">Current Time</p>
            <p className="text-lg font-bold text-white tracking-wide">
              {formatTime(currentTime)}
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};
