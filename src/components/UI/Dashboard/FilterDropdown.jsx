import React, { useEffect, useRef, useState } from "react";
import { FaCalendar, FaChevronDown, FaFilter } from "react-icons/fa";

export const FilterDropdown = ({ filters = [] }) => {
  const [open, setOpen] = useState(false);
const filterDropdownRef = useRef(null);

useEffect(() => {
  const handleOutsideClick = (event) => {
    if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, []);

  return (
    <>
      <div className="relative" ref={filterDropdownRef}>
        {/* Filter Button */}
        <button
          onClick={() => setOpen(!open)}
          className="px-3 py-1.5 bg-white border border-gray-100 rounded flex items-center gap-2 hover:bg-gray-50 transition-colors "
        >
          <span className="font-medium text-gray-700 hidden md:block">Filters</span>

          <FaChevronDown
            className={`md:block hidden w-4 h-4 text-gray-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />

          {/* small screen filter icon */}

          <FaFilter className="w-4 h-4 text-gray-500 md:hidden" />
        </button>

        {/* Dropdown */}
        {open && (
          <>
            {/* Dropdown Content */}
            <div className="absolute right-0   mt-1 w-[260px] sm:w-full md:min-w-sm bg-white border border-gray-200 rounded-lg shadow-lg z-20 ">
              {/* Search */}
              <div className="p-4 border-b border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* filter action  */}
              <div className="p-4 border-b border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-1">Filter</label>
                <div className="space-y-0">
                  {filters.map((f, i) => (
                    <label
                      key={i}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{f.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Date Range */}
              <div className="p-4 border-b border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FaCalendar className="w-4 h-4 inline mr-1" />
                  Date Range
                </label>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">From</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">To</label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="p-4 flex items-center justify-between gap-3 ">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                  Reset
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                  Apply
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
