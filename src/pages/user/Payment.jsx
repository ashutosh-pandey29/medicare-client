import { useState } from "react";
import { useModal } from "../../context/ModalContext";
import { FaFileDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import paymentJSON from "../../assets/jsonData/payment.json";
import { InfoCard } from "../../components/common/dashboard/card/InfoCard";
import { ViewPaymentModel } from "../../components/model/ViewPaymentModel";

export const Payment = () => {
  const { openModal } = useModal();

  const [filterStatus, setFilterStatus] = useState("All");

  const payments = [
    { id: "INV-001", service: "Blood Test", date: "12 Nov 2025", amount: 1200, status: "Paid" },
    { id: "INV-002", service: "MRI Scan", date: "10 Nov 2025", amount: 3500, status: "Unpaid" },
    { id: "INV-003", service: "X-Ray", date: "05 Nov 2025", amount: 800, status: "Paid" },
    { id: "INV-004", service: "ECG Test", date: "01 Nov 2025", amount: 600, status: "Refunded" },
  ];

  const filteredPayments = payments.filter(
    (item) => filterStatus === "All" || item.status === filterStatus
  );

  return (
    <section className="bg-white rounded-sm shadow p-1  md:p-3  w-full h-auto">
      {/* heading  */}

      <div className="p-3 flex flex-col sm:flex-row md:flex-row md:justify-between md:items-center gap-3 md:gap-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">Payment History</h2>

        {/* Button */}
        <div className="flex flex-wrap gap-3 mb-4">
          {[{ label: "All" }, { label: "Paid" }, { label: "Unpaid" }, { label: "Refunded" }].map(
            (btn) => (
              <button
                key={btn.label}
                onClick={() => setFilterStatus(btn.label)}
                className={`px-3 py-1 rounded border ${
                  filterStatus === btn.label ? "bg-blue-600 text-white" : "bg-white"
                }`}
              >
                {btn.label}
              </button>
            )
          )}
        </div>
      </div>

      {/* items */}
      <div className="grid grid-cols-1 gap-3">
        {paymentJSON.map((p) => {
          return (
            <InfoCard
              title={` Payment for Appointment with ${p.doctorName}`}
              subText={` Paid on ${p.paymentDate} |  Amount: ₹${p.amount} | method : ${p.method}`}
              status={p.status}
              buttons={[
                {
                  text: "",
                  icon: <FaEye />,
                  color: "blue",
                  onClick: () => openModal(<ViewPaymentModel data={p} />),
                },
                {
                  text: "",
                  icon: <FaFileDownload />,
                  color: "orange",
                  onClick: () => console.log("Reschedule appointment", appointment),
                },
              ]}
            />
          );
        })}
      </div>
    </section>
  );
};
