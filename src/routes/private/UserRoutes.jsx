// auth pages
import ProtectedRoutes from "./ProtectedRoutes";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { DashboardHome } from "../../pages/user/DashboardHome";
import { Appointment } from "../../pages/user/Appointment";
import { MedicalReport } from "../../pages/user/MedicalReport";
import { Payment } from "../../pages/user/Payment";
import Support from "../../pages/user/Support";
import Settings from "../../pages/user/Settings";
import { ModalProvider } from "../../context/ModalContext";
import { BaseModal } from "../../components/model/BaseModal";

const isLoggedIn = true;
const UserRoutes = [
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes isAuthenticated={isLoggedIn} allowedRole={"user"}>
        <ModalProvider>
          <BaseModal />
          <DashboardLayout role={"user"} />
        </ModalProvider>
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "appointments",
        element: <Appointment />,
      },
      {
        path: "medical-records",
        element: <MedicalReport />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Support />,
      },
    ],
  },
];

export default UserRoutes;
