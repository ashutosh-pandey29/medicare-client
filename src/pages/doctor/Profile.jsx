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
  FaStethoscope,
  FaHeart,
  FaChartLine,
  FaStar,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

export const Profile = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6">
          <div className="bg-linear-to-r from-cyan-500 to-blue-600 h-32"></div>
          <div className="px-8 pb-8">
            <div className="flex items-end justify-between -mt-16">
              <div className="flex items-end gap-6">
                <div className="w-32 h-32 bg-white rounded-2xl shadow-lg flex items-center justify-center border-4 border-white">
                  <FaStethoscope className="w-16 h-16 text-cyan-600" />
                </div>
                <div className="mb-2">
                  <h1 className="text-3xl font-bold text-gray-800">Dr. Rajesh Kumar</h1>
                  <p className="text-gray-600 text-lg">Cardiologist</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                      <FaStar className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">(4.9/5.0)</span>
                  </div>
                </div>
              </div>
              <button className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition-colors flex items-center gap-2 shadow-lg mb-2">
                <FaEdit className="w-5 h-5" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaUser className="w-6 h-6 text-cyan-600" />
                Contact Information
              </h2>
              <div className="space-y-4">
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
                  <FaMapMarkerAlt className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-gray-800 font-medium">
                      Apollo Hospital, Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="w-5 h-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-gray-800 font-medium">15 March 1985</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaChartLine className="w-6 h-6 text-cyan-600" />
                Professional Stats
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-600">Total Patients</span>
                  <span className="text-2xl font-bold text-blue-600">2,547</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="text-2xl font-bold text-green-600">98.5%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-600">Experience</span>
                  <span className="text-2xl font-bold text-purple-600">15 Years</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-600">Surgeries</span>
                  <span className="text-2xl font-bold text-orange-600">456</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaGraduationCap className="w-6 h-6 text-cyan-600" />
                Education & Qualifications
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-cyan-500 pl-4 py-2">
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

            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaBriefcase className="w-6 h-6 text-cyan-600" />
                Work Experience
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800">Senior Cardiologist</h3>
                  <p className="text-gray-600">Apollo Hospital, Mumbai</p>
                  <p className="text-sm text-gray-500 mt-1">2018 - Present (6 years)</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Leading cardiac care unit, performing complex surgeries and managing critical
                    patients.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-bold text-gray-800">Consultant Cardiologist</h3>
                  <p className="text-gray-600">Fortis Hospital, Mumbai</p>
                  <p className="text-sm text-gray-500 mt-1">2013 - 2018 (5 years)</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Handled emergency cardiac cases and performed angioplasty procedures.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Awards */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaAward className="w-6 h-6 text-cyan-600" />
                Certifications & Awards
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FaHeart className="w-5 h-5 text-yellow-600" />
                    Best Cardiologist Award
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Healthcare Excellence Awards 2023</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FaAward className="w-5 h-5 text-blue-600" />
                    Board Certified
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">National Board of Cardiology</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <MdHealthAndSafety className="w-5 h-5 text-green-600" />
                    ACLS Certified
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Advanced Cardiac Life Support</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                  <h3 className="font-bold text-gray-800 flex items-center gap-2">
                    <FaStar className="w-5 h-5 text-purple-600" />
                    Excellence in Patient Care
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Apollo Hospital Recognition 2022</p>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaHeart className="w-6 h-6 text-cyan-600" />
                Specializations
              </h2>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full font-medium">
                  Interventional Cardiology
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">
                  Angioplasty
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">
                  Heart Failure Management
                </span>
                <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                  Cardiac Arrhythmia
                </span>
                <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                  Echocardiography
                </span>
                <span className="px-4 py-2 bg-pink-100 text-pink-700 rounded-full font-medium">
                  Preventive Cardiology
                </span>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <FaClock className="w-6 h-6 text-cyan-600" />
                Working Hours
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
  );
};
