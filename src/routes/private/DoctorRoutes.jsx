import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { ApproveAppointment } from "../../pages/doctor/ApproveAppointment";
import { DashboardHome } from "../../pages/doctor/DashboardHome";
import { PatientQueue } from "../../pages/doctor/PatientQueue";
import { PatientTable } from "../../pages/doctor/PatientTable";
import { ReportEntry } from "../../pages/doctor/ReportEntry";
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "../../context/AuthContext";
const DoctorRoutes = [
  {
    path: "/dashboard/doctor",
    element: (
      <AuthProvider>
        <ProtectedRoutes allowedRole="doctor" />
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
            path: "patient-queue",
            element: <PatientQueue />,
          },
          {
            path: "patient-table",
            element: <PatientTable />,
          },
          {
            path: "report-entry",
            element: <ReportEntry />,
          },
        ],
      },
    ],
  },
];

export default DoctorRoutes;
