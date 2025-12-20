import React from 'react';
import { FaBell, FaUser, FaUserMd, FaUsers, FaClock, FaCircle } from 'react-icons/fa';

const NotificationCard = () => {
  return (
    <>
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
 

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Stats Cards */}
          {/* <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Doctors</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">45</h3>
              </div>
              <div className="bg-blue-100 p-4 rounded-full">
                <FaUserMd className="text-blue-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Patients</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">1,234</h3>
              </div>
              <div className="bg-green-100 p-4 rounded-full">
                <FaUser className="text-green-600 text-2xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">New Notifications</p>
                <h3 className="text-3xl font-bold text-gray-800 mt-1">8</h3>
              </div>
              <div className="bg-red-100 p-4 rounded-full">
                <FaBell className="text-red-600 text-2xl" />
              </div>
            </div>
          </div> */}
        </div>

        {/* Notifications Card */}
        <div className="mt-6 bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaBell className="text-indigo-600" />
                Recent Notifications
              </h2>
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                3 New
              </span>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4">
              
              {/* Notification 1 - Doctor */}
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                <div className="bg-blue-500 p-3 rounded-full text-white flex-shrink-0">
                  <FaUserMd className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-gray-800">New Appointment Scheduled</h4>
                    <FaCircle className="text-red-500 text-xs mt-1 animate-pulse" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Dr. Sharma has scheduled an appointment for general checkup
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">Doctor</span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      Dec 17, 2024 • 10:30 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification 2 - Patient */}
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow">
                <div className="bg-green-500 p-3 rounded-full text-white flex-shrink-0">
                  <FaUser className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-gray-800">Prescription Ready</h4>
                    <FaCircle className="text-red-500 text-xs mt-1 animate-pulse" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Prescription for Patient ID #12345 is ready for collection
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Patient</span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      Dec 17, 2024 • 09:15 AM
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification 3 - General */}
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                <div className="bg-purple-500 p-3 rounded-full text-white flex-shrink-0">
                  <FaUsers className="text-xl" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-bold text-gray-800">System Maintenance Notice</h4>
                    <FaCircle className="text-red-500 text-xs mt-1 animate-pulse" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">
                    Scheduled maintenance tonight from 11 PM to 2 AM
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium">General</span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      Dec 16, 2024 • 08:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification 4 - Doctor (Old) */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-300 hover:shadow-md transition-shadow opacity-75">
                <div className="bg-blue-400 p-3 rounded-full text-white flex-shrink-0">
                  <FaUserMd className="text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">Lab Results Available</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Dr. Kumar has uploaded lab test results for review
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded font-medium">Doctor</span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      Dec 16, 2024 • 03:45 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification 5 - Patient (Old) */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-green-300 hover:shadow-md transition-shadow opacity-75">
                <div className="bg-green-400 p-3 rounded-full text-white flex-shrink-0">
                  <FaUser className="text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">Payment Confirmation</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Payment of ₹2,500 successfully processed. Receipt #RC-2024-1234
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-medium">Patient</span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      Dec 15, 2024 • 02:20 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Notification 6 - General (Old) */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-purple-300 hover:shadow-md transition-shadow opacity-75">
                <div className="bg-purple-400 p-3 rounded-full text-white flex-shrink-0">
                  <FaUsers className="text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-800 mb-1">New Policy Update</h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Updated privacy policy has been published. Please review
                  </p>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium">General</span>
                    <span className="flex items-center gap-1">
                      <FaClock />
                      Dec 14, 2024 • 11:30 AM
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* View All Button */}
            <div className="mt-6 text-center">
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                View All Notifications
              </button>
            </div>
          </div>
        </div>

      </div>
      </div>
    </>
      
  );
};

export default NotificationCard;