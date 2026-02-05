import React, { useEffect, useMemo, useState } from "react";
import { FaDownload, FaFileInvoice, FaRupeeSign, FaSortAmountDown } from "react-icons/fa";
import { Dropdown } from "../../components/UI/Dropdown";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { MdOutlinePaid, MdWallet } from "react-icons/md";
import { FiRotateCcw } from "react-icons/fi";
import { Modal } from "../../components/modals/Modal";
import { Pagination } from "../../components/UI/pagination/Pagination";
import { ExportOptionsModal } from "../../components/modals/ExportOptionsModal";
import { usePagination } from "../../hooks/common/usePagination";
import { useModal } from "../../hooks/custom/useModal";
import { usePayment } from "../../hooks/payment/usePayment";
import { NotFound } from "../../components/basic/NotFound";
import { TableSkeletonLoader } from "../../components/UI/loaders/skeleton/TableSkeletonLoader";

export const Billings = () => {
  // Static data
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const [payments, setPayments] = useState([]);
  const { modalData, openModal, closeModal } = useModal();

  const { loading, getAllPaymentForAdmin } = usePayment();

  useEffect(() => {
    const loadPayment = async () => {
      const response = await getAllPaymentForAdmin();

      if (response.success) {
        setPayments(response.data);
      }
    };

    loadPayment();
  }, []);

  /**================SEARCH DATA========================  */

  const searchedData = useMemo(() => {
    if (!search.trim()) return payments;

    const query = search.toLowerCase();

    return payments.filter((p) => {
      const paymentId = p.paymentId?.toLowerCase() || "";
      const transactionId = p.transactionId?.toLowerCase() || "";
      const patientName = p.appointment?.patientName?.toLowerCase() || "";
      const departmentName = p.appointment?.departmentName?.toLowerCase() || "";

      return (
        paymentId.includes(query) ||
        transactionId.includes(query) ||
        patientName.includes(query) ||
        departmentName.includes(query)
      );
    });
  }, [payments, search]);

  /**================ HANDLE DATA SORTING(A->Z / Z->A) */

  const sortedData = useMemo(() => {
    if (!sortOrder) return searchedData; // no sorting

    return [...searchedData].sort((a, b) =>
      sortOrder === "asc"
        ? a.appointment.patientName.localeCompare(b.appointment.patientName)
        : b.appointment.patientName.localeCompare(a.appointment.patientName)
    );
  }, [searchedData, sortOrder]);

  /**================HANDLE PAGINATION=================== */
  const limit = 10;
  const { page, setPage, totalPage, currentData } = usePagination(sortedData, limit);

  const getAction = () => [
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

  if (loading) return <TableSkeletonLoader />;

  return (
    <>
      <div className="sm:max-w-sm md:min-w-full mx-auto p-1">
        <AdminPageHeading
          title="Billing & Payments Management"
          subtitle="Track, manage, and process all patient invoices efficiently. Review payment status, generate receipts, and maintain a transparent billing system."
          icon={MdWallet}
        />
        {/* <h2 className="text-2xl font-bold mb-4 text-white">Billing & Payments</h2> */}

        <div className=" bg-gray-900 rounded-md shadow-lg">
          <div className="px-1 md:px-4 py-3 border-b border-gray-800">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Title */}
              <h2 className="text-lg sm:text-xl font-semibold text-white">Payment Table </h2>

              {/* Actions */}
              <div className="flex sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                {/* Search */}
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search by transaction Id  , payment id ,  patient name  ,  department name..."
                  className="
                        w-full sm:w-64
                        border rounded-md px-4 py-2
                        border-gray-700 bg-gray-900 text-gray-200
                        outline-none focus:border-blue-500
                      "
                />

                {/* Buttons */}
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() => openModal(<ExportOptionsModal onClose={closeModal} />)}
                    className="
                          h-10 w-10 flex items-center justify-center rounded-full
                          bg-gray-800 hover:bg-gray-700 transition
                        "
                    title="Export Data"
                  >
                    <FaDownload className="text-white text-sm" />
                  </button>

                  <button
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="
                          h-10 w-10 flex items-center justify-center rounded-full
                          bg-gray-800 hover:bg-gray-700 transition
                        "
                    title="Sort"
                  >
                    <FaSortAmountDown className="text-white text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {currentData.length === 0 ? (
            <NotFound
              message="No Payment Found"
              description="There are currently no payment available in the system."
              theme="dark"
            />
          ) : (
            <>
              {/* Table Wrapper */}

              <div className="relative  overflow-x-auto ">
                <table className="min-w-full border-collapse text-center ">
                  <thead className="bg-gray-800 text-gray-200 ">
                    <tr>
                      <th className="px-4 py-2  text-gray-300 ">Sr.No.</th>
                      <th className="px-4 py-2  text-gray-300 ">Patient</th>
                      <th className="px-4 py-2  text-gray-300 ">Department</th>
                      <th className="px-4 py-2  text-gray-300 ">Amount(INR)</th>
                      <th className="px-4 py-2  text-gray-300">Status</th>
                      <th className="px-4 py-2  text-gray-300">Payment Method</th>
                      <th className="px-4 py-2  text-gray-300">Date & Time</th>
                      {/* <th className="px-4 py-2  text-gray-300"></th> */}
                    </tr>
                  </thead>

                  <tbody className="text-sm ">
                    {currentData.map((p , i) => (
                      <tr
                        key={p.paymentId}
                        className="border-b border-gray-700 hover:bg-gray-800 transition "
                      >
                         <td className="px-4 py-2 text-white whitespace-nowrap">
                          0{(page - 1) * limit + i + 1}
                        </td>
                        <td className="px-4 py-2 text-gray-300 ">{p.appointment.patientName}</td>
                        <td className="px-4 py-2 text-gray-300">{p.appointment.departmentName}</td>
                        <td className="px-4 py-2 text-gray-300 flex items-center justify-center">
                          <FaRupeeSign className="text-xs" />

                          {p.paymentAmount}
                        </td>
                        <td
                          className={`px-4 py-2 font-medium text-center capitalize
                            ${p.paymentStatus === "success" && "text-green-500"}
                            ${p.paymentStatus === "pending" && "text-yellow-400"}
                            ${p.paymentStatus === "failed" && "text-red-500"}
                          `}
                        >
                          {p.paymentStatus}
                        </td>

                        <td className="px-4 py-2 text-gray-300 uppercase">{p.paymentMethod}</td>
                        <td className="px-4 py-2 text-gray-300">
                          {new Date(p.paidAt).toLocaleString()}
                        </td>

                        {/* <td className="px-4 py-2">
                          <Dropdown actions={getAction(p)} theme="dark" />
                        </td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-4 py-3 border-t border-gray-800">
                  <Pagination
                    page={page}
                    totalPages={totalPage}
                    onPageChange={setPage}
                    theme="dark"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* modal */}
        <Modal data={modalData} onClose={closeModal} />
      </div>
    </>
  );
};
