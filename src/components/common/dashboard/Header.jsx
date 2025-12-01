import { FaBell } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

export const Header = ({ handleSidebarToggle }) => {
  return (
    <header className="bg-zinc-50 h-16 w-full flex items-center justify-between px-5">
      {/* Left Section (Optional: logo / page title) */}
      <div className="flex items-center gap-3">
        <h1 className="text-xl font-semibold text-gray-700  md:hidden">User name </h1>
        <h1 className="text-xl font-semibold text-gray-700 hidden  md:block">Dashboard</h1>
      </div>

      {/* Right Section: Notification + Profile */}
      <div className="flex items-center gap-4">
        {/* Notification */}
        <div className="relative">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 hover:bg-blue-500 text-white cursor-pointer transition-colors">
            <FaBell className="text-lg" />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full shadow-lg animate-pulse">
              3
            </span>
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="hidden md:flex items-center gap-3 content-center rounded px-3 py-2 text-gray-700 font-medium">
            <p>Welcome, Username</p>

          </div>
        </div>

        {/* toggle icon */}
        <button
          className="md:hidden bg-zinc-200 text-2xl rounded-lg py-3 px-5 cursor-pointer "
          onClick={handleSidebarToggle}
        >
          <GrMenu />
        </button>
      </div>
    </header>
  );
};
