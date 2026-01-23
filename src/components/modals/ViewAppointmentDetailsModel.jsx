import { PiCurrencyInrBold } from "react-icons/pi";
import { RiCloseLargeLine } from "react-icons/ri";

export const ViewAppointmentDetailsModel = ({ data, onClose }) => {
  return (
    <div className="w-full max-w-sm md:min-w-lg p-4 md:p-6 bg-white rounded-xl">
      {/* header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
        <h1 className="text-2xl font-semibold">Appointment Details</h1>
        <button
          className="w-8 h-8 flex items-center justify-center rounded hover:bg-zinc-100 cursor-pointer"
          onClick={onClose}
        >
          <RiCloseLargeLine />
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {/* Title */}
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-gray-500 text-sm sm:text-base">
            Appointment Id :{" "}
            <span className="font-medium text-gray-700">{data?.appointmentId || "N/A"}</span>
          </p>

          <span className="bg-green-200 text-green-700 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold">
            {data?.status}
          </span>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="text-gray-800 font-semibold mb-1">Doctor Name</p>
            <p className="text-blue-800">{data?.doctorName || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Department</p>
            <p className="text-blue-800">{data?.departmentName || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Patient Name</p>
            <p className="text-blue-800">{data?.name || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Appointment Date</p>
            <p className="text-blue-800">{data?.appointmentDate}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Slot</p>
            <p className="text-blue-800">{data?.token ? `0${data.token}` : "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Booking Date</p>
            <p className="text-blue-800">{data?.appointmentDate || "N/A"}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Payment Status</p>
            <p className="text-blue-800">{data?.paymentStatus}</p>
          </div>

          <div>
            <p className="text-gray-800 font-semibold mb-1">Payment Amount</p>
            <p className="text-blue-800 flex items-center gap-1">
              <PiCurrencyInrBold />
              {data?.paymentAmount || "00"}.00
            </p>
          </div>
        </div>

        {/* Problem Section */}
        <div className="pt-4 border-t border-zinc-100">
          <p className="text-gray-800 text-lg font-semibold mb-2">Problem</p>
          <p className="text-blue-800 leading-relaxed">{data?.problem || "No details provided"}</p>
        </div>
      </div>
    </div>
  );
};
