import React, { useState, useEffect } from "react";
import { BsActivity, BsAward, BsCalendar, BsCalendar2 } from "react-icons/bs";
import { CgLock } from "react-icons/cg";
import { FaStethoscope } from "react-icons/fa6";
import { MiniCard } from "./MiniCard";
import {
  FaCalendarCheck,
  FaHashtag,
  FaHospitalUser,
  FaUserCheck,
  FaUserClock,
} from "react-icons/fa6";

export default function WelcomeCard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      <div
        className="relative w-full max-w-full rounded overflow-hidden shadow z-10"
        style={{
          background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
        }}
      >
        {/* Decorative medical cross patterns */}
        <div className="absolute top-4 right-8 w-16 h-16 opacity-10">
          <div className="absolute w-4 h-16 bg-white left-6"></div>
          <div className="absolute w-16 h-4 bg-white top-6"></div>
        </div>
        <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10">
          <div className="absolute w-3 h-12 bg-white left-4.5"></div>
          <div className="absolute w-12 h-3 bg-white top-4.5"></div>
        </div>

        {/* Pulse line decoration */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-20" viewBox="0 0 1000 200">
          <path
            d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 p-8">
          <div className="flex items-start justify-between mb-6">
            {/* Doctor Info Section */}
            <div className="flex items-center">
              {/* Avatar with stethoscope */}
              <div className="relative shrink-0 hidden lg:block">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-cyan-100">
                  <FaStethoscope className="w-14 h-14 text-cyan-600" strokeWidth={2} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <BsActivity className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Doctor Details */}
              <div className="ml-1 md:ml-6">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">Dr. Rajesh Kumar</h2>
                  <BsAward className="w-7 h-7 text-yellow-300" />
                </div>
                <p className="text-cyan-50 text-sm md:text-lg font-medium mb-1">
                  Cardiologist • MBBS, MD
                </p>
                {/* <p className="text-white text-base md:text-xl font-semibold">Welcome to Your Dashboard</p> */}
              </div>
            </div>
          </div>

          {/* Time and Date Section */}
          <div className="bg-opacity-20 backdrop-blur-sm rounded-2xl md:p-5 mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Real-time Clock */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 bg-opacity-30 rounded-xl flex items-center justify-center">
                  <CgLock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-cyan-100 text-sm font-medium">Current Time</p>
                  <p className="text-white text-2xl font-bold tracking-wider">
                    {formatTime(currentTime)}
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-600 bg-opacity-30 rounded-xl flex items-center justify-center">
                  <BsCalendar2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-cyan-100 text-sm font-medium">Today's Date</p>
                  <p className="text-white text-lg font-semibold">{formatDate(currentTime)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6 mt-3">
            <MiniCard
              title="Today's Appointments"
              icon={<FaCalendarCheck className="text-green-600" size={22} />}
              subText="18"
            />

            <MiniCard
              title="Waiting Patients"
              icon={<FaUserClock className="text-yellow-500" size={22} />}
              subText="5"
            />

            <MiniCard
              title="Completed Today"
              icon={<FaUserCheck className="text-emerald-600" size={22} />}
              subText="13"
            />

            <MiniCard
              title="Current Token"
              icon={<FaHashtag className="text-blue-600" size={22} />}
              subText="6"
            />
          </div>
        </div>

        {/* Bottom wave decoration */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
          <path
            d="M0,40L80,45C160,50,320,60,480,58C640,56,800,42,960,40C1120,38,1280,48,1360,53L1440,58L1440,100L0,100Z"
            fill="rgba(255,255,255,0.15)"
          />
        </svg>
      </div>
    </>
  );
}
