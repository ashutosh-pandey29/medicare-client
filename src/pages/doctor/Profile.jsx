import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaClock,
  FaEdit,
} from "react-icons/fa";
import { Button } from "../../components/UI/Button";
import { Outlet, useNavigate } from "react-router-dom";
import { FaIdBadge } from "react-icons/fa6";

export const Profile = () => {
  const profileMode = false;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}

        <div
          className="relative w-full max-w-full rounded overflow-hidden shadow-lg z-10"
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
          <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-0" viewBox="0 0 1000 200">
            <path
              d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
              stroke="white"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Main Content */}
          <div className="relative z-10 p-1 md:p-4">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center lg:w-6xl">
                <div className="ml-1 w-full ">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h2 className="text-base md:text-2xl lg:text-4xl font-bold text-white">
                      Profile & Details
                    </h2>
                  </div>

                  <p className="text-gray-100 text-base  font-semibold">
                    View and update your personal and professional information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Outlet />
      </div>
    </div>
  );
};
