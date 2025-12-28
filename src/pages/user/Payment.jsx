import { useState } from "react";
import { FaDownload, FaReceipt, FaShareAlt } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import paymentJSON from "../../assets/jsonData/payment.json";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";
import { ShareOptionsModal } from "../../components/modals/ShareOptionsModal ";
import { useModal } from "../../hooks/custom/useModal";
import { Modal } from "../../components/modals/Modal";
import { DownloadTimerModal } from "../../components/modals/DownloadTimerModal";
import { ViewInvoiceModal } from "../../components/modals/ViewInvoiceModal";
export const Payment = () => {
  const { modalData, openModal, closeModal } = useModal();
  const getPaymentAction = () => [
    {
      label: "Invoice Details",
      icon: FaReceipt,
      onClick: () =>openModal(<ViewInvoiceModal/> , "Payment Details")
    },
    {
      label: "Download Receipt",
      icon: FaDownload,
      onClick: () =>
        openModal(
          <DownloadTimerModal duration={10} onClose={closeModal} />,
          "Preparing Invoice download"
        ),
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
    <section className="bg-white rounded-sm shadow   w-full h-auto">
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
        {paymentJSON.map((p, index) => {
          return <CardRow key={index} data={p} actions={getPaymentAction()} />;
        })}
      </div>

      <Modal data={modalData} onClose={closeModal} />
    </section>
  );
};
