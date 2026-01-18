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
            className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded font-medium"
          >
            New Doctor
          </button>
          }
        />
        <Outlet />
      </div>
    </>
  );
};
