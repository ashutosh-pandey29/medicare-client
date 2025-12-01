export const UpComingAppointmentDetailsModel = ({ data }) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-5 border border-gray-200 mt-4">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Upcoming Appointment</h3>

        <div className="mb-2">
          <span className="font-semibold text-gray-600">Doctor: </span>
          <span className="text-gray-800">
            {data.doctorName} ({data.department})
          </span>
        </div>

        <div className="mb-2">
          <span className="font-semibold text-gray-600">Date: </span>
          <span className="text-gray-800">{data.date}</span>
        </div>

        {appointment.problem && (
          <div className="mb-2">
            <span className="font-semibold text-gray-600">Reason: </span>
            <span className="text-gray-800">{data.problem}</span>
          </div>
        )}

        <div className="mb-3">
          <span className="font-semibold text-gray-600">Status:
            {data.status.toUpperCase()}
          </span>
        </div>

        <div className="flex gap-2 mt-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            ReSchedule
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};
