import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdLockReset,
  MdOutlineNoAccounts,
  MdOutlinePublishedWithChanges,
  MdOutlineVerifiedUser,
} from "react-icons/md";
import { Dropdown } from "../../components/UI/Dropdown";
import { FilterDropdown } from "../../components/UI/Dashboard/FilterDropdown";
import {
  FaDownload,
  FaEdit,
  FaEye,
  FaFileExcel,
  FaFilePdf,
  FaHistory,
  FaPrint,
  FaSortAmountDown,
} from "react-icons/fa";
import { useDoctor } from "../../hooks/admin/useDoctor";
import { NotFound } from "../../components/basic/NotFound";
import { TableSkeletonLoader } from "../../components/UI/loaders/skeleton/TableSkeletonLoader";
import { usePagination } from "../../hooks/common/usePagination";
import { Pagination } from "../../components/UI/pagination/Pagination";
import { useModal } from "../../hooks/custom/useModal";

export const DoctorList = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  const [search, setSearch] = useState("");

  const [sortOrder, setSortOrder] = useState(null);

  const { modalData, closeModal, openModal } = useModal();

  const { fetchDoctor, loading } = useDoctor();

  const loadDoctorList = async () => {
    const response = await fetchDoctor();

    console.log(response);
    if (response?.success) {
      setDoctors(response.data);
    }
  };
  useEffect(() => {
    loadDoctorList();
  }, []);

  /**================SEARCH DATA========================  */

  const searchedData = useMemo(() => {
    if (!search.trim()) return doctors;

    const query = search.toLowerCase();

    return doctors.filter((d) => {
      const profileId = d.profileId?.toLowerCase() || "";
      const doctorName = d.doctorName?.toLowerCase() || "";
      const departmentName = d.departmentName?.toLowerCase() || "";
      const isVerified = d.isVerified ? "verified" : "not verified";

      return (
        profileId.includes(query) ||
        doctorName.includes(query) ||
        departmentName.includes(query) ||
        isVerified.includes(query)
      );
    });
  }, [doctors, search]);

  /**================ HANDLE DATA SORTING(A->Z / Z->A) */

  const sortedData = useMemo(() => {
    if (!sortOrder) return searchedData; // no sorting

    return [...searchedData].sort((a, b) =>
      sortOrder === "asc"
        ? a.departmentName.localeCompare(b.departmentName)
        : b.departmentName.localeCompare(a.departmentName)
    );
  }, [searchedData, sortOrder]);

  /**================HANDLE PAGINATION=================== */
  const limit = 5;
  const { page, setPage, totalPage, currentData } = usePagination(sortedData, limit);

  const getAction = (content) => [
    {
      label: "view or Verify Profile",
      icon: FaEye,
      onClick: () => navigate(`profile/${content.profileId}`),
    },

    {
      label: "Change role",
      icon: MdOutlinePublishedWithChanges,
    },

    {
      label: "Deactivate Account",
      icon: MdOutlineNoAccounts,
    },
  ];

  if (loading) return <TableSkeletonLoader />;

  return (
    <div className="sm:max-w-sm md:min-w-full mx-auto p-1 ">
      {/* Heading */}

      <div className=" bg-gray-900 rounded-md shadow-lg">
        <div className="px-1 md:px-4 py-3 border-b border-gray-800">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-white">Doctor Table </h2>

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
            message="No Doctors Found"
            description="There are currently no doctor profiles available in the system."
            theme="dark"
          />
        ) : (
          <>
            {/* Table Wrapper */}

            <div class="relative  overflow-x-auto h-screen ">
              <table className="min-w-full border-collapse text-center">
                <thead className="bg-gray-800 text-gray-200">
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-3 text-sm">Profile ID</th>
                    <th className="px-4 py-3 text-sm">Doctor Name</th>
                    <th className="px-4 py-3 text-sm">Doctor Department</th>
                    <th className="px-4 py-3 text-sm">Status</th>
                    <th className="px-4 py-3 text-sm"></th>
                  </tr>
                </thead>

                <tbody className="text-sm">
                  {currentData.map((d) => (
                    <tr
                      key={d.departmentId}
                      className="border-b border-gray-700 hover:bg-gray-800 transition"
                    >
                      <td className="px-4 py-2 text-gray-300 whitespace-nowrap">{d.profileId}</td>

                      <td className="px-4 py-2 text-gray-300">{d.doctorName}</td>
                      <td className="px-4 py-2 text-gray-300">{d.departmentName}</td>

                      <td className="px-4 py-2 text-gray-300">
                        <span className="inline-flex items-center gap-1">
                          {d.isVerified ? (
                            <>
                              <span className="text-sm text-green-600">verified</span>
                            </>
                          ) : (
                            <>
                              <span className="text-sm text-red-600">not verified</span>
                            </>
                          )}
                        </span>
                      </td>

                      <td className="px-4 py-2">
                        <Dropdown actions={getAction(d)} theme="dark" />
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
    </div>
  );
};
