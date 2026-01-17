import { useState, useRef, useEffect } from "react";
import { BsBell } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { LuCheckCheck } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export const NotificationBell = ({ notifications = [], theme = "light" }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const isDark = theme === "dark";

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
        onClick={() => setOpen(!open)}
        className={`
    w-11 h-11 flex items-center justify-center
    rounded-full shrink-0 cursor-pointer
    ${theme === "dark" ? " text-white hover:bg-slate-800" : " text-blue-800 hover:bg-gray-200"}
   
  `}
      >
        <FiBell className="text-xl" />

        {unreadCount > 0 && (
          <span className="animate-ping absolute top-2.5 right-2.5 block h-1 w-1 rounded-full ring-2 ring-green-400 bg-green-600"></span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`
            fixed sm:absolute inset-x-2 sm:inset-x-auto top-12 sm:right-0
            sm:mt-2 w-auto sm:w-80 lg:w-96 max-h-[70vh]
            rounded-xl shadow-xl overflow-hidden z-50
            ${isDark ? "bg-slate-900 text-white" : "bg-white text-gray-800"}
          `}
        >
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-12 px-4">
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-3
                    ${isDark ? "bg-slate-800" : "bg-linear-to-br from-blue-100 to-indigo-100"}
                  `}
                >
                  <LuCheckCheck
                    className={`w-8 h-8 ${isDark ? "text-green-400" : "text-blue-500"}`}
                  />
                </div>
                <p className="font-medium">All clear!</p>
                <p className="text-sm opacity-70 mt-1">No new notifications</p>
              </div>
            ) : (
              <div className="divide-y divide-white/10">
                {notifications.map((n) => (
                  <div
                    key={`${n.appointmentId}-${n.createdAt}`}
                    onClick={() => navigate("notifications")}
                    className={`
                      p-4 cursor-pointer transition
                      ${
                        isDark
                          ? !n.read
                            ? "bg-slate-800 hover:bg-slate-700"
                            : "hover:bg-slate-800"
                          : !n.read
                          ? "bg-blue-50"
                          : "hover:bg-blue-50"
                      }
                    `}
                  >
                    <div className="flex gap-3">
                      <div
                        className={`
                          w-8 h-8 rounded-full flex items-center justify-center shrink-0
                          ${
                            isDark ? "bg-indigo-600" : "bg-linear-to-br from-blue-500 to-indigo-600"
                          }
                        `}
                      >
                        <BsBell className="text-white w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        {/* Title */}
                        <p
                          className={`text-sm font-semibold truncate ${
                            isDark ? "text-gray-100" : "text-gray-900"
                          }`}
                        >
                          {n.title}
                        </p>

                        {/* Message */}
                        <p
                          className={`text-sm mt-0.5 truncate ${
                            isDark ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {n.message}
                        </p>

                        {/* Timestamp */}
                        <p className="text-xs opacity-60 mt-1">
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
            <div
              className={`px-4 py-3 border-t ${
                isDark ? "border-white/10 bg-slate-800" : "border-gray-200 bg-gray-50"
              }`}
            >
              <button
                onClick={() => navigate("notifications")}
                className="w-full py-2 text-sm font-medium text-blue-500 hover:bg-blue-500/10 rounded-lg"
              >
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
