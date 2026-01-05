import React, { useEffect, useRef, useState } from "react";
import { FaCalendar, FaChevronDown, FaFilter } from "react-icons/fa";

export const FilterDropdown = ({ filters = [], theme = "light" }) => {
  const [open, setOpen] = useState(false);
  const filterDropdownRef = useRef(null);

  const isDark = theme === "dark";

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="relative" ref={filterDropdownRef}>
      {/* Filter Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`px-2 py-2 md:h-10 md:px-4 rounded flex items-center gap-2 transition-colors
          ${
            isDark
              ? "bg-slate-800  text-slate-200 hover:bg-slate-700"
              : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
          }`}
      >
        <span className="hidden md:block">Filters</span>

        <FaChevronDown
          className={`hidden md:block w-4 h-4 transition-transform
            ${open ? "rotate-180" : ""}
            ${isDark ? "text-slate-400" : "text-gray-500"}`}
        />

        <FaFilter className={`w-4 h-4 md:hidden ${isDark ? "text-slate-400" : "text-gray-500"}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute right-0 mt-2 w-[260px] sm:w-full md:min-w-sm rounded-lg shadow-xl z-20 border
            ${isDark ? "bg-slate-900 border-slate-700" : "bg-white border-gray-200"}`}
        >
          {/* Search */}
          <div className={`p-4 border-b ${isDark ? "border-slate-700" : "border-gray-200"}`}>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDark ? "text-slate-300" : "text-gray-700"
              }`}
            >
              Search
            </label>
            <input
              type="text"
              placeholder="Search..."
              className={`w-full h-10 px-4 rounded-md text-sm outline-none transition
                ${
                  isDark
                    ? "bg-slate-800 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-blue-500"
                    : "bg-white border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
                }`}
            />
          </div>

          {/* Filters */}
          <div className={`p-4 border-b ${isDark ? "border-slate-700" : "border-gray-200"}`}>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDark ? "text-slate-300" : "text-gray-700"
              }`}
            >
              Filter
            </label>

            <div className="space-y-1">
              {filters.map((f, i) => (
                <label
                  key={i}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer transition
                    ${
                      isDark
                        ? "hover:bg-slate-800 text-slate-300"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                    value={filters.value}
                  />
                  <span className="text-sm">{f.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Date Range */}
          <div className={`p-4 border-b ${isDark ? "border-slate-700" : "border-gray-200"}`}>
            <label
              className={`block text-sm font-medium mb-2 ${
                isDark ? "text-slate-300" : "text-gray-700"
              }`}
            >
              <FaCalendar className="inline mr-1" />
              Date Range
            </label>

            <div className="space-y-3">
              {["From", "To"].map((label) => (
                <div key={label}>
                  <label
                    className={`block text-xs mb-1 ${isDark ? "text-slate-400" : "text-gray-600"}`}
                  >
                    {label}
                  </label>
                  <input
                    type="date"
                    className={`w-full px-3 py-2 rounded-md text-sm outline-none
                      ${
                        isDark
                          ? "bg-slate-800 border border-slate-700 text-slate-200 focus:ring-2 focus:ring-blue-500"
                          : "bg-white border border-gray-300 text-gray-700 focus:ring-2 focus:ring-blue-500"
                      }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 flex justify-between gap-3">
            <button
              className={`px-4 py-2 text-sm rounded-md transition
                ${
                  isDark ? "text-slate-300 hover:bg-slate-800" : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              Reset
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
