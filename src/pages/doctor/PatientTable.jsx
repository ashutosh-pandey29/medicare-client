import { useEffect, useMemo, useState } from "react";
import { CiExport, CiFilter } from "react-icons/ci";
import { FaDownload, FaEye } from "react-icons/fa6";
import { useToken } from "../../hooks/custom/useToken";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { Dropdown } from "../../components/UI/Dropdown";
import { MdHealing } from "react-icons/md";
import { FaEdit, FaSortAmountDown } from "react-icons/fa";
import { Button } from "../../components/UI/Button";
import { useAppointment } from "../../hooks/appointment/useAppointment";
import { TableSkeletonLoader } from "../../components/UI/loaders/skeleton/TableSkeletonLoader";
import { usePagination } from "../../hooks/common/usePagination";
import { Pagination } from "../../components/UI/pagination/Pagination";
import { NotFound } from "../../components/basic/NotFound";
import { Modal } from "../../components/modals/Modal";
import { useModal } from "../../hooks/custom/useModal";
import { ExportOptionsModal } from "../../components/modals/ExportOptionsModal";

export const PatientTable = () => {
  const [isOn, setIsOn] = useState(false);
  const token = useToken();
  const { decodedUser } = useJwtDecode();
  const [patients, setPatients] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(null);
  const { modalData, closeModal, openModal } = useModal();

  const { loading, getMyPatient } = useAppointment();

  //fetch all patient

  console.log(decodedUser);
  useEffect(() => {
    const getAllPatient = async () => {
      const response = await getMyPatient();

      if (response.success) {
        setPatients(response.data);
      }
    };

    getAllPatient();
  }, []);

  console.log(patients);

  const getAction = () => [
    {
      label: "View Summary",
      icon: FaEye,
    },
    {
      label: "Report & Prescription",
      icon: FaEdit,
    },
  ];

  const tableDropdownAction = [
    {
      label: "Print Table",
      icon: FaEdit,
    },
    {
      label: "Download CSV",
      icon: FaEdit,
    },
    {
      label: "Download Excel",
      icon: FaEdit,
    },

    {
      label: "Download PDF",
      icon: FaEdit,
    },
  ];

  /**================SEARCH DATA========================  */

  const searchedPatient = useMemo(() => {
    if (!search.trim()) return patients;

    return patients.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
  }, [patients, search]);

  /**================ HANDLE DATA SORTING(A->Z / Z->A) */

  const sortedPatients = useMemo(() => {
    if (!sortOrder) return searchedPatient; // no sorting

    return [...searchedPatient].sort((a, b) =>
      sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  }, [searchedPatient, sortOrder]);

  /**================HANDLE PAGINATION=================== */
  const limit = 5;
  const { page, setPage, totalPage, currentData } = usePagination(sortedPatients, limit);

  if (loading) return <TableSkeletonLoader />;

  return (
    <div className="max-w-7xl mx-auto ">
      {/* Header */}

      <div
        className="relative w-full max-w-full rounded overflow-hidden shadow z-10"
        style={{
          background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
        }}
      >
        {/* Decorative medical cross patterns */}
        <div className="absolute top-4 right-8 w-16 h-16 opacity-10">
          <div className="absolute w-4 h-16 bg-white left-6"></div>
          <div className="absolute w-16 h-4 bg-white top-6"></div>
        </div>
        <div className="absolute bottom-8 left-8 w-12 h-12 opacity-10">
          <div className="absolute w-3 h-12 bg-white left-4.5"></div>
          <div className="absolute w-12 h-3 bg-white top-4.5"></div>
        </div>

        {/* Pulse line decoration */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5 z-50" viewBox="0 0 1000 200">
          <path
            d="M0,100 L200,100 L220,60 L240,140 L260,100 L1000,100"
            stroke="white"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {/* Main Content */}
        <div className="relative z-10 p-4">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl md:text-4xl font-bold text-white">Patient History</h2>
                </div>

                <p className="text-gray-100 text-base  font-semibold">
                  View complete details of patients treated by you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 100" fill="none">
          <path
            d="M0,40L80,45C160,50,320,60,480,58C640,56,800,42,960,40C1120,38,1280,48,1360,53L1440,58L1440,100L0,100Z"
            fill="rgba(255,255,255,0.15)"
          />
        </svg>
      </div>

      {/* table */}

      <div className="w-full mt-4 ">
        <div className="bg-white rounded-md shadow-lg">
          {/* Header */}
          <div className="px-1 md:px-4 py-3 border-b border-zinc-100">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {/* Title */}
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Patient Table</h2>

              {/* Actions */}
              <div className="flex sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
                {/* Search */}
                <input
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search patient by name..."
                  className="
               w-full sm:w-64
               border rounded-md px-4 py-2
               border-zinc-100 bg-white text-gray-900
               outline-none focus:border-blue-500
             "
                />

                {/* Buttons */}
                <div className="flex items-center gap-2 justify-end">
                  <button
                    onClick={() =>
                      openModal(<ExportOptionsModal onClose={closeModal} theme="light" />)
                    }
                    className="
                 h-10 w-10 flex items-center justify-center rounded-full
                 bg-zinc-100 hover:bg-zinc-300 transition
               "
                    title="Export Data"
                  >
                    <FaDownload className="text-black text-sm" />
                  </button>

                  <button
                    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                    className="
                 h-10 w-10 flex items-center justify-center rounded-full
                 bg-zinc-100 hover:bg-zinc-300 transition
               "
                    title="Sort"
                  >
                    <FaSortAmountDown className="text-black text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {currentData.length === 0 ? (
            <NotFound
              message="No patient found"
              description="There are no patient to display at the moment"
            />
          ) : (
            <>
              {/* Table Wrapper */}

              <div className="relative  overflow-x-auto ">
                <table className="min-w-full border-collapse text-center">
                  <thead className="bg-zinc-50 text-gray-900">
                    <tr className="border-b border-amber-50">
                      <th className="px-4 py-3 text-sm">Sr.No.</th>
                      <th className="px-4 py-3 text-sm">Patient Name</th>
                      <th className="px-4 py-3 text-sm">Status</th>
                      <th className="px-4 py-3 text-sm">Total Visit</th>
                      <th className="px-4 py-3 text-sm">Last Visit</th>
                    </tr>
                  </thead>

                  <tbody className="text-sm">
                    {currentData.map((d, i) => (
                      <tr
                        key={d.departmentId}
                        className="border-b border-amber-100 hover:bg-zinc-100 transition"
                      >
                        <td className="px-4 py-2 text-gray-900 whitespace-nowrap">
                          0{(page - 1) * limit + i + 1}
                        </td>

                        <td className="px-4 py-2 text-gray-900">{d.name}</td>

                        <td className="px-4 py-2 text-gray-900">
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold
                                ${
                                  d.status === "completed"
                                    ? "bg-green-100 text-green-700"
                                    : d.status === "confirmed"
                                      ? "bg-blue-100 text-blue-700"
                                      : d.status === "missed"
                                        ? "bg-red-100 text-red-700"
                                        : d.status === "pending"
                                          ? "bg-yellow-100 text-yellow-700"
                                          : "bg-gray-100 text-gray-700"
                                }
                              `}
                          >
                            {d.status}
                          </span>
                        </td>

                        <td className="px-4 py-2">
                          <span className="inline-flex items-center gap-1">0{d.visitCount}</span>
                        </td>

                        <td className="px-4 py-2">
                          <span className="inline-flex items-center gap-1">
                            {new Date(d.lastVisit).toLocaleDateString()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="px-4 py-3 border-t border-amber-50">
                  <Pagination
                    page={page}
                    totalPages={totalPage}
                    onPageChange={setPage}
                    theme="light"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Modal */}
        <Modal data={modalData} onClose={closeModal} />
      </div>
    </div>
  );
};
