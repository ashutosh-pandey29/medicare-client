import { NavLink } from "react-router-dom";
import { SidebarLinks } from "./SidebarLinks";
import { useAuth } from "../../../context/AuthContext";
import profileImg from "../../../assets/dummy-profile/user.png";
// icons
import { MdDashboard } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaBookMedical } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useJwtDecode } from "../../../hooks/custom/useJwtDecode";

export const Sidebar = ({ handleSidebarToggle, role }) => {
  const links = SidebarLinks[role] || [];

  const { decodedUser } = useJwtDecode();
  // const { logout } = useAuth();

  console.log(decodedUser);

  return (
    <aside className="flex flex-col justify-between h-screen  p-3 ">
      {/* Top Section */}
      <div>
        {/* Profile */}
        <div className="flex items-center gap-4 mb-4 p-2 border-b border-green-500">
          <img
            src={profileImg}
            alt="profile"
            className="rounded-full w-10 h-10 outline-2 outline-zinc-100 outline-offset-2"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-white">{decodedUser?.username}</span>
            <span className="text-white font-medium text-sm">
              <span className="flex items-center gap-1 text-sm text-gray-300">
                <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                Available
              </span>
            </span>
          </div>
        </div>

        {/* Links */}
        <ul className="mt-2 space-y-1 h-[76vh] border-b border-b-green-400 overflow-y-auto pr-2 ">
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
                  `flex items-center p-3 gap-3 rounded hover:bg-[#277963] hover:text-white transition-colors ${
                    isActive ? "bg-[#277963] text-[#D1FAE5]" : "text-[#D1FAE5]"
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
        <button className="flex items-center p-3 gap-3 rounded w-full hover:bg-red-600 hover:text-white transition-colors text-white">
          <RiLogoutBoxFill className="text-lg" />
          <span className="text-lg">Logout</span>
        </button>
      </div>
    </aside>
  );
};
