import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import patients from "../../assets/jsonData/patients.json";

const columns = [
  { field: "name", headerName: "Name", width: 180 },
  { field: "department", headerName: "Department", width: 190 },
  { field: "status", headerName: "Status", width: 190, type: "number" },
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

export const Doctors = () => {
  return (
    <div className="w-6xl mx-auto overflow-x-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold p-2 border-b border-zinc-100 ">Doctors Table </h2>

        <div className="flex gap-3 ">
          <div>
            <input
              type="file"
              id="departmentFile"
              className="hidden"
              onChange={(e) => console.log(e.target.files[0])}
            />

            <label
              htmlFor="departmentFile"
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded cursor-pointer inline-block"
            >
              Import
            </label>
          </div>

          <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded cursor-pointer">
            Export
          </button>


          <button className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded cursor-pointer">
            Add new
          </button>
        </div>
      </div>

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
