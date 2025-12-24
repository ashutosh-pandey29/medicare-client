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
import { Chat } from "../../pages/admin/Chat";
import {Notification} from "../../pages/admin/Notification";
import { SocketProvider } from "../../context/SocketContext";

const AdminRoutes = [
  {
    path: "/dashboard/admin",
    element: (
      <SocketProvider>
      <DashboardLayout role={"admin"} />,
      </SocketProvider>
    ),
    
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
        path: "department",
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
            element: <DoctorRegisterForm />,
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
        path: "chat",
        element: <Chat />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
];
export default AdminRoutes;
