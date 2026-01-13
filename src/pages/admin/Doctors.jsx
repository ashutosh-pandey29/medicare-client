import { Outlet, useNavigate } from "react-router-dom";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { MdLocalHospital } from "react-icons/md";

export const Doctors = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="sm:max-w-sm md:min-w-full mx-auto p-1 h-auto">
        <AdminPageHeading
          title="Doctor Management"
          subtitle="Manage doctor profiles, review approvals, and register new doctors efficiently across all departments."
          icon={MdLocalHospital}
          rightContent={
            <button
              onClick={() => navigate("new")}
              className="
         inline-flex h-12 items-center justify-center rounded-md border border-slate-800
         bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size[200%_100%]
         px-6 font-medium text-slate-100 transition-all duration-300
         hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)]
         hover:scale-105 hover:shadow-lg
         active:scale-95 active:shadow-inner
         focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
         cursor-pointer
         animate-shimmer
       "
            >
              new Member
            </button>
          }
        />
        <Outlet />
      </div>
    </>
  );
};
