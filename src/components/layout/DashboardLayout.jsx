import { Outlet } from "react-router-dom";
import { Header } from "../common/dashboard/Header";
import { Sidebar } from "../common/dashboard/Sidebar";
import { useEffect, useState } from "react";
import { roleTheme } from "../../utils/theme";

export const DashboardLayout = ({ role }) => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const handleSidebarToggle = () => {
    console.log(isSidebarActive);
    setIsSidebarActive(!isSidebarActive);
  };

  // role based theme handling

  const theme = roleTheme[role] || roleTheme.user;

  useEffect(() => {
    if (!theme) return;
    document.documentElement.style.setProperty("--sidebar-bg", theme.sidebar);
    document.documentElement.style.setProperty("--header-bg", theme.header);
    document.documentElement.style.setProperty("--main-bg", theme.main);
    document.documentElement.style.setProperty("--accent", theme.accent);
  }, [theme]);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 md:w-80 w-full border-r border-zinc-100 h-scree z-20  md:block 
          ${isSidebarActive ? "sm:block top-[10vh]" : "hidden"} `}
        style={{ backgroundColor: "var(--sidebar-bg)" }}
      >
        <Sidebar handleSidebarToggle={handleSidebarToggle} role={role} />
      </aside>

      {/* Main content */}
      <div
        className={`flex-1 ml-0 md:ml-80 flex flex-col`}
        style={{ marginTop: "4rem" }} // header height
      >
        {/* Header */}
        <header
          className="fixed top-0 left-0 right-0 ml-0 md:ml-80 md:mr-0  h-16 border-b border-zinc-100  z-9999"
          style={{ backgroundColor: "var(--header-bg)" }}
        >
          <Header handleSidebarToggle={handleSidebarToggle} />
        </header>

        {/* Scrollable content */}
        <main
          className="flex-1  md:p-4  p-1 overflow-y-auto main"
          style={{ backgroundColor: "var(--main-bg)" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};
