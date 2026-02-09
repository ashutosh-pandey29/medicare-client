import { useState } from "react";
import { FaDownload, FaReceipt, FaShareAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";
import { ShareOptionsModal } from "../../components/modals/ShareOptionsModal ";
import { useModal } from "../../hooks/custom/useModal";
import { Modal } from "../../components/modals/Modal";
import { useEffect } from "react";
import { usePayment } from "../../hooks/payment/usePayment";
export const Payment = () => {
  const { modalData, openModal, closeModal } = useModal();
  const [payments, setPayments] = useState([]);

  const { loading, getAllPayment, downloadInvoice } = usePayment();

  useEffect(() => {
    const fetchAllPayment = async () => {
      const response = await getAllPayment();
      if (response.success) {
        setPayments(response.data);
      }
    };
    fetchAllPayment();
  }, []);

  const handleDownloadInvoice = async (paymentId) => {
    try {
      const response = await downloadInvoice(paymentId);

      // console.log(response instanceof Blob);

      const url = window.URL.createObjectURL(response);

      const a = document.createElement("a");
      a.href = url;
      a.download = `invoice-${paymentId}.pdf`;
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Invoice download failed", err);
    }
  };

  const getPaymentAction = (payment) => [
    {
      label: "Download Receipt",
      icon: FaDownload,
      onClick: () => handleDownloadInvoice(payment.paymentId),
    },
    {
      label: "Share Receipt",
      icon: FaShareAlt,
      onClick: () => openModal(<ShareOptionsModal />, "Share Invoice"),
    },
  ];

  const PAYMENT_FILTERS = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Paid", value: "paid" },
    { label: "Failed", value: "failed" },
  ];

  return (
    <section className="bg-white rounded-sm shadow   w-full h-screen">
      <div className=" p-3 flex flex-col  md:justify-between md:items-center gap-4 border-b border-b-zinc-100">
        {/* heading  */}
        <UserPageHeading
          title="Payments History"
          subText="Track your payment history and manage invoices for your appointments easily."
          icon={<FaWallet />}
          button={
            <>
              <FilterDropdown filters={PAYMENT_FILTERS} />
            </>
          }
        />
      </div>

      {/* items */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-5 p-3">
        {payments.map((p, index) => (
          <CardRow
            key={index}
            title={`Payment ID: ${p.transactionId}`}
            status={p.paymentStatus === "success" ? "paid" : "failed"}
            message={` You paid ₹${p.paymentAmount} via ${p.paymentMethod.toUpperCase()} For 
                  ${p.appointment?.departmentName} consultation with 
                  ${p.appointment?.doctorName}`}
            actions={getPaymentAction(p)}
          />
        ))}
      </div>

      <Modal data={modalData} onClose={closeModal} />
    </section>
  );
};
