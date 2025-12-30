import { MdDashboard } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaBookMedical } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaCheckToSlot, FaGear } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

export const SidebarLinks = {
  user: [
    { title: "Dashboard", icon: <MdDashboard className="text-lg" />, path: "/dashboard/user" },
    { title: "Appointments", icon: <IoIosTime className="text-lg" />, path: "appointments" },
    {
      title: "Medical Records",
      icon: <FaBookMedical className="text-lg" />,
      path: "medical-records",
    },
    { title: "Payment", icon: <MdPayments className="text-lg" />, path: "payment" },
    { title: "Account ", icon: <MdManageAccounts className="text-lg" />, path: "account" },
  ],

  doctor: [
    {
      title: "Dashboard",
      icon: <MdDashboard className="text-lg" />,
      path: "/dashboard/doctor",
    },
    {
      title: "Approve Appointments",
      icon: <IoIosTime className="text-lg" />,
      path: "approve-appointment",
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
      title: "Report Entry",
      icon: <IoDocuments className="text-lg" />,
      path: "report-entry",
    },
    {
      title: "Profile",
      icon: <FaCircleUser className="text-lg" />,
      path: "profile",
    },
    {
      title: "Account",
      icon: <MdManageAccounts className="text-lg" />,
      path: "account",
    },

    {
      title: "Settings",
      icon: <FaGear className="text-lg" />,
      path: "settings",
    },
  ],

  admin: [
    { title: "Dashboard", icon: <MdDashboard className="text-lg" />, path: "/admin/dashboard" },
    {
      title: "Reports & Analytics",
      icon: <MdDashboard className="text-lg" />,
      path: "/admin/dashboard/analysis",
    },
    { title: "Notification", icon: <MdDashboard className="text-lg" />, path: "notification" },
    { title: "Department", icon: <MdDashboard className="text-lg" />, path: "department" },
    { title: "Doctor ", icon: <MdLocalHospital className="text-lg" />, path: "doctors" },
    { title: "Billings ", icon: <MdLocalHospital className="text-lg" />, path: "billings" },
    { title: "Chat Center ", icon: <MdLocalHospital className="text-lg" />, path: "chat" },
    { title: "Account", icon: <FaCircleUser className="text-lg" />, path: "account" },
    { title: "System Settings", icon: <IoMdSettings className="text-lg" />, path: "settings" },
  ],
};
