export const ViewMedicalReportDetailsModel = ({ data }) => {
  return (
    <>
      <div className="min-w-lg mx-auto p-2 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Medical Report Details</h2>

        {/* Patient & Doctor Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="text-gray-600 font-semibold">Patient Name</h3>
            <p className="text-gray-800">{data.patientName}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Doctor</h3>
            <p className="text-gray-800">
              {data.doctorName} ({data.department})
            </p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Report Type</h3>
            <p className="text-gray-800">{data.reportType}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Report Date</h3>
            <p className="text-gray-800">{data.reportDate}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Appointment Date</h3>
            <p className="text-gray-800">{data.appointmentDate}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Status</h3>
            <p
              className={`font-semibold ${
                data.status === "ready" ? "text-green-600" : "text-yellow-600"
              }`}
            >
              {data.status.toUpperCase()}
            </p>
          </div>
        </div>

        {/* Problem, Summary, Solution */}
        <div className="space-y-3 mb-4">
          <div>
            <h3 className="text-gray-600 font-semibold">Problem</h3>
            <p className="text-gray-800">{data.problem}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Summary</h3>
            <p className="text-gray-800">{data.summary}</p>
          </div>
          <div>
            <h3 className="text-gray-600 font-semibold">Solution</h3>
            <p className="text-gray-800">{data.solution}</p>
          </div>
        </div>

        {/* Medicines */}
        {data.medicine && data.medicine.length > 0 && (
          <div className="mb-4">
            <h3 className="text-gray-600 font-semibold mb-1">Medicines</h3>
            <ul className="list-disc list-inside text-gray-800">
              {data.medicine.map((med, idx) => (
                <li key={idx}>
                  <span className="font-medium">{med.name}</span> - {med.dose} ({med.timing})
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Notes & Message */}
        <div className="space-y-2 mb-4">
          <div>
            <h3 className="text-gray-600 font-semibold">Notes</h3>
            <p className="text-gray-800">{data.notes}</p>
          </div>
        </div>
      </div>
    </>
  );
};
