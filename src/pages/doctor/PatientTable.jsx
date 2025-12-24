import { useEffect, useState } from "react";
import { CiExport, CiFilter } from "react-icons/ci";
import { FaDownload, FaEye } from "react-icons/fa6";
import { useToken } from "../../hooks/custom/useToken";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { NoDataFound } from "../../components/basic/DataNotFound";

export const PatientTable = () => {
  const [isOn, setIsOn] = useState(false);
  const token = useToken();
  const { decodedUser } = useJwtDecode();
  const [patients, setPatients] = useState([]);

  //fetch all patient

  console.log(decodedUser);
  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/patient`, {
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${token}` : null,
          },
        });
        const jsonResponse = await response.json();

        // console.log(jsonResponse);
        setPatients(jsonResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPatient();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
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
        <div className="relative z-10 p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center">
              <div className="ml-1 md:ml-6">
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
      <div className="w-full overflow-x-auto">
        <div className="max-w-screen overflow-auto  md:p-0">
          <div className="min-h-screen bg-linear-to-br from-blue-50 to-cyan-50  mt-5 p-1 md:p-0">
            <div className="max-w-7xl mx-auto ">
              <div className="bg-white rounded shadow overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-[#059669] to-[#3ad28b] md:px-6  md:py-2 px-2">
                  <div className="flex items-center  justify-between  ">
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-white flex  items-center gap-2">
                        Patients Table
                      </h2>
                      <p className="text-cyan-50 text-sm mt-1"></p>
                    </div>

                    <div className="h-auto p-2 flex  gap-1.5 justify-end">
                      <input
                        type="text"
                        className="border rounded  border-gray-100 outline-0 px-2 focus:border-green-300"
                        placeholder="Quick Search...."
                      />

                      <span className="block w-fit bg-zinc-100 font-semibold text-2xl rounded  px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer ">
                        <CiFilter />
                      </span>

                      <span className="block w-fit bg-zinc-100 font-semibold text-2xl rounded  px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer ">
                        <CiExport />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  {patients.length === 0 ? (
                    <NoDataFound message="No Patient Found" />
                  ) : (
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div className="flex items-center gap-2">Sr.No.</div>
                          </th>
                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div className="flex items-center gap-2">Patient Name</div>
                          </th>

                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Treatment Status
                          </th>

                          <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            <div className="flex items-center gap-2">Action</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {patients?.map((p, index) => (
                          <tr className="hover:bg-blue-50 transition-colors">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-cyan-700">
                                0{index + 1}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-3">
                                <div>
                                  <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                                  <p className="text-xs text-gray-500">Apt ID: {p.appointmentId}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900 font-medium">
                                <span
                                  className={`rounded-full px-3 py-2 capitalize ${
                                    p.status === "completed"
                                      ? "bg-green-300 text-green-700"
                                      : p.status === "missed"
                                      ? "bg-red-100 text-red-700"
                                      : "bg-yellow-100 text-yellow-700"
                                  }`}
                                >
                                  {p.status}
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center gap-1.5">
                              <button className=" bg-blue-500 hover:bg-blue-600 text-white p-2 rounded shadow-sm transition cursor-pointer">
                                <FaEye size={18} />
                              </button>

                              <button className="flex items-center justify-between gap-1.5 bg-green-500 hover:bg-green-600 text-white p-2 rounded shadow-sm transition cursor-pointer">
                                <FaDownload size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>

                {/* Footer */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Showing <span className="font-semibold text-cyan-600">5</span> of{" "}
                    <span className="font-semibold text-cyan-600">28</span> patients scheduled for
                    today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
