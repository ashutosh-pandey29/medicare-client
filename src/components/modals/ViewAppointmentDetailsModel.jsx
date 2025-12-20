import { PiCurrencyInrBold } from "react-icons/pi";

export const ViewAppointmentDetailsModel = ({ data }) => {
  console.log(data);
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex gap-1.5 ">
        <p className="text-gray-500 text-lg">Appointment Id : {data?.appointmentId || "N/A"}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-[10px] sm:text-xs font-semibold w-fit">
            {data.status}
          </span>
        </div>
      </div>

      {/* Main Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-[300]! ">
        <div>
          <p className="text-gray-800 font-semibold">Doctor Name</p>
          <p className="font-base text-blue-800">{data?.doctorId?.doctorName || "N/A"}</p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Department</p>
          <p className="font-base text-blue-800">{data?.departmentId.departmentName || "N/A"}</p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Patient Name</p>
          <p className="font-base text-blue-800">{data?.name || "N/A"}</p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Appointment Date</p>
          <p className="font-base text-blue-800">{data?.appointmentDate}</p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Slot</p>
          <p className="font-base text-blue-800">
            {data?.slot} <span className="text-xs text-gray-500">(may change)</span>
          </p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Booking Date</p>
          <p className="font-base text-blue-800">{data?.appointmentDate || "N/A"}</p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Payment Status</p>
          <p className="font-base text-blue-800">{data?.paymentStatus}</p>
        </div>

        <div>
          <p className="text-gray-800 font-semibold">Payment Amount</p>
          <p className="font-base text-blue-800 flex items-center">
            <PiCurrencyInrBold />
            {data?.paymentAmount || "00"}.00
          </p>
        </div>
      </div>

      {/* Problem Section */}
      <div>
        <p className="text-gray-800 text-lg font-semibold mb-2">Problem</p>
        <p className="font-base text-blue-800">{data?.problem || "No details provided"}</p>
      </div>
    </div>
  );
};
