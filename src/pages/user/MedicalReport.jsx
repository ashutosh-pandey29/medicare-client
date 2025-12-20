import { useState } from "react";
import medicalReportJSON from "../../assets/jsonData/medicalReport.json";
import {InfoCard} from "../../components/common/dashboard/card/InfoCard"
import { FaFileDownload } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
// import { useModal } from "../../context/ModalContext"
// import { ViewMedicalReportDetailsModel } from "../../components/model/ViewMedicalReportDetailsModel";
// ViewMedicalReportDetailsModel

export const MedicalReport = () => {
  
  // const { openModal } = useModal();

  const [statusFilter, setStatusFilter] = useState("Issued");
  const [categoryFilter, setCategoryFilter] = useState("All");


  const reports = [
    { name: "Blood Test Report", status: "Issued", category: "Pathology" },
    { name: "X-Ray Scan", status: "Pending", category: "Radiology" },
    { name: "MRI Scan", status: "Delivered", category: "Radiology" },
    { name: "ECG Report", status: "Issued", category: "Cardiology" },
    { name: "CT Scan", status: "Pending", category: "Radiology" },
    { name: "Ultrasound", status: "Delivered", category: "Pathology" },
  ];

  const filteredReports = reports.filter(
    (item) =>
      item.status === statusFilter && (categoryFilter === "All" || item.category === categoryFilter)
  );

  return (
    <>
      <section className="bg-white rounded-sm shadow p-1  md:p-3  w-full h-auto">
        <div className="flex items-start md:items-center md:justify-between p-3 flex-col md:flex-row">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">Medical Reports</h2>

          {/* filter */}
          <div className="flex items-center justify-center gap-5">
            <input
              type="search"
              placeholder="Search record...."
              name="search"
              id="search"
              className="border px-3 py-1 outline-0 border-zinc-100 focus:border-blue-500 w-70 "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {medicalReportJSON.map((report) => {
            return (
              <InfoCard
                key={report.id}
                title={report.message}
                subText={`${report.doctorName} | ${report.department} | Appointment: ${report.appointmentDate}`}
                status={report.status}
                buttons={[
                  {
                    text: "",

                    icon: <FaEye />,
                    color: "blue",
                  },
                  {
                    text: "",
                    icon: < FaFileDownload/>,
                    color: "orange",
                    onClick: () => console.log("download report"),
                  },
                ]}
              />
            );
          })}
        </div>
      </section>

                    {/* onClick: () => openModal(<ViewMedicalReportDetailsModel data={ report} />), */}

    </>
  );
};
