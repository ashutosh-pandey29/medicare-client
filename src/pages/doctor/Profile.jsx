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
import { useNavigate } from "react-router-dom";
import { FaIdBadge } from "react-icons/fa6";

export const Profile = () => {
  const isProfileCompleted = true;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Card */}

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
                      Profile & Professional Details
                    </h2>

                    <Button
                      label={isProfileCompleted ? "Update Profile" : "Create Profile"}
                      variant="light"
                      onClick={
                        isProfileCompleted
                          ? () => navigate("../profile/update/130")
                          : () => navigate("../profile/create/")
                      }
                    />
                  </div>

                  <p className="text-gray-100 text-base  font-semibold">
                    Manage your personal information, qualifications, experience, and availability
                    to ensure accurate patient trust and system records.
                  </p>
                </div>
              </div>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2 ">
                <FaUser className="w-6 h-6 text-cyan-600" />
                Profile & Contact Information
              </h2>

              <div className="space-y-4 border-t border-t-zinc-100 ">
                <div className="flex items-start gap-3 mt-5">
                  <FaIdBadge className="w-8 h-8 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">About Doctor</p>
                    <p className="text-gray-800 font-medium">
                      Experienced Cardiologist with 12+ years of expertise in interventional
                      procedures...
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 mt-3">
                  <FaUser className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Name:</p>
                    <p className="text-gray-800 font-medium">dr.rajesh.kumar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaEnvelope className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-800 font-medium">dr.rajesh.kumar@hospital.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaPhone className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-800 font-medium">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaBriefcase className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="text-gray-800 font-medium">12+ year</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-gray-800 font-medium">15 March 1985</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800 font-medium">
                      Apollo Hospital, Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaGraduationCap className="w-6 h-6 text-cyan-600" />
                Education & Qualifications
              </h2>
              <div className="space-y-4  border-t border-t-zinc-100">
                <div className="border-l-4 border-cyan-500 pl-4 py-2 mt-3">
                  <h3 className="font-bold text-gray-800">MBBS (Bachelor of Medicine)</h3>
                  <p className="text-gray-600">
                    All India Institute of Medical Sciences (AIIMS), Delhi
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2003 - 2008</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800">MD in Cardiology</h3>
                  <p className="text-gray-600">
                    Post Graduate Institute of Medical Sciences, Chandigarh
                  </p>
                  <p className="text-sm text-gray-500 mt-1">2008 - 2011</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800">
                    Fellowship in Interventional Cardiology
                  </h3>
                  <p className="text-gray-600">Max Super Specialty Hospital, Delhi</p>
                  <p className="text-sm text-gray-500 mt-1">2011 - 2013</p>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaClock className="w-6 h-6 text-cyan-600" />
                Working Hours
              </h2>
              <div className=" border-t border-t-zinc-100">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4  mt-3">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800">Monday</p>
                    <p className="text-sm text-gray-600 mt-1">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800">Tuesday</p>
                    <p className="text-sm text-gray-600 mt-1">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800">Wednesday</p>
                    <p className="text-sm text-gray-600 mt-1">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800">Thursday</p>
                    <p className="text-sm text-gray-600 mt-1">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-800">Friday</p>
                    <p className="text-sm text-gray-600 mt-1">9:00 AM - 5:00 PM</p>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg border-2 border-red-200">
                    <p className="font-semibold text-red-600">Weekend</p>
                    <p className="text-sm text-red-500 mt-1">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
