import React from "react";
import { FaFileCsv, FaFileExcel, FaFilePdf, FaPrint } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { CgExport } from "react-icons/cg";

export const ExportOptionsModal = ({ data, onClose, theme = "dark" }) => {
  const isLight = theme === "light";

  return (
    <div className="w-full max-w-sm md:max-w-lg p-1 md:p-6">
      <div
        className={`rounded-xl p-5 md:p-6 space-y-6
          ${isLight ? "bg-white text-gray-800" : "bg-gray-700 text-gray-200"}
        `}
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px 10px" }}
      >
        {/* ================= HEADER ================= */}
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-blue-600 rounded-lg">
              <CgExport className="text-white text-2xl" />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold">Export Data</h2>
              <p className={`text-sm ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                Select the format you want to export the data in.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`absolute top-0 right-0 h-6 w-6 rounded-full transition
              ${isLight ? "text-gray-500 hover:text-gray-800" : "text-gray-300 hover:text-white"}
            `}
          >
            <RxCross2 className="text-xl" />
          </button>
        </div>

        {/* ================= EXPORT OPTIONS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ExportCard isLight={isLight} icon={<FaFileCsv />} label="Export as CSV" color="bg-green-600" />
          <ExportCard isLight={isLight} icon={<FaFileExcel />} label="Export as Excel" color="bg-emerald-600" />
          <ExportCard isLight={isLight} icon={<FaFilePdf />} label="Export as PDF" color="bg-red-600" />
          <ExportCard isLight={isLight} icon={<FaPrint />} label="Print Data" color="bg-blue-600" />
        </div>

        {/* ================= NOTE ================= */}
        <div className={`rounded-lg p-4 ${isLight ? "bg-gray-100" : "bg-gray-800"}`}>
          <p className={`text-base text-center ${isLight ? "text-gray-500" : "text-gray-400"}`}>
            <span className="text-red-400">this feature implemented later</span>
          </p>
        </div>
      </div>
    </div>
  );
};

/* ================= SUB COMPONENT ================= */

const ExportCard = ({ icon, label, color, isLight }) => {
  return (
    <button
      className={`rounded-lg p-4 flex items-center gap-4 transition
        ${isLight ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-800 hover:bg-gray-900"}
      `}
    >
      <div className={`p-3 rounded-full ${color}`}>
        <span className="text-white text-xl">{icon}</span>
      </div>

      <div>
        <h3 className="text-md font-semibold">{label}</h3>
        <p className={`text-xs ${isLight ? "text-gray-500" : "text-gray-400"}`}>
          Current view data
        </p>
      </div>
    </button>
  );
};
