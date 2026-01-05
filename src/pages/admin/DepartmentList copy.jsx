import { Heading } from "../../components/UI/Dashboard/Heading";
import { FaEye, FaEdit, FaTrash, FaRupeeSign } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { CiExport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { Modal } from "../../components/modals/Modal";
import { toast } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";
import { useModal } from "../../hooks/custom/useModal";
import { DeleteConfirmationModel } from "../../components/modals/DeleteConfirmationModel";
export const DepartmentList = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  const { modalData, openModal, closeModal } = useModal();

  useEffect(() => {
    const getDepartment = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/department/get`);
      const jsonResponse = await response.json();
      // console.log(jsonResponse.data);
      setDepartments(jsonResponse.data);
    };
    getDepartment();
  }, []);

  // handle delete

  const handleDelete = async (itemId, endpoint) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${endpoint}/${itemId}`, {
        method: "DELETE",
        // headers: { Authorization: `Bearer ${token}` },
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

  return (
    <>
      <div className=" sm:max-w-sm md:min-w-full  mx-auto overflow-x-auto p-1">
        <div className="flex flex-start  md:justify-between md:items-center flex-col md:flex-row">
          <div className="md:mb-8 mb-4">
            <h2 className="text-base md:text-4xl lg:text-3xl  font-extrabold bg-linear-to-r from-green-500 to-purple-400 text-transparent bg-clip-text">
              Department Management
            </h2>
            <p className="text-gray-500 text-sm">
              Keep your hospital structure organized. Manage every department efficiently—create,
              update, or delete department entries here
            </p>
          </div>

          <div className="btn-box flex gap-1">
            <NavLink
              to={"new"}
              className="px-3 py-1 text-lg bg-indigo-500 hover:bg-indigo-600 text-white rounded duration-200 cursor-pointer"
            >
              Add new
            </NavLink>
          </div>
        </div>

        {/* table  */}

        <div className="overflow-x-auto rounded">
          <div className="h-auto p-2 flex  gap-1.5 justify-end">
            <input
              type="text"
              className="border rounded  border-indigo-100 outline-0 px-2 focus:border-indigo-500"
              placeholder="Quick Search...."
            />

            <span className="block w-fit bg-zinc-100 font-semibold text-2xl rounded  px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer ">
              <CiFilter />
            </span>

            <span className="block w-fit bg-zinc-100 font-semibold text-2xl rounded  px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer ">
              <CiExport />
            </span>
          </div>
          <table className="min-w-full table-auto border-collapse text-center">
            {/* Table Head */}
            <thead className="bg-indigo-500 text-indigo-100">
              <tr className="border-b border-b-indigo-50">
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
                  Action
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-xs sm:text-sm md:text-base">
              {departments.length > 0 &&
                departments.map((d) => (
                  <tr className=" transition duration-300 hover:bg-indigo-50 border-b border-b-zinc-100">
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{d.departmentId}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">{d.departmentName}</td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4 items-center flex justify-center">
                      <FaRupeeSign className="text-[13px]" /> {d.fees}
                    </td>
                    <td className="px-2 py-2 sm:px-4 sm:py-4">
                      <div className="flex gap-2">
                        <button
                          className="cursor-pointer p-2 bg-green-100 text-green-500 rounded hover:bg-green-500 hover:text-white"
                          onClick={() => navigate(`edit/${d.departmentId}`)}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="cursor-pointer p-2 bg-red-100 text-red-600 rounded hover:bg-red-600
                           hover:text-white"
                          onClick={() =>
                            openModal(
                              <DeleteConfirmationModel
                                title="Delete Department"
                                message={
                                  <>
                                    Are you sure you want to delete the department{" "}
                                    <span className="font-bold text-red-600">
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
                      </div>
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
