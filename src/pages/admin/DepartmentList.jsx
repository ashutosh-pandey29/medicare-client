import { Heading } from "../../components/UI/Dashboard/Heading";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaRupeeSign,
  FaFilePdf,
  FaFileExcel,
  FaDownload,
  FaPrint,
} from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { CiExport, CiFilter } from "react-icons/ci";
import { Modal } from "../../components/modals/Modal";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/custom/useModal";
import { DeleteConfirmationModel } from "../../components/modals/DeleteConfirmationModel";
import { AdminPageHeading } from "../../components/common/dashboard/heading/AdminPageHeading";
import { MdApartment } from "react-icons/md";
import { Dropdown } from "../../components/UI/Dropdown";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";

export const DepartmentList = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const { modalData, openModal, closeModal } = useModal();

  useEffect(() => {
    const getDepartment = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/department/get`);
      const jsonResponse = await response.json();
      setDepartments(jsonResponse.data);
    };
    getDepartment();
  }, []);

  // handle delete
  const handleDelete = async (itemId, endpoint) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${endpoint}/${itemId}`, {
        method: "DELETE",
      });
      const json = await response.json();

      if (response.ok && json.status) {
        toast.success("Deleted successfully!");
        setDepartments((prev) => prev.filter((item) => item.departmentId !== itemId));
        closeModal();
      } else {
        toast.error(json.message || "Delete failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

  const actions = [
    {
      label: "view Department",
      icon: FaEye,
    },
    {
      label: "Edit Department",
      icon: FaEdit,
    },
    {
      label: "Delete Department",
      icon: FaTrash,
    },
  ];

  const tableDropdownAction = [
    {
      label: "Print Table",
      icon: FaPrint,
    },
    {
      label: "Download CSV",
      icon: FaDownload,
    },
    {
      label: "Download Excel",
      icon: FaFileExcel,
    },

    {
      label: "Download PDF",
      icon: FaFilePdf,
    },
  ];

  const filters = [
    {
      label: "Sort A → Z",
      value: "name_asc",
    },
    {
      label: "Sort Z → A",
      value: "name_desc",
    },
    {
      label: "Newest First",
      value: "created_desc",
    },
    {
      label: "Oldest First",
      value: "created_asc",
    },
  ];

  return (
    <>
      <div className="w-full  mx-auto  p-1">
        {/* heading */}

        <AdminPageHeading
          title={" Department Management"}
          subtitle={`Keep your hospital structure organized. Manage every department efficiently—create,
              update, or delete department entries here`}
          icon={MdApartment}
          rightContent={
            <>
              {" "}
              <button
                className="
    inline-flex h-12 items-center justify-center rounded-md border border-slate-800
    bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-size[200%_100%]
    px-6 font-medium text-slate-100 transition-all duration-300
    hover:bg-[linear-gradient(110deg,#1e2631,45%,#000103,55%,#1e2631)]
    hover:scale-105 hover:shadow-lg
    active:scale-95 active:shadow-inner
    focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
    cursor-pointer
    animate-shimmer
  "
              >
                new Department
              </button>
            </>
          }
        />

        {/* table  */}

        <div className="bg-gray-900 rounded-md  shadow-lg mt-6">
          {/* Header */}
          <div className="flex  sm:flex-row justify-between items-start sm:items-center p-3 gap-2 sm:gap-0">
            <h2 className="text-xl font-bold text-white">Department List</h2>
            <div className="flex  items-center justify-end gap-1.5 px-1">
              <Dropdown label="Download" actions={tableDropdownAction} theme="dark" />
              <FilterDropdown theme="dark" filters={filters} />
            </div>
          </div>

            <table className="w-full table-auto border-collapse text-center">
              {/* Table Head */}
              <thead className="bg-gray-800 text-gray-200">
                <tr className="border-b border-gray-700">
                  <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
                    Department Id
                  </th>
                  <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
                    Department Name
                  </th>
                  <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
                    Department Fees
                  </th>
                  <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
                    {/* Action */}
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="text-xs sm:text-sm md:text-base ">
                {departments.length > 0 &&
                  departments.map((d) => (
                    <tr
                      key={d.departmentId}
                      className="transition duration-300 hover:bg-gray-800 border-b border-gray-700"
                    >
                      <td className="px-2 py-2 sm:px-4 sm:py-4  text-gray-300">{d.departmentId}</td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4  text-gray-300">
                        {d.departmentName}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4   text-gray-300 flex justify-center items-center">
                        <FaRupeeSign className="text-[13px]  text-gray-300" /> {d.fees}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 ">
                        {/* <div className="flex gap-2 justify-center">
                        <button
                          className="cursor-pointer p-2 bg-green-700 text-green-200 rounded hover:bg-green-500 hover:text-white"
                          onClick={() => navigate(`edit/${d.departmentId}`)}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="cursor-pointer p-2 bg-red-700 text-red-200 rounded hover:bg-red-600 hover:text-white"
                          onClick={() =>
                            openModal(
                              <DeleteConfirmationModel
                                title="Delete Department"
                                message={
                                  <>
                                    Are you sure you want to delete the department{" "}
                                    <span className="font-bold text-red-500">
                                      {d.departmentName}
                                    </span>
                                    ? This action cannot be undone.
                                  </>
                                }
                                onCancel={closeModal}
                                onConfirm={() => handleDelete(d.departmentId, "department/delete")}
                              />,
                              "Confirm Deletion"
                            )
                          }
                        >
                          <FaTrash />
                        </button>
                      </div> */}

                        <Dropdown actions={actions} theme="dark" />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
        </div>


        


      </div>

      {/* modal */}
      <Modal data={modalData} onClose={closeModal} />
    </>
  );
};
