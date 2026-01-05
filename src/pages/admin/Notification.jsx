import React, { useState } from "react";
import { FaBell, FaCheckCircle, FaEnvelope, FaEnvelopeOpen, FaInfoCircle, FaMoneyBillWave, FaRegBell } from "react-icons/fa";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { Dropdown } from "../../components/UI/Dropdown";

export const Notification = () => {
  // Sample static notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Appointment Booked",
      message: "Patient John Doe booked an appointment with Dr. Smith.",
      type: "info",
      read: false,
    },
    {
      id: 2,
      title: "Payment Received",
      message: "Payment of ₹5000 received from Jane Smith.",
      type: "success",
      read: false,
    },
    {
      id: 3,
      title: "Doctor Approval Pending",
      message: "New doctor registration requires approval.",
      type: "warning",
      read: true,
    },
    {
      id: 4,
      title: "System Update",
      message: "The system will undergo maintenance at midnight.",
      type: "info",
      read: false,
    },
    {
      id: 5,
      title: "Invoice Generated",
      message: "Invoice INV005 generated for Patient William Johnson.",
      type: "success",
      read: true,
    },
    {
      id: 6,
      title: "Appointment Cancelled",
      message: "Patient Olivia Martinez cancelled her appointment.",
      type: "warning",
      read: false,
    },
    {
      id: 7,
      title: "New Message from Doctor",
      message: "Dr. Emily Davis sent a new message.",
      type: "info",
      read: true,
    },
    {
      id: 8,
      title: "Payment Failed",
      message: "Payment of ₹7500 failed for Sophia Taylor.",
      type: "danger",
      read: false,
    },
    {
      id: 9,
      title: "Profile Updated",
      message: "Doctor profile for Michael Brown has been updated.",
      type: "success",
      read: true,
    },
    {
      id: 10,
      title: "Appointment Reminder",
      message: "Patient Daniel Anderson has an appointment tomorrow.",
      type: "info",
      read: false,
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const getIcon = (type) => {
    switch (type) {
      case "success":
        return <FaEnvelope className="text-green-500" />;
      case "info":
        return <FaInfoCircle className="text-blue-500" />;
      case "warning":
        return <FaBell className="text-yellow-400" />;
      case "danger":
        return <FaBell className="text-red-500" />;
      default:
        return <FaInfoCircle className="text-gray-400" />;
    }
  };
const actions = [

  {
    label: "Unread",
    icon: FaEnvelope,
  },

  {
    label: "Approval Required",
    icon: FaCheckCircle,
  },
  {
    label: "Payment Related",
    icon: FaMoneyBillWave,
  },
];


  return (
    <>
      <div className="sm:max-w-sm md:min-w-full mx-auto p-1 h-auto">
        {/* Heading */}
        <AdminPageHeading
          title="Notifications"
          subtitle="Stay updated with all system alerts, patient messages, and important hospital notifications in real time."
          icon={FaRegBell}
          rightContent={
            <>
                   <Dropdown label="Action" theme="dark" actions={actions} />
     

            </>
          }
        />

        <div className="sm:max-w-sm md:min-w-full mx-auto p-4 bg-gray-900 text-gray-200 rounded-md shadow-lg">
          {/* Header */}
          {/* <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-white">Notifications</h2>
            <button
              onClick={markAllAsRead}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm transition"
            >
              Mark all as read
            </button>
          </div> */}

          {/* Notification List */}
          <div className="flex flex-col gap-2">
            {notifications.map((n) => (
              <div
                key={n.id}
                className={`flex items-start gap-3 p-3 rounded-md border border-gray-700 transition-all duration-200 ${
                  n.read ? "bg-gray-800" : "bg-gray-700"
                } hover:bg-gray-600 cursor-pointer`}
              >
                <div className="mt-1">{getIcon(n.type)}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{n.title}</h3>
                  <p className="text-gray-300 text-sm">{n.message}</p>
                </div>
                {!n.read && <span className="w-3 h-3 bg-blue-500 rounded-full mt-2"></span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
