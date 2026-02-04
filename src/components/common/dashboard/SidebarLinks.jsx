import {
  MdApartment,
  MdDashboard,
  MdLocalHospital,
  MdManageAccounts,
  MdPayments,
} from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaUsersCog } from "react-icons/fa";
import { FaCheckToSlot, FaCircleUser, FaGear, FaGears } from "react-icons/fa6";

export const SidebarLinks = {
  user: [
    { title: "Dashboard", icon: <MdDashboard className="text-lg" />, path: "/dashboard/user" },
    { title: "Appointments", icon: <IoIosTime className="text-lg" />, path: "appointments" },
    { title: "Payment", icon: <MdPayments className="text-lg" />, path: "payment" },
    {
      title: "Account and Settings ",
      icon: <MdManageAccounts className="text-lg" />,
      path: "account",
    },
  ],

  doctor: [
    {
      title: "Dashboard",
      icon: <MdDashboard className="text-lg" />,
      path: "/dashboard/doctor",
    },
   
    {
      title: "Patient Consultation ",
      icon: <FaCheckToSlot className="text-lg" />,
      path: "patient-consultation",
    },
    {
      title: "My Treated Patients  ",
      icon: <MdLocalHospital className="text-lg" />,
      path: "patient-table",
    },
    {
      title: "Profile",
      icon: <FaCircleUser className="text-lg" />,
      path: "profile",
    },
    {
      title: "Account and Settings",
      icon: <MdManageAccounts className="text-lg" />,
      path: "account",
    },
  ],

  admin: [
    {
      title: "Dashboard",
      icon: <MdDashboard className="text-lg" />,
      path: "/dashboard/admin",
    },

    {
      title: "Doctors",
      icon: <MdLocalHospital className="text-lg" />,
      path: "doctors",
    },

    {
      title: "Departments",
      icon: <MdApartment className="text-lg" />,
      path: "departments",
    },

    {
      title: "Billing & Payments",
      icon: <MdPayments className="text-lg" />,
      path: "billings",
    },

    {
      title: "Accounts and Settings",
      icon: <FaUsersCog className="text-lg" />,
      path: "accounts",
    },
   
  ],
};
