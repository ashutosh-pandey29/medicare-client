import { useEffect, useState, useRef } from "react";
import { LuCalendarSync } from "react-icons/lu";
import { FaEye, FaPrint } from "react-icons/fa6";
import { Modal } from "../../components/modals/Modal";
import { NewAppointmentModelForm } from "../../components/modals/NewAppointmentModelForm";
import { useModal } from "../../hooks/custom/useModal";
import { useFetch } from "../../hooks/custom/useFetch";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { PreLoader } from "../../components/UI/loaders/PreLoader";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { UserPageHeading } from "../../components/common/dashboard/heading/UserPageHeading";
import { FaCalendar, FaHospital, FaPlus, FaRegEdit, FaTrash, FaUserEdit } from "react-icons/fa";
import { CardRow } from "../../components/common/dashboard/card/CardRow";
import { Button } from "../../components/UI/Button";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";
import { ViewAppointmentDetailsModel } from "../../components/modals/ViewAppointmentDetailsModel";
import { DeleteConfirmationModel } from "../../components/modals/DeleteConfirmationModel";
import { ConfirmActionModal } from "../../components/modals/ConfirmActionModal";
import { UpdateAppointmentModelForm } from "../../components/modals/UpdateAppointmentModalForm";
import { AppointmentSlip } from "../../components/invoice-slips/AppointmentSlip";
import { useReactToPrint } from "react-to-print";

export const Appointment = () => {
  const { modalData, openModal, closeModal } = useModal();
  const [appointmentData, setAppointmentData] = useState([]);
  const { decodedUser } = useJwtDecode();
  const userId = decodedUser?.userId;
  const { data, error, loading } = useFetch(
    userId ? `${import.meta.env.VITE_API_URL}/appointment/get/${userId}` : null
  );

  // for printing

  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Appointment_${appointmentData?.appointmentId}`,
  });

  // update state only when data changes
  useEffect(() => {
    if (data?.data) {
      setAppointmentData(data.data);
    }
  }, [data]);

  const formatDate = (iso) => {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const getAppointmentAction = (modalData) => [
    {
      label: "View Details",
      icon: FaEye,
      onClick: () =>
        openModal(<ViewAppointmentDetailsModel data={modalData} />, "Appointment Details"),
    },

    {
      label: "Print Appointment Slip",
      icon: FaPrint,
      onClick: () => handlePrint(),
    },

    {
      label: "Update / Reschedule",
      icon: FaRegEdit,
      onClick: () =>
        openModal(<UpdateAppointmentModelForm data={modalData} />, "Update Appointment Details"),
    },

    {
      label: "Cancel Appointment",
      icon: FaTrash,
      danger: true,
      onClick: () =>
        openModal(
          <ConfirmActionModal
            message="This action cannot be undone. Type DELETE to confirm."
            variant="delete"
            onClose={closeModal}
          />,
          "Cancel Appointment"
        ),
    },
  ];

  // filter value & label
  const APPOINTMENT_FILTERS = [
    {
      label: "Upcoming",
      value: "upcoming",
    },
    {
      label: "Today",
      value: "today",
    },
    {
      label: "Completed",
      value: "completed",
    },
    {
      label: "Cancelled",
      value: "cancelled",
    },
    {
      label: "Rescheduled",
      value: "rescheduled",
    },
  ];

  // set pre-loader
  {
    loading && <PreLoader />;
  }

  return (
    <>
      <section className=" w-full h-auto bg-white ">
        <div className="p-3 flex flex-col  md:justify-between md:items-center gap-4 border-b border-b-zinc-100">
          {/* heading  */}
          <UserPageHeading
            title="Appointments History"
            subText="Keep track of your upcoming and past appointments. Reschedule or cancel them easily when needed."
            icon={<FaCalendar />}
            button={
              <>
                <FilterDropdown filters={APPOINTMENT_FILTERS} />
              </>
            }
          />
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-5 p-3">
          {appointmentData.length > 0 ? (
            appointmentData.map((appointment, index) => (
              <CardRow key={index} data={appointment} actions={getAppointmentAction(appointment)} />
            ))
          ) : (
            <NoDataFound message="No upcoming appointments available" />
          )}
        </div>

        <Button
          label={<FaPlus className="text-lg" />}
          onClick={() => openModal(<NewAppointmentModelForm />, "New Appointment")}
          customCss={"    fixed bottom-2 right-4"}
        />

        {/* modal  */}
        <Modal data={modalData} onClose={closeModal} />

        {/* slip component */}
        <div ref={printRef}>
          <AppointmentSlip appointmentData={appointmentData} />
        </div>
      </section>
    </>
  );
};
