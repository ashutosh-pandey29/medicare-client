import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { PiCurrencyInrBold } from "react-icons/pi";

export const ViewInvoiceModal = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Payment Invoice</h2>
          <button className="p-2 rounded hover:bg-gray-100" onClick={onClose}>
            <RiCloseLine className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Payment Summary */}
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div>
              <p className="text-gray-600 text-sm">Transaction ID</p>
              <p className="text-gray-800 font-medium">{data?.transactionId || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Status</p>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  data?.paymentStatus === "Success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {data?.paymentStatus || "Pending"}
              </span>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="space-y-2">
            <InfoRow label="Doctor" value={data?.appointment?.doctorName} />
            <InfoRow label="Department" value={data?.appointment?.departmentName} />
            <InfoRow label="Appointment Date" value={data?.appointment?.date} />
          </div>

          {/* Payment Amount */}
          <div className="flex justify-between items-center border-t border-gray-200 pt-4">
            <p className="text-gray-800 font-semibold text-lg">Amount Paid</p>
            <div className="flex items-center gap-1 text-lg font-bold text-gray-800">
              <PiCurrencyInrBold /> {data?.paymentAmount || "0"}.00
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-5 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper Component
const InfoRow = ({ label, value }) => (
  <div className="flex justify-between">
    <p className="text-gray-600">{label}</p>
    <p className="text-gray-800 font-medium">{value || "N/A"}</p>
  </div>
);
