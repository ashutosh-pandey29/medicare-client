import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { ApproveAppointment } from "../../pages/doctor/ApproveAppointment";
import { DashboardHome } from "../../pages/doctor/DashboardHome";
import { PatientTable } from "../../pages/doctor/PatientTable";
import { ReportEntry } from "../../pages/doctor/ReportEntry";
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "../../context/AuthContext";
import { SocketProvider } from "../../context/SocketContext";
import { Profile } from "../../pages/doctor/Profile";
import { Account } from "../../pages/doctor/Account";
import { PatientConsultation } from "../../pages/doctor/PatientConsultation";
import { Settings } from "../../pages/doctor/Settings";
import { DoctorProfileForm } from "../../components/forms/doctor/DoctorProfileForm";
import { DoctorProfilePage } from "../../components/forms/doctor/DoctorProfilePage";

const DoctorRoutes = [
  {
    path: "/dashboard/doctor",
    element: (
      <AuthProvider>
        <SocketProvider role="doctor">
          <ProtectedRoutes allowedRoles={["doctor"]} />
        </SocketProvider>
      </AuthProvider>
    ),
    children: [
      {
        element: <DashboardLayout role={"doctor"} />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "approve-appointment",
            element: <ApproveAppointment />,
          },
          {
            path: "patient-consultation",
            element: <PatientConsultation />,
          },
          {
            path: "patient-table",
            element: <PatientTable />,
          },
          {
            path: "report-entry",
            element: <ReportEntry />,
          },
          {
            path: "profile",
            element: <Profile />,
            children: [
              {
                index: true,
                element: <DoctorProfilePage />,
              },
              {
                path: "create",
                element: <DoctorProfileForm />,
              },

              {
                path: "update",
                element: <DoctorProfileForm isEdit="true" />,
              },
            ],
          },

          {
            path: "account",
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

export default DoctorRoutes;
