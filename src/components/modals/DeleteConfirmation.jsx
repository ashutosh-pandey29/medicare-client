import React, { useState } from "react";
import { FiAlertTriangle, FiTrash2 } from "react-icons/fi";
import { RiCloseLargeLine } from "react-icons/ri";

export const DeleteConfirmation= ({
  onClose,
  onConfirm,
  title = "Confirm Delete",
  content,
  theme = "light",
}) => {
  const [confirmText, setConfirmText] = useState("");
  const isDark = theme === "dark";
  const isConfirmed = confirmText === "DELETE";

  return (
     <div className="w-full max-w-sm md:max-w-lg p-1 md:p-6">
      <div
        className="bg-gray-800 text-gray-200 rounded-xl p-5 md:p-6 space-y-6"
        style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px 10px" }}
      >
      {/* Header */}
      <div
        className={`flex items-center justify-between pb-3 mb-3 border-b
          ${isDark ? "border-slate-700" : "border-zinc-100"}
        `}
      >
        <div className="flex items-center gap-2 text-base sm:text-lg font-semibold">
          <FiAlertTriangle className="text-red-500" size={20} />
          {title}
        </div>

        <button
          onClick={onClose}
          className={`w-8 h-8 flex items-center justify-center rounded
            ${isDark ? "hover:bg-slate-800" : "hover:bg-gray-100"}
          `}
        >
          <RiCloseLargeLine />
        </button>
      </div>

      {/* Content */}
      <div className={`text-sm mb-4 ${isDark ? "text-slate-200" : "text-gray-600"}`}>
        {content}
      </div>

      {/* Confirm Input */}
        <div className="mb-5">
          
        <label className="block text-xs font-medium mb-1">
          Type <span className="font-mono text-red-500">DELETE</span> to confirm
        </label>

        <input
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          placeholder="DELETE"
          className={`w-full h-10 px-3 rounded-md border outline-none
            ${isDark
              ? "bg-slate-800 border-slate-700 text-slate-200 focus:ring-red-500/30"
              : "bg-white border-gray-300 focus:ring-red-500/40"}
            focus:ring-2 transition`}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          className={`px-4 py-2 text-sm rounded-md transition
            ${isDark
              ? "bg-slate-800 hover:bg-slate-700"
              : "bg-gray-100 hover:bg-gray-200"}
          `}
        >
          Cancel
        </button>

        <button
          disabled={!isConfirmed}
          onClick={onConfirm}
          className={`flex items-center gap-2 px-4 py-2 text-sm rounded-md text-white transition
            ${isConfirmed
              ? "bg-red-600 hover:bg-red-700"
              : "bg-red-400 cursor-not-allowed"}
          `}
        >
          <FiTrash2 size={16} />
          Delete
        </button>
      </div>
    </div>
    </div>
  );
};
