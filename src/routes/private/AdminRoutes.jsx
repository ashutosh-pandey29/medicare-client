import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { AdminDashboardHome } from "../../pages/admin/AdminDashboardHome";
import { Doctors } from "../../pages/admin/Doctors";
import { TotalPatientTable } from "../../pages/admin/TotalPatientTable";
import { Billings } from "../../pages/admin/Billings";
import { Department } from "../../pages/admin/Department";
const AdminRoutes = [
  {
    path: "/admin/dashboard",
    element: <DashboardLayout role={"admin"} />,
    children: [
      {
        index: true,
        element:<AdminDashboardHome/>
      },
      {
        path: "department",
        element:<Department/>
      },
      {
        path: "doctors",
        element:<Doctors/>
      },
      {
        path: "patient",
        element:<TotalPatientTable/>
        
      },
      {
        path: "billings",
        element:<Billings/>
      }
    ]
  }
]
export default AdminRoutes;