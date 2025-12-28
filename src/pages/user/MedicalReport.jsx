import { useState } from "react";
import medicalReportJSON from "../../assets/jsonData/medicalReport.json";
import { FaDownload, FaShareAlt } from "react-icons/fa";
import { FaBookMedical, FaEye } from "react-icons/fa6";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";
import { DownloadTimerModal } from "../../components/modals/DownloadTimerModal";
import { useModal } from "../../hooks/custom/useModal";
import { Modal } from "../../components/modals/Modal";
import { ShareOptionsModal } from "../../components/modals/ShareOptionsModal ";

export const MedicalReport = (data) => {
  const { modalData, openModal, closeModal } = useModal();

  // const MEDICAL_REPORT_ACTIONS = [
  //   { label: "View Report", icon: FaEye, onClick: () => alert("View clicked") },
  //   { label: "Download PDF", icon: FaDownload, onClick: () => alert("Edit clicked") },
  //   { label: "Share Report ", icon: FaShareAlt, onClick: () => alert("Delete clicked") },
  // ];

  const getMedicalReportAction = () => [
    { label: "View Report", icon: FaEye, onClick: () => alert("View clicked") },
    {
      label: "Download PDF",
      icon: FaDownload,
      onClick: () =>
        openModal(
          <DownloadTimerModal duration={10} onClose={closeModal} />,
          "Preparing your report"
        ),
    },
    {
      label: "Share Report ",
      icon: FaShareAlt,
      onClick: () => openModal(<ShareOptionsModal />, "Share Your Medical Report"),
    },
  ];

  const MEDICAL_REPORT_FILTER = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <>
      <section className=" w-full h-auto bg-white ">
        <div className="p-3 flex flex-col  md:justify-between md:items-center gap-4 border-b border-b-zinc-100 ">
          {/* heading  */}
          <UserPageHeading
            title="Medical Reports"
            subText="Access and download your medical reports and test results securely."
            icon={<FaBookMedical />}
            button={
              <>
                <FilterDropdown filters={MEDICAL_REPORT_FILTER} />
              </>
            }
          />
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-5 p-3">
          {medicalReportJSON.length > 0 ? (
            medicalReportJSON.map((mr, index) => (
              <CardRow key={index} data={mr} actions={getMedicalReportAction()} />
            ))
          ) : (
            <NoDataFound message="No upcoming appointments available" />
          )}
        </div>

        {/* modal  */}
        <Modal data={modalData} onClose={closeModal} />
      </section>
    </>
  );
};
