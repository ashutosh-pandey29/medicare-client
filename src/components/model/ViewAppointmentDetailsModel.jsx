export const ViewAppointmentDetailsModel = ({data}) => {
  return (
    <>
      <div className=" space-y-4">
        {/* Header */}

        <div>
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-3">
            Appointment with {data?.doctorName}
            <span
              className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                data?.status === "pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : data?.status === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {data?.status}
            </span>
          </h2>
          <p className="text-gray-500">{data?.message}</p>
        </div>

        {/*  */}

        {/* Appointment details */}

        <div className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  border-t border-bottom-1 border-blue-200 p-3">
            <div className="flex items-center gap-4">
              <div>
                <p className="text-gray-600 text-lg font-semibold">Date</p>
                <p className="font-medium text-gray-800">{data?.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <p className="text-gray-600 text-lg font-semibold">Slot</p>
                <p className="text-gray-800">
                  {data?.slot}
                  <span className="text-xs"> (may be changed)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div>
                <p className="text-gray-600 text-lg font-semibold">Payment Status</p>
                <p className="font-medium text-gray-800">{data?.paymentStatus}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>
              <p className="text-gray-600 text-lg font-semibold border-b border-bottom-1 border-blue-200">
                Problem
              </p>
              <p className="text-gray-800 ">{data?.problem}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
