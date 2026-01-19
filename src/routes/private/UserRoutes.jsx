import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "../../context/AuthContext";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { DashboardHome } from "../../pages/user/DashboardHome";
import { Appointment } from "../../pages/user/Appointment";
import { Payment } from "../../pages/user/Payment";
import { SocketProvider } from "../../context/SocketContext";
import { Account } from "../../pages/user/Account";

const UserRoutes = [
  {
    path: "/dashboard/user",
    element: (
      <AuthProvider>
        <SocketProvider>
          <ProtectedRoutes allowedRoles={["user"]} />
        </SocketProvider>
      </AuthProvider>
    ),
    children: [
      {
        element: <DashboardLayout role="user" />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "appointments", element: <Appointment /> },
          { path: "payment", element: <Payment /> },
          { path: "account", element: <Account /> },
        ],
      },
    ],
  },
];

export default UserRoutes;
