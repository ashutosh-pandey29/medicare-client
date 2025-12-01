import { MdDashboard } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { FaBookMedical } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaCheckToSlot } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";

export const SidebarLinks = {
  user: [
    { title: "Dashboard", icon: <MdDashboard className="text-lg" />, path: "/dashboard" },
    { title: "Appointments", icon: <IoIosTime className="text-lg" />, path: "appointments" },
    {
      title: "Medical Records",
      icon: <FaBookMedical className="text-lg" />,
      path: "medical-records",
    },
    { title: "Billing / Payment", icon: <MdPayments className="text-lg" />, path: "payment" },
    { title: "Settings", icon: <IoMdSettings className="text-lg" />, path: "settings" },
    { title: "Support", icon: <MdContactSupport className="text-lg" />, path: "support" },
  ],

  doctor: [
    { title: "Dashboard", icon: <MdDashboard className="text-lg" />, path: "/dashboard/doctor" },
    { title: "Approve Appointments", icon: <IoIosTime className="text-lg" />, path: "approve-appointment" },
    { title: "Patient Queue", icon: <FaCheckToSlot className="text-lg" />, path: "patient-queue" },
    { title: "Patient ", icon: <MdLocalHospital className="text-lg" />, path: "patient-table" },
    { title: "Update Report", icon: <IoDocuments className="text-lg" />, path: "report-entry" },
    { title: "Profile", icon: <FaCircleUser className="text-lg" />, path: "profile" },
    { title: "Settings", icon: <IoMdSettings className="text-lg" />, path: "settings" },
    { title: "Support", icon: <MdContactSupport className="text-lg" />, path: "support" },
  ],

  admin: [
    { title: "Dashboard", icon: <MdDashboard className="text-lg" />, path: "/admin/dashboard" },
    { title: "Department", icon: <MdDashboard className="text-lg" />, path: "department" },
    { title: "Doctor ", icon: <MdLocalHospital className="text-lg" />, path: "doctors" },
    { title: "Patient ", icon: <MdLocalHospital className="text-lg" />, path: "patient" },
    { title: "Reports", icon: <IoDocuments className="text-lg" />, path: "report-entry" },
    { title: "Billings ", icon: <MdLocalHospital className="text-lg" />, path: "billings" },
    { title: "Profile", icon: <FaCircleUser className="text-lg" />, path: "profile" },
    { title: "Settings", icon: <IoMdSettings className="text-lg" />, path: "settings" },
  
  ]
};
