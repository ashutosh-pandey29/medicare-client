import { NavLink } from "react-router-dom";
import { SidebarLinks } from "./SidebarLinks";
import profileImg from "../../../assets/dummy-profile/user.png";
import { RiCloseLargeLine, RiLogoutCircleLine } from "react-icons/ri";
import { useJwtDecode } from "../../../hooks/custom/useJwtDecode";
import { ConfirmActionModal } from "../../modals/ConfirmActionModal";
import { Modal } from "../../modals/Modal";
import { useModal } from "../../../hooks/custom/useModal";
import { FaCross } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { useLogout } from "../../../hooks/auth/useLogout";

export const Sidebar = ({ handleSidebarToggle, role }) => {
  const links = SidebarLinks[role] || [];
  const { modalData, openModal, closeModal } = useModal();
  const { decodedUser } = useJwtDecode();
  const { logout } = useLogout();

  // console.log(decodedUser);

  console.log(role);

  return (
    <>
      <aside className="flex flex-col justify-between h-screen p-1 md:p-3 ">
        {/* Top Section */}
        <div>
          {/* Profile */}
          <div className="flex items-center justify-between gap-4 mb-4 p-2 border-b border-zinc-100 ">
            <div className="flex items-center gap-4 ">
              <img
                src={profileImg}
                alt="profile"
                className="rounded-full w-10 h-10 outline-2 outline-zinc-100 outline-offset-2"
              />
              <div className="flex flex-col">
                <span
                  className={`text-lg font-semibold ${role === "doctor" && "text-white"} ${
                    role === "user" && "text-gray-800"
                  }  ${role === "admin" && "text-white"} `}
                >
                  {decodedUser?.username}
                </span>
                <span className="text-white font-medium text-sm">
                  <span className="flex items-center gap-1 text-sm text-green-300 animate-pulse">
                    <span className="h-2 w-2 bg-green-400 rounded-full"></span>
                    Available
                  </span>
                </span>
              </div>
            </div>

            <button
              className="md:hidden text-white bg-gray-800 text-xl rounded-lg p-2"
              onClick={() => handleSidebarToggle()}
            >
              <RxCross1 />
            </button>
          </div>

          {/* Links */}
          <ul className="mt-2 space-y-1 h-[76vh] overflow-y-auto pr-2 ">
            {links.map((item) => (
              <li key={item.title}>
                {role === "user" && (
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard/user"}
                    className={({ isActive }) =>
                      `flex items-center p-3 gap-3 rounded hover:bg-[#5058ad] hover:text-white transition-colors ${
                        isActive ? "bg-[#5058ad] text-[#eaf4ef]" : "text-gray-900"
                      }`
                    }
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        handleSidebarToggle();
                      }
                    }}
                  >
                    {item.icon}
                    <span className="text-lg ">{item.title}</span>
                  </NavLink>
                )}

                {role === "doctor" && (
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard/doctor"}
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
                )}

                {role === "admin" && (
                  <NavLink
                    to={item.path}
                    end={item.path === "/dashboard/admin"}
                    className={({ isActive }) =>
                      `flex items-center p-3 gap-3 rounded hover:bg-slate-900 hover:text-blue-500 transition-colors ${
                        isActive ? "bg-violet-700 text-[#D1FAE5]" : "text-gray-400"
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
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section: Logout */}
        <div className="px-2  py-3 w-full">
          {role === "doctor" && (
            <button
              onClick={() => logout()}
              className=" group flex items-center w-full gap-3 px-4 py-3.5 rounded-lg text-white hover:bg-red-600 hover:text-white transition-all duration-200 ease-in-out font-medium"
            >
              <RiLogoutCircleLine className="text-lg transition-transform group-hover:translate-x-1" />
              <span className="text-base">Logout</span>
            </button>
          )}

          {role === "user" && (
            <button
              onClick={() => logout()}
              className=" group flex items-center w-full gap-3 px-4 py-3.5 rounded-lg text-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 ease-in-out font-medium"
            >
              <RiLogoutCircleLine className="text-lg transition-transform group-hover:translate-x-1" />
              <span className="text-base">Logout</span>
            </button>
          )}

          {role === "admin" && (
            <button
              onClick={() => logout()}
              className=" group flex items-center w-full gap-3 px-4 py-3.5 rounded-lg text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-200 ease-in-out font-medium"
            >
              <RiLogoutCircleLine className="text-lg transition-transform group-hover:translate-x-1" />
              <span className="text-base">Logout</span>
            </button>
          )}
        </div>
      </aside>
    </>
  );
};
