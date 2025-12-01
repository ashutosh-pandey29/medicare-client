import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
export const ApproveAppointment = () => {
  const jsonData = [
    {
      appointmentId: "APT-001",
      patientName: "Rohan Kumar",
      problem: "High fever and weakness",
      requestedAppointmentDate: "2025-11-28",
      appliedDate: "2025-11-26",
      status: "Pending",
    },
    {
      appointmentId: "APT-002",
      patientName: "Ayesha Khan",
      problem: "Migraines and headache",
      requestedAppointmentDate: "2025-11-29",
      appliedDate: "2025-11-26",
      status: "Pending",
    },
    {
      appointmentId: "APT-003",
      patientName: "Vikram Singh",
      problem: "Joint pain and swelling",
      requestedAppointmentDate: "2025-11-30",
      appliedDate: "2025-11-25",
      status: "Pending",
    },
    {
      appointmentId: "APT-004",
      patientName: "Meera Sharma",
      problem: "Cold, cough, and throat pain",
      requestedAppointmentDate: "2025-12-01",
      appliedDate: "2025-11-26",
      status: "Pending",
    },
    {
      appointmentId: "APT-005",
      patientName: "Amit Verma",
      problem: "Stomach pain and acidity",
      requestedAppointmentDate: "2025-12-02",
      appliedDate: "2025-11-27",
      status: "Pending",
    },
  ];

  const columns = [
    { field: "appointmentId", headerName: "Appointment ID", width: 140 },
    { field: "patientName", headerName: "Patient Name", width: 180 },
    { field: "problem", headerName: "Problem", width: 190 },
    { field: "appliedDate", headerName: "Applied Date", width: 160 },
    {
      field: "requestedAppointmentDate",
      headerName: "Requested Date",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        return (
          <div className="flex items-center w-full  h-full justify-center">
            <button
              className=" h-8 w-fit px-3 py-1 flex items-center rounded  bg-green-500 text-white  hover:bg-green-600"
              onClick={(e) => {
                e.stopPropagation(); // stop selecting row
                alert(`Button clicked for Patient: ${params.row.patientName}`);
              }}
            >
              Approve
            </button>
          </div>
        );
      },
    },
  ];

  const paginationModel = { page: 0, pageSize: 10 };

  const [isOn, setIsOn] = useState(false);

  return (
    <div className="w-6xl mx-auto overflow-x-auto p-3">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-700">Appointment Requests</h2>

        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Auto Approve</span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isOn}
              onChange={() => setIsOn(!isOn)}
            />

            <div
              className="w-10 h-5 bg-red-400 peer-focus:outline-none rounded-full peer 
        peer-checked:bg-green-500 transition-all duration-300 shadow-inner"
            ></div>

            <span
              className="absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-all duration-300 
        peer-checked:translate-x-5 shadow-md"
            ></span>
          </label>
        </div>
      </div>

      <Paper
        sx={{
          height: 550,
          width: "100%",
          border: "none",
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <DataGrid
          rows={jsonData}
          columns={columns}
          getRowId={(row) => row.appointmentId} // important (unique)
          sx={{
            border: 0,
            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #e5e7eb",
            },
          }}
          pagination
          checkboxSelection
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[10, 20, 30]}
        />
      </Paper>
    </div>
  );
};
