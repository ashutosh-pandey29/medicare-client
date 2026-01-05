import React from "react";
import {
  FaEye,
  FaDownload,
  FaPrint,
  FaFileExcel,
  FaFilePdf,
  FaFileInvoice,
  FaCheckDouble,
} from "react-icons/fa";
import { Dropdown } from "../../components/UI/Dropdown";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { MdOutlinePaid, MdWallet } from "react-icons/md";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";
import { FiRotateCcw } from "react-icons/fi";

export const Billings = () => {
  // Static data
  const billingData = [
    {
      id: "INV001",
      patient: "John Doe",
      department: "Cardiology",
      amount: 5000,
      status: "Paid",
      method: "Credit Card",
      date: "2025-12-01",
    },
    {
      id: "INV002",
      patient: "Jane Smith",
      department: "Neurology",
      amount: 7000,
      status: "Pending",
      method: "UPI",
      date: "2025-12-02",
    },
    {
      id: "INV003",
      patient: "Michael Brown",
      department: "Orthopedics",
      amount: 4500,
      status: "Paid",
      method: "Cash",
      date: "2025-12-03",
    },
    {
      id: "INV004",
      patient: "Emily Davis",
      department: "Dermatology",
      amount: 3000,
      status: "Pending",
      method: "Credit Card",
      date: "2025-12-04",
    },
    {
      id: "INV005",
      patient: "William Johnson",
      department: "Pediatrics",
      amount: 6000,
      status: "Paid",
      method: "Debit Card",
      date: "2025-12-05",
    },
    {
      id: "INV006",
      patient: "Olivia Martinez",
      department: "Gynecology",
      amount: 5500,
      status: "Paid",
      method: "UPI",
      date: "2025-12-06",
    },
    {
      id: "INV007",
      patient: "James Wilson",
      department: "ENT",
      amount: 4000,
      status: "Pending",
      method: "Cash",
      date: "2025-12-07",
    },
    {
      id: "INV008",
      patient: "Sophia Taylor",
      department: "Cardiology",
      amount: 7500,
      status: "Paid",
      method: "Credit Card",
      date: "2025-12-08",
    },
    {
      id: "INV009",
      patient: "Daniel Anderson",
      department: "Neurology",
      amount: 6800,
      status: "Pending",
      method: "UPI",
      date: "2025-12-09",
    },
    {
      id: "INV010",
      patient: "Isabella Thomas",
      department: "Orthopedics",
      amount: 4700,
      status: "Paid",
      method: "Debit Card",
      date: "2025-12-10",
    },
  ];
  const tableDropdownAction = [
    {
      label: "Print Table",
      icon: FaPrint,
    },
    {
      label: "Download CSV",
      icon: FaDownload,
    },
    {
      label: "Download Excel",
      icon: FaFileExcel,
    },

    {
      label: "Download PDF",
      icon: FaFilePdf,
    },
  ];

  const filters = [
    { label: "Paid", value: "paid" },
    { label: "Pending", value: "pending" },
    { label: "Failed", value: "failed" },
    { label: "Online Payment", value: "online" },
    { label: "Cash Payment", value: "cash" },
    { label: "Today", value: "today" },
    { label: "This Week ", value: "week" },
    { label: "This Month", value: "month" },
  ];

  const actions = [
    {
      label: "View Invoice",
      icon: FaFileInvoice,
    },
    {
      label: "Mark as Paid",
      icon: MdOutlinePaid,
    },
    {
      label: "Refund",
      icon: FiRotateCcw,
      danger: "true",
    },
  ];

  return (
    <>
      <div className="sm:max-w-sm md:min-w-full mx-auto p-1">
        <AdminPageHeading
          title="Billing & Payments Management"
          subtitle="Track, manage, and process all patient invoices efficiently. Review payment status, generate receipts, and maintain a transparent billing system."
          icon={MdWallet}
        />
        {/* <h2 className="text-2xl font-bold mb-4 text-white">Billing & Payments</h2> */}

        <div className="bg-gray-900 rounded-md border border-gray-800 shadow-lg mt-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-2 sm:gap-0">
            <h2 className="text-xl font-bold text-white">Payment Track</h2>
            <div className="flex gap-1.5">
              <Dropdown label="Download" theme="dark" actions={tableDropdownAction} />
              <FilterDropdown theme="dark" filters={filters} />
            </div>
          </div>

          <div className="overflow-x-auto ">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-800 border-b border-gray-700">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-300">Invoice ID</th>
                  <th className="px-4 py-2 text-left text-gray-300">Patient</th>
                  <th className="px-4 py-2 text-left text-gray-300">Department</th>
                  <th className="px-4 py-2 text-left text-gray-300">Amount</th>
                  <th className="px-4 py-2 text-left text-gray-300">Status</th>
                  <th className="px-4 py-2 text-left text-gray-300">Payment Method</th>
                  <th className="px-4 py-2 text-left text-gray-300">Date</th>
                  <th className="px-4 py-2 text-left text-gray-300"></th>
                </tr>
              </thead>
              <tbody className="text-gray-200">
                {billingData.map((b) => (
                  <tr
                    key={b.id}
                    className="border-b border-gray-700 hover:bg-gray-800 transition-colors duration-200"
                  >
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{b.id}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{b.patient}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{b.department}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">₹{b.amount}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-sm font-semibold ${
                          b.status === "Paid" ? "text-green-600" : "text-yellow-600  animate-pulse"
                        }`}
                      >
                        {b.status}
                      </span>
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{b.method}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{b.date}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">
                      <Dropdown theme="dark" actions={actions} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
