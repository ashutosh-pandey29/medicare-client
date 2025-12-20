import { NavLink } from "react-router-dom";
import { SidebarLinks } from "./SidebarLinks";
import { useAuth } from "../../../context/AuthContext";
// icons
import { MdDashboard } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaBookMedical } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

export const Sidebar = ({ handleSidebarToggle, role }) => {
  const links = SidebarLinks[role] || [];
  // const { logout } = useAuth();

  return (
    <aside className="flex flex-col justify-between h-screen  p-3 bg-zinc-50">
      {/* Top Section */}
      <div>
        {/* Profile */}
        <div className="flex items-center gap-4 mb-4 p-2">
          <img
            src="https://randomuser.me/img/creator_keith.png"
            alt="profile"
            className="rounded-full w-10 h-10 outline-2 outline-green-500 outline-offset-2"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-slate-800">User Name</span>
            <span className="text-orange-500 font-medium text-sm">User location</span>
          </div>
        </div>

        {/* Links */}
        <ul className="mt-2 space-y-1 h-[74vh] overflow-y-auto pr-2">
          {links.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                end={
                  item.path === "/dashboard" ||
                  item.path === "/dashboard/doctor" ||
                  item.path === "/admin/dashboard"
                }
                className={({ isActive }) =>
                  `flex items-center p-3 gap-3 rounded hover:bg-blue-600 hover:text-white transition-colors ${
                    isActive ? "bg-blue-600 text-white" : "text-slate-900"
                  }`
                }
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    handleSidebarToggle();
                  }
                }}
              >
                {item.icon}
                <span className="text-lg">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Section: Logout */}
      <div>
        <button className="flex items-center p-3 gap-3 rounded hover:bg-red-600 hover:text-white transition-colors text-slate-900">
          <RiLogoutBoxFill className="text-lg" />
          <span className="text-lg">Logout</span>
        </button>
      </div>
    </aside>
  );
};
