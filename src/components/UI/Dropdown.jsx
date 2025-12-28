import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useModal } from "../../hooks/custom/useModal";

export const Dropdown = ({ actions = [] }) => {
  const [open, setOpen] = useState(false);
  const dropdownMenuRef = useRef();

  console.log(actions);

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
    <>
      <div className="relative" ref={dropdownMenuRef}>
        {/* dot button */}

        <button
          onClick={() => setOpen(!open)}
          className="p-1 hover:bg-zinc-300  rounded text-gray-500 w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <BsThreeDotsVertical className="text-lg font-medium" />
        </button>

        {open && (
          <div className="absolute right-0 top-full mt-2 w-60  bg-white border border-gray-200 rounded-md shadow-xl z-10 ">
            {actions.map((action, idx) => {
              const Icon = action.icon;

              return (
                <button
                  key={idx}
                  onClick={action.onClick}
                  className={`cursor-pointer  w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-200 group ${
                    action.danger
                      ? "hover:bg-red-50 text-red-600"
                      : "hover:bg-linier-to-r hover:from-blue-50 hover:to-indigo-50 text-slate-700"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      action.danger
                        ? "bg-red-100 group-hover:bg-red-200"
                        : "bg-slate-100 group-hover:bg-blue-200"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${
                        action.danger ? "text-red-600" : "text-slate-600 group-hover:text-blue-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`font-medium text-sm ${
                      action.danger ? "" : "group-hover:text-blue-600"
                    }`}
                  >
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
