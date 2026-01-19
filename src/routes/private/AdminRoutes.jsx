import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { AdminDashboardHome } from "../../pages/admin/AdminDashboardHome";
import { Doctors } from "../../pages/admin/Doctors";
import { Billings } from "../../pages/admin/Billings";
import { Department } from "../../pages/admin/Department";
import { DoctorList } from "../../pages/admin/DoctorList";
import { ViewDoctorProfile } from "../../pages/admin/ViewDoctorProfile";
import { DepartmentForm } from "../../components/forms/admin/DepartmentForm";
import { DepartmentList } from "../../pages/admin/DepartmentList";
import { SocketProvider } from "../../context/SocketContext";
import { Account } from "../../pages/admin/Account";
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "../../context/AuthContext";
import Register from "../../components/forms/Register";

const AdminRoutes = [
  {
    path: "/dashboard/admin",
    element: (
      <AuthProvider>
        <SocketProvider role={"admin"}>
          <ProtectedRoutes allowedRoles={["admin"]} />
        </SocketProvider>
      </AuthProvider>
    ),

    children: [
      {
        element: <DashboardLayout role="admin" />,

        children: [
          {
            index: true,
            element: <AdminDashboardHome />,
          },

          {
            path: "departments",
            element: <Department />,
            children: [
              {
                index: true,
                element: <DepartmentList />,
              },
              {
                path: "new",
                element: <DepartmentForm />,
              },
              {
                path: "edit/:departmentId",
                element: <DepartmentForm isEdit={true} />,
              },
            ],
          },
          {
            path: "doctors",
            element: <Doctors />,
            children: [
              {
                index: true,
                element: <DoctorList />,
              },
              {
                path: "profile/:profileId",
                element: <ViewDoctorProfile />,
              },
              {
                path: "new",
                element: <Register />,
              },
            ],
          },

          {
            path: "billings",
            element: <Billings />,
          },

          {
            path: "accounts",
            element: <Account />,
          },
        ],
      },
    ],
  },
];
export default AdminRoutes;
