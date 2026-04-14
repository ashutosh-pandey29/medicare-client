import { useEffect, useState, useRef } from "react";
import { LuCalendarSync } from "react-icons/lu";
import { FaCross, FaEye, FaPrint } from "react-icons/fa6";
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
import { AppointmentSlip } from "../../components/invoice-slips/AppointmentSlip";
import { useReactToPrint } from "react-to-print";
import { useAppointment } from "../../hooks/appointment/useAppointment";
import { APPOINTMENT_MESSAGE_MAP } from "../../utils/message/appointmentMessage";
import { DeleteConfirmation } from "../../components/modals/DeleteConfirmation";
import { MdCancel } from "react-icons/md";
import { toast } from "react-toastify";

export const Appointment = () => {
  const { modalData, openModal, closeModal } = useModal();
  const [appointmentData, setAppointmentData] = useState([]);
  const [appointmentSlipData, setAppointmentSlipData] = useState([]);
  const [updateAppointmentData, setUpdateAppointmentData] = useState([]);
  const {
    loading,
    fetchAllAppointment,
    fetchAppointmentById,
    cancelAppointment,
    deleteAppointment,
  } = useAppointment();

  // for printing
  const printRef = useRef(null);
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: `Appointment_${appointmentSlipData?.appointmentId || "Slip"}`,
  });

  const formatDate = (iso) => {
    return new Date(iso).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleSlipPrinting = async (appointmentId) => {
    const response = await fetchAppointmentById(appointmentId);

    if (response.success) {
      setAppointmentSlipData(response.data);
    }

    setTimeout(() => {
      handlePrint();
    }, 0);
  };

  // fetch all appointment

  const loadAppointmentData = async () => {
    const response = await fetchAllAppointment();
    console.log("apt", response);
    if (response.success) {
      setAppointmentData(response.data);
    }
  };
  useEffect(() => {
    loadAppointmentData();
  }, []);

  const viewAppointment = async (appointmentId) => {
    const response = await fetchAppointmentById(appointmentId);

    if (response.success) {
      openModal(
        <ViewAppointmentDetailsModel data={response.data} onClose={closeModal} />,
        "Appointment Details"
      );
    }
  };

  const handleUpdateAppointment = async (appointmentId) => {
    const response = await fetchAppointmentById(appointmentId);

    if (response.success) {
      openModal(
        <NewAppointmentModelForm mode="update" data={response.data} onClose={closeModal} />,
        "Appointment Details"
      );
    }
  };

  // handle cancel appointment

  const handleCancelAppointment = (appointmentId) => {
    openModal(
      <ConfirmActionModal
        message={"Are you sure you want to cancel this appointment? This action cannot be undone."}
        variant="cancel"
        onClose={closeModal}
        onConfirm={async () => {
          const response = await cancelAppointment(appointmentId);

          if (response.success) {
            toast.success(response.message || "Appointment cancelled");
            loadAppointmentData();
            closeModal();
          }
        }}
      />
    );
  };

  // handle delete appointment

  const handleDeleteAppointment = (appointmentId) => {
    openModal(
      <DeleteConfirmationModel
        content={"Are you sure you want to Delete this appointment? This action cannot be undone."}
        title="Delete Appointment"
        onClose={closeModal}
        onConfirm={async () => {
          const response = await deleteAppointment(appointmentId);
          if (response.success) {
            toast.success(response.message || "Appointment cancelled");
            loadAppointmentData();
            closeModal();
          }
        }}
      />
    );
  };

  const getAppointmentAction = (data) => [
    {
      label: "View Details",
      icon: FaEye,
      onClick: () => viewAppointment(data.appointmentId),
    },

    {
      label: "Print Appointment Slip",
      icon: FaPrint,
      onClick: () => handleSlipPrinting(data.appointmentId),
    },

    {
      label: "Update / Reschedule",
      icon: FaRegEdit,
      onClick: () => handleUpdateAppointment(data.appointmentId),
    },

    {
      label: "Cancel Appointment",
      icon: MdCancel,
      onClick: () => handleCancelAppointment(data.appointmentId),
    },

    {
      label: "Delete Appointment",
      icon: FaTrash,
      danger: true,
      onClick: () => handleDeleteAppointment(data.appointmentId),
    },
  ];

  if (loading) return <PreLoader />;
  return (
    <>
      <section className=" w-full h-screen bg-white ">
        <div className="p-3 flex flex-col  md:justify-between md:items-center gap-4 border-b border-b-zinc-100">
          {/* heading  */}
          <UserPageHeading
            title="Appointments History"
            subText="Keep track of your upcoming and past appointments. Reschedule or cancel them easily when needed."
            icon={<FaCalendar />}
            button={<></>}
          />
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mt-5 p-3   ">
          {appointmentData.length > 0 ? (
            appointmentData.map((appointment, index) => (
              <CardRow
                key={appointment.appointmentId}
                status={appointment.status}
                title={APPOINTMENT_MESSAGE_MAP[appointment.status]?.title}
                message={APPOINTMENT_MESSAGE_MAP[appointment.status]?.getMessage({
                  doctorName: appointment.doctorName,
                  appointmentDate: appointment.appointmentDate,
                })}
                actions={getAppointmentAction(appointment)}
              />
            ))
          ) : (
            <NoDataFound message="No upcoming appointments available" />
          )}
        </div>

        {/* <Button
          label={<FaPlus className="text-lg" />}
          onClick={() =>
            openModal(<NewAppointmentModelForm onClose={closeModal} />, "New Appointment")
          }
          customCss={"fixed bottom-2 right-4 rounded-full"}
        /> */}

        <div className="fixed bottom-4 right-4 group z-50">
          {/* Tooltip */}
          <div
            className="absolute right-14 top-1/2 -translate-y-1/2
                  opacity-0 group-hover:opacity-100
                  scale-95 group-hover:scale-100
                  transition-all duration-200
                  bg-gray-800 text-white text-sm
                  px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg"
          >
            Book Appointment
          </div>

          {/* Button */}
          <button
            onClick={() =>
              openModal(
                <NewAppointmentModelForm mode="create" onClose={closeModal} />,
                "New Appointment"
              )
            }
            className="rounded-full cursor-pointer
               px-4 py-4
               bg-zinc-200 hover:bg-zinc-300
               shadow-md hover:shadow-lg
               transition-all duration-200"
          >
            <FaPlus className="text-lg" />
          </button>
        </div>

        {/* modal  */}
        <Modal data={modalData} onClose={closeModal} />

        {/* slip component */}
        <div ref={printRef}>
          <AppointmentSlip appointmentData={appointmentSlipData} />
        </div>
      </section>
    </>
  );
};
