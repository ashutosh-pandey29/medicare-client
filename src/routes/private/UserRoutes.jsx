// // auth pages
import ProtectedRoutes from "./ProtectedRoutes";
import { AuthProvider } from "../../context/AuthContext";
import { DashboardLayout } from "../../components/layout/DashboardLayout";
import { DashboardHome } from "../../pages/user/DashboardHome";
import { Appointment } from "../../pages/user/Appointment";
import { MedicalReport } from "../../pages/user/MedicalReport";
import { Payment } from "../../pages/user/Payment";
import Support from "../../pages/user/Support";
import Settings from "../../pages/user/Settings";

// const UserRoutes = [
//   {
//     path: "/dashboard/user",
//     element: (
//       <AuthProvider>
//         <ProtectedRoutes allowedRole="user">
//           <DashboardLayout role={"user"} />
//         </ProtectedRoutes>
//       </AuthProvider>
//     ),
//     children: [
//       {
//         index: true,
//         element: <DashboardHome />,
//       },
//       {
//         path: "appointments",
//         element: <Appointment />,
//       },
//       {
//         path: "medical-records",
//         element: <MedicalReport />,
//       },
//       {
//         path: "payment",
//         element: <Payment />,
//       },
//       {
//         path: "settings",
//         element: <Settings />,
//       },
//       {
//         path: "support",
//         element: <Support />,
//       },
//     ],
//   },
// ];

// export default UserRoutes;


const UserRoutes = [
  {
    path: "/dashboard/user",
    element: (
      <AuthProvider>
        <ProtectedRoutes allowedRole="user" />
      </AuthProvider>
    ),
    children: [
      {
        element: <DashboardLayout role="user" />,
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "appointments", element: <Appointment /> },
          { path: "medical-records", element: <MedicalReport /> },
          { path: "payment", element: <Payment /> },
          { path: "settings", element: <Settings /> },
          { path: "support", element: <Support /> },
        ],
      },
    ],
  },
];

export default UserRoutes;
