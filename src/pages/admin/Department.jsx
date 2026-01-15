import { MdApartment } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { useForm } from "../../hooks/custom/useForm";

export const Department = () => {
  const navigate = useNavigate();


  return (
    <>
      <AdminPageHeading
        title="Department Management"
        subtitle="Keep your hospital structure organized. Manage every department efficiently—create,
        update, or delete department entries here"
        icon={MdApartment}
        rightContent={
          <button
            onClick={() => navigate("new")}
            className="px-6 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded font-medium"
          >
            New Department
          </button>
        }
      />

      <Outlet />
    </>
  );
};
