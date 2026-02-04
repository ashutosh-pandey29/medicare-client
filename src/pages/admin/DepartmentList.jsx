import {
  FaEye,
  FaEdit,
  FaTrash,
  FaRupeeSign,
  FaDownload,
  FaSortAmountDown,
  FaExclamationTriangle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/modals/Modal";
import { useModal } from "../../hooks/custom/useModal";
import { Dropdown } from "../../components/UI/Dropdown";
import { TableSkeletonLoader } from "../../components/UI/loaders/skeleton/TableSkeletonLoader";
import { NotFound } from "../../components/basic/NotFound";
import { ViewDepartment } from "../../components/modals/department/ViewDepartment";
import { useDepartment } from "../../hooks/department/useDepartment";
import { useEffect, useMemo, useState } from "react";
import { DeleteConfirmation } from "../../components/modals/DeleteConfirmation";
import { Pagination } from "../../components/UI/pagination/Pagination";
import { usePagination } from "../../hooks/common/usePagination";
import { ExportOptionsModal } from "../../components/modals/ExportOptionsModal";
export const DepartmentList = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const { modalData, closeModal, openModal } = useModal();
  const { loading, fetchDepartment, deleteDepartment, forceDeleteDepartment } = useDepartment();

  /**================LOAD DEPARTMENT ================= */
  const loadDepartments = async () => {
    const response = await fetchDepartment();
    if (response?.success) {
      setDepartments(response.data);
    }
  };
  useEffect(() => {
    loadDepartments();
  }, []);

  /**=============HANDLE  DELETE DEPARTMENT==================== */
  const handleDelete = (departmentId) => {
    openModal(
      <DeleteConfirmation
        title={"Delete Department"}
        theme="dark"
        onClose={closeModal}
        onConfirm={async () => {
          await deleteDepartment(departmentId);
          closeModal();
          loadDepartments();
        }}
        content={
          <>
            <p>
              If this department is linked with one or more doctors or appointments, it cannot be
              deleted using the normal delete option.
            </p>

            <p className="mt-2 text-red-500 font-medium">
              If you still want to remove this department permanently, please use the{" "}
              <b>Force Delete</b> option. Normal delete will not work in this case.
            </p>
          </>
        }
      />
    );
  };

  /**==============HANDLE FORCE DELETE================== */
  const handleForceDelete = (departmentId) => {
    openModal(
      <DeleteConfirmation
        title={"Forcefully Delete Department"}
        theme="dark"
        onClose={closeModal}
        onConfirm={async () => {
          await forceDeleteDepartment(departmentId);
          closeModal();
          loadDepartments();
        }}
        content={
          <>
            <p>
              Force Deleting this department will remove it from normal operations. Data will still
              exist in rare/legacy references.
            </p>

            <p className="mt-2 text-red-500 font-medium">
              Linked doctors or appointments won’t be accessible, and{" "}
              <b>this action cannot be undone</b>. Proceed only if you understand the consequences.
            </p>
          </>
        }
      />
    );
  };

  /**================SEARCH DATA========================  */

  const searchedDepartments = useMemo(() => {
    if (!search.trim()) return departments;

    return departments.filter((d) => d.departmentName.toLowerCase().includes(search.toLowerCase()));
  }, [departments, search]);

  /**================ HANDLE DATA SORTING(A->Z / Z->A) */

  const sortedDepartments = useMemo(() => {
    if (!sortOrder) return searchedDepartments; // no sorting

    return [...searchedDepartments].sort((a, b) =>
      sortOrder === "asc"
        ? a.departmentName.localeCompare(b.departmentName)
        : b.departmentName.localeCompare(a.departmentName)
    );
  }, [searchedDepartments, sortOrder]);

  /**================HANDLE PAGINATION=================== */
  const limit = 5;
  const { page, setPage, totalPage, currentData } = usePagination(sortedDepartments, limit);

  /**===============GET DROPDOWN ACTION============ */
  const getDepartmentAction = (content) => [
    {
      label: "View",
      icon: FaEye,
      onClick: () =>
        openModal(<ViewDepartment data={content} onClose={closeModal} />, "Department Details"),
    },
    {
      label: "Edit",
      icon: FaEdit,
      onClick: () => navigate(`edit/${content.departmentId}`),
    },
    {
      label: "Delete",
      icon: FaTrash,
      danger: true,
      onClick: () => handleDelete(content.departmentId),
    },

    {
      label: "Force Delete",
      icon: FaExclamationTriangle,
      danger: true,
      onClick: () => handleForceDelete(content.departmentId),
    },
  ];

  if (loading) return <TableSkeletonLoader />;

  return (
    <div className="w-full mt-4 ">
      <div className="bg-gray-900 rounded-md shadow-lg">
        {/* Header */}
        <div className="px-1 md:px-4 py-3 border-b border-gray-800">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-white">Department List</h2>

            {/* Actions */}
            <div className="flex sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              {/* Search */}
              <input
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search department..."
                className="
          w-full sm:w-64
          border rounded-md px-4 py-2
          border-gray-700 bg-gray-900 text-gray-200
          outline-none focus:border-blue-500
        "
              />

              {/* Buttons */}
              <div className="flex items-center gap-2 justify-end">
                <button
                  onClick={() => openModal(<ExportOptionsModal onClose={closeModal} />)}
                  className="
            h-10 w-10 flex items-center justify-center rounded-full
            bg-gray-800 hover:bg-gray-700 transition
          "
                  title="Export Data"
                >
                  <FaDownload className="text-white text-sm" />
                </button>

                <button
                  onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                  className="
            h-10 w-10 flex items-center justify-center rounded-full
            bg-gray-800 hover:bg-gray-700 transition
          "
                  title="Sort"
                >
                  <FaSortAmountDown className="text-white text-sm" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {currentData.length === 0 ? (
          <NotFound
          theme="dark"
            message="No departments found"
            description="There are no departments to display at the moment"
            actionText="Add New Department"
            onClick={() => navigate("new")}
          />
        ) : (
          <>
            {/* Table Wrapper */}

            <div class="relative  overflow-x-auto ">
              <table className="min-w-full border-collapse text-center">
                <thead className="bg-gray-800 text-gray-200">
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-3 text-sm">Department ID</th>
                    <th className="px-4 py-3 text-sm">Department Name</th>
                    <th className="px-4 py-3 text-sm">Department Fees</th>
                    <th className="px-4 py-3 text-sm"></th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {currentData.map((d) => (
                    <tr
                      key={d.departmentId}
                      className="border-b border-gray-700 hover:bg-gray-800 transition"
                    >
                      <td className="px-4 py-2 text-gray-300 whitespace-nowrap">
                        {d.departmentId}
                      </td>

                      <td className="px-4 py-2 text-gray-300">{d.departmentName}</td>

                      <td className="px-4 py-2 text-gray-300">
                        <span className="inline-flex items-center gap-1">
                          <FaRupeeSign className="text-xs" />
                          {d.departmentFees}
                        </span>
                      </td>

                      <td className="px-4 py-2">
                        <Dropdown actions={getDepartmentAction(d)} theme="dark" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-4 py-3 border-t border-gray-800">
                <Pagination
                  page={page}
                  totalPages={totalPage}
                  onPageChange={setPage}
                  theme="dark"
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      <Modal data={modalData} onClose={closeModal} />
    </div>
  );
};
