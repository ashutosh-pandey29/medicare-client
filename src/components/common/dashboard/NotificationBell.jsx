import { useState, useRef, useEffect } from "react";
import { BsBell } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { LuCheckCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
export const NotificationBell = ({ notifications }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.length;
  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Bell Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center rounded-full   text-[#0f0722] 
               hover:bg-[#d7cfdd] transition  cursor-pointer "
        onClick={() => setOpen(!open)}
      >
        <FaBell className="text-lg" />
        {/* Notification Badge */}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg animate-pulse">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-64 h-[60vh] md:w-80 lg:w-96 bg-white  shadow-lg rounded overflow-y-auto z-9999">
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center mb-3">
                  <LuCheckCheck className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-gray-800 font-medium">All clear!</p>
                <p className="text-gray-500 text-sm mt-1">No new notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {notifications.map((n) => (
                  <div
                    key={`${n.appointmentId}-${n.createdAt}`}
                    className={`p-4 transition-all cursor-pointer group
            ${!n.read ? "bg-blue-50" : "hover:bg-linear-to-r hover:from-blue-50 hover:to-indigo-50"}
          `}
                  >
                    <div className="flex gap-3">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                        <BsBell className="w-5 h-5 text-white" />
                      </div>

                      <div
                        className="flex-1 min-w-0"
                        onClick={() => navigate("approve-appointment")}
                      >
                        <p className="text-sm font-medium leading-relaxed text-gray-800 group-hover:text-blue-700">
                          {n.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                          {n.createdAt
                            ? new Date(n.createdAt).toLocaleString("en-IN", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })
                            : "Just now"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {notifications.length > 0 && (
            <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
              <button className="w-full py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
