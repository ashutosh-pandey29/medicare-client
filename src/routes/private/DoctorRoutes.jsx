import {DashboardLayout} from "../../components/layout/DashboardLayout";
import { ApproveAppointment } from "../../pages/doctor/ApproveAppointment";
import { DashboardHome } from "../../pages/doctor/DashboardHome";
import { PatientQueue } from "../../pages/doctor/PatientQueue";
import { PatientTable } from "../../pages/doctor/PatientTable";
import { ReportEntry } from "../../pages/doctor/ReportEntry";
const DoctorRoutes = [
  {
    path: "/dashboard/doctor",
    element: <DashboardLayout role={ "doctor"} />,
    children: [
      {
        index: true,
        element:<DashboardHome/>
      },
      {
        path: "approve-appointment",
        element:<ApproveAppointment/>
      },
      {
        path: "patient-queue",
        element:<PatientQueue/>
      },
      {
        path: "patient-table",
        element:<PatientTable/>
      },
      {
        path: "report-entry",
        element:<ReportEntry/>
      }

    ]
  }
]

export default DoctorRoutes;