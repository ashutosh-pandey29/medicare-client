import React from "react";
import { FaUserMd, FaUsers, FaRupeeSign, FaCross } from "react-icons/fa";
import { MdApartment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export const ViewDepartment = ({ data, onClose }) => {
  return (
    <div className="w-full p-1 md:p-6">
      <div
        className="bg-gray-700 text-gray-200 rounded-xl p-5 md:p-6 space-y-6"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px 10px" }}
      >
        {/* Header */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left Content */}
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 rounded-lg">
              <MdApartment className="text-white text-2xl" />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold">{data?.departmentName}</h2>
              <p className="text-sm text-gray-400">Department ID: {data?.departmentId}</p>
            </div>
          </div>

          {/* Close Button – Top Right */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 h-6 w-6 text-center rounded-full 
              cursor-pointer  text-gray-300 hover:text-white
               transition flex  justify-between items-center"
          >
            <RxCross2 className="text-xl" />
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Total Doctors */}
          {/* <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-900 transition">
            <div className="p-3 bg-indigo-600 rounded-full">
              <FaUserMd className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Doctors</p>
              <h3 className="text-xl font-bold">102</h3>
            </div>
          </div> */}

          {/* Total Patients */}
          {/* <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-900 transition">
            <div className="p-3 bg-emerald-600 rounded-full">
              <FaUsers className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Total Patients</p>
              <h3 className="text-xl font-bold">7820</h3>
            </div>
          </div> */}

          {/* <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4 hover:bg-gray-900 transition">
            <div className="p-3 bg-yellow-600 rounded-full">
              <FaRupeeSign className="text-white text-xl" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Department Fees</p>
              <h3 className="text-xl font-bold">{data?.departmentFees}</h3>
            </div>
          </div> */}
        </div>

        {/* Description */}
        <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-900">
          <h4 className="text-lg font-semibold mb-2">Department Description</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{data?.departmentDescription}</p>
        </div>
      </div>
    </div>
  );
};
