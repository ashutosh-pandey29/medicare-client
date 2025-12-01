import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import patients from "../../assets/jsonData/patients.json";

const columns = [
  { field: "patientId", headerName: "Patient ID", width: 120 },
  { field: "name", headerName: "Name", width: 180 },
  { field: "problem", headerName: "Problem", width: 190 },
  { field: "age", headerName: "Age", width: 90, type: "number" },
  { field: "appointmentDate", headerName: "Appointment Date", width: 160 },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    sortable: false,
    filterable: false,
    renderCell: (params) => {
      return (
        <div className="flex items-center w-full  h-full justify-center">
          <button
            className=" h-8 w-fit px-3 py-1 flex items-center rounded  bg-blue-500 text-white  hover:bg-blue-600"
            onClick={(e) => {
              e.stopPropagation(); // stop selecting row
              alert(`Button clicked for Patient: ${params.row.name}`);
            }}
          >
            view
          </button>
        </div>
      );
    },
  },
];

const paginationModel = { page: 0, pageSize: 10 };

export const PatientTable = () => {
  return (
    <div className="w-6xl mx-auto overflow-x-auto">
      <h2 className="text-2xl font-semibold p-2 border-b border-zinc-100 ">Patient Table </h2>

      <Paper
        className="w-full "
        sx={{ height: 550, width: "100%", border: "none", boxShadow: "none", borderRadius: 0 }}
      >
        <DataGrid 
          rows={patients}
          columns={columns}
          sx={{
            border: "0",
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
