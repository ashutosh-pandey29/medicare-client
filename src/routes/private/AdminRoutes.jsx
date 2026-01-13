import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { AdminDashboardHome } from "../../pages/admin/AdminDashboardHome";
import { Doctors } from "../../pages/admin/Doctors";
import { TotalPatientTable } from "../../pages/admin/TotalPatientTable";
import { Billings } from "../../pages/admin/Billings";
import { Department } from "../../pages/admin/Department";
import { AddDoctor } from "../../pages/admin/AddDoctor";
import { DoctorList } from "../../pages/admin/DoctorList";
import { ViewDoctor } from "../../pages/admin/ViewDoctor";
import { DepartmentForm } from "../../components/forms/admin/DepartmentForm";
import { DepartmentList } from "../../pages/admin/DepartmentList";
import { DoctorProfileForm } from "../../components/forms/DoctorProfileForm";
import { DoctorRegisterForm } from "../../components/forms/DoctorRegisterForm";
import { Settings } from "../../pages/admin/Settings";
import { Notification } from "../../pages/admin/Notification";
import { SocketProvider } from "../../context/SocketContext";
import { Analysis } from "../../pages/admin/Analysis";
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
            path: "notification",
            element: <Notification />,
          },
          {
            path: "departments",
            children: [
              { index: true, element: <DepartmentList /> },
              {
                path: "new",
                element: <DepartmentForm />,
              },
              {
                path: "edit/:departmentId",
                element: <DepartmentForm />,
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
                path: "profile/:id",
                element: <ViewDoctor />,
              },
              {
                path: "new",
                element: <Register />,
              },
              {
                path: "new/profile/:doctorId",
                element: <DoctorProfileForm />,
              },
              {
                path: "profile/edit/:id",
                element: <DoctorProfileForm />,
              },
            ],
          },

          {
            path: "patient",
            element: <TotalPatientTable />,
          },
          {
            path: "billings",
            element: <Billings />,
          },
          {
            path: "reports-and-analytics",
            element: <Analysis />,
          },
          {
            path: "notifications",
            element: <Notification />,
          },
          {
            path: "accounts",
            element: <Account />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
];
export default AdminRoutes;
