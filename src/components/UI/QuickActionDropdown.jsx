import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  FaTachometerAlt,
  FaCalendarAlt,
  FaCog,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export const QuickActionDropdown = ({ decodedUser }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  // const { clearAuth } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => setOpen(!open);

  const handleLogout = () => {
    clearAuth();
    navigate("/login");
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={toggleDropdown}
        className="bg-zinc-100 text-gray-700 px-4 py-2 rounded hover:bg-zinc-200 flex items-center justify-between w-fit"
      >
        <span>{decodedUser?.username}</span>
        <span className="ml-2">{open ? <FaChevronUp /> : <FaChevronDown />}</span>
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded shadow-lg z-50 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <NavLink
          to={`/dashboard/${decodedUser?.role}`}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-zinc-100 transition-colors"
          onClick={() => setOpen(false)}
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/${decodedUser?.role}/appointment"
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-zinc-100 transition-colors"
          onClick={() => setOpen(false)}
        >
          <FaCalendarAlt /> Upcoming Appointments
        </NavLink>
        <NavLink
          to="/settings"
          className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-zinc-100 transition-colors"
          onClick={() => setOpen(false)}
        >
          <FaCog /> Settings
        </NavLink>
        <button
          onClick={handleLogout}
          className="w-full text-left flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-zinc-100 transition-colors"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};
