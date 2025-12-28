import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdDeleteOutline, MdWarningAmber } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";

export const ConfirmActionModal = ({ message, variant = "info", onClose }) => {
  const CARD_VARIANT = {
    info: {
      icon: <IoMdInformationCircleOutline className="text-blue-600  text-5xl animate-pulse" />,
      title: "Information",
      bg: "bg-blue-50",
      border: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      button: "Okay",
    },
    warning: {
      icon: <MdWarningAmber className="text-yellow-600  text-5xl animate-pulse" />,
      title: "Warning",
      bg: "bg-amber-50",
      border: "border-amber-200",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      button: "Proceed",
    },
    alert: {
      icon: <FiAlertCircle className="text-red-600 text-5xl animate-pulse" />,
      title: "Alert",
      bg: "bg-red-100",
      border: "border-red-300",
      iconBg: "bg-red-200",
      iconColor: "text-red-700",
      button: "Resolve",
    },
    delete: {
      icon: <MdDeleteOutline className="text-red-600 text-5xl animate-pulse" />,
      title: "Delete Confirmation",
      bg: "bg-red-50",
      border: "border-red-200",
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
      button: "Delete Forever",
    },
  };

  return (
    <>
      <div className="text-center mb-6">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto  ${CARD_VARIANT[variant]?.bg}`}
        >
          {CARD_VARIANT[variant]?.icon}
        </div>
        <h3 className="text-2xl font-bold  mb-2">{CARD_VARIANT[variant]?.title}</h3>
        <p className="text-gray-600">{message}</p>
      </div>

      {CARD_VARIANT[variant] === "delete" && (
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Type "DELETE" to confirm
          </label>
          <input
            type="text"
            placeholder="DELETE"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-500 focus:outline-none transition-colors"
          />
        </div>
      )}
      <div className="flex gap-3  md:flex-row flex-col-reverse">
        <button
          className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
          onClick={onClose}
        >
          Cancel
        </button>

        <button
          className={`flex-1 px-6 py-3 rounded-lg text-white font-semibold
            ${
              CARD_VARIANT[variant] === "delete"
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {CARD_VARIANT[variant]?.button}
        </button>
      </div>
    </>
  );
};
