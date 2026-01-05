import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

export const Dropdown = ({ label, actions = [], theme = "light" }) => {
  const [open, setOpen] = useState(false);
  const dropdownMenuRef = useRef(null);

  const isDark = theme === "dark";

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideMenuClose = (event) => {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideMenuClose);
    return () => document.removeEventListener("mousedown", handleOutsideMenuClose);
  }, []);

  return (
    <div className="relative" ref={dropdownMenuRef}>
      {/* Button */}
      {label ? (
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center justify-between gap-2 px-1.5 py-1.5  md:h-10 md:px-4 rounded transition-all duration-300
            ${
              isDark
                ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                : "bg-white/20 text-gray-900 hover:bg-zinc-100"
            }`}
        >
          <span className="text-sm md:text-base">{label}</span>
          <IoIosArrowDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </button>
      ) : (
        <button
          onClick={() => setOpen(!open)}
          className={`p-1 rounded h-10 px-4 flex items-center justify-center transition
            ${isDark ? "text-slate-400 hover:bg-slate-700" : "text-gray-500 hover:bg-zinc-200"}`}
        >
          <BsThreeDotsVertical className="text-lg" />
        </button>
      )}

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute right-0 top-full mt-2 w-60 rounded-md shadow-xl z-20 border
            ${isDark ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}
        >
          {actions.map((action, idx) => {
            const Icon = action.icon;

            return (
              <button
                key={idx}
                onClick={() => {
                  setOpen(false);
                  action.onClick?.();
                }}
                className={`w-full px-4 py-3 flex items-center gap-3 text-left transition group
                  ${
                    action.danger
                      ? isDark
                        ? "text-red-400 hover:bg-red-500/10"
                        : "text-red-600 hover:bg-red-50"
                      : isDark
                      ? "text-slate-300 hover:bg-slate-800"
                      : "text-slate-700 hover:bg-blue-50"
                  }`}
              >
                <div
                  className={`p-2 rounded-lg transition
                    ${
                      action.danger
                        ? isDark
                          ? "bg-red-500/10"
                          : "bg-red-100"
                        : isDark
                        ? "bg-slate-700"
                        : "bg-slate-100"
                    }`}
                >
                  <Icon
                    className={`w-4 h-4
                      ${
                        action.danger
                          ? "text-red-500"
                          : isDark
                          ? "text-slate-300 group-hover:text-blue-400"
                          : "text-slate-600 group-hover:text-blue-600"
                      }`}
                  />
                </div>

                <span className="text-sm font-medium">{action.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
