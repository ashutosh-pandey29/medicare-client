import { useEffect, useState } from "react";
import { CiExport, CiFilter } from "react-icons/ci";
import { FaDownload, FaEye } from "react-icons/fa6";
import { useToken } from "../../hooks/custom/useToken";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
import { NoDataFound } from "../../components/basic/DataNotFound";
import { Dropdown } from "../../components/UI/Dropdown";
import { MdHealing } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Button } from "../../components/UI/Button";

export const PatientTable = () => {
  const [isOn, setIsOn] = useState(false);
  const token = useToken();
  const { decodedUser } = useJwtDecode();
  const [patients, setPatients] = useState([]);

  //fetch all patient

  console.log(decodedUser);
  // useEffect(() => {
  //   const fetchPatient = async () => {
  //     try {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/patient`, {
  //         method: "GET",
  //         headers: {
  //           "Authorization": token ? `${token}` : null,
  //         },
  //       });
  //       const jsonResponse = await response.json();

  //       // console.log(jsonResponse);
  //       setPatients(jsonResponse.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchPatient();
  // }, []);

  // console.log(patients);

  const actions = [
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
      <div className="w-full overflow-x-auto">
        <div className="max-w-screen overflow-auto  md:p-0">
          <div className="min-h-screen mt-5 p-1 md:p-0">
            <div className="max-w-7xl mx-auto ">
              <div className="bg-white rounded  overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-[#059669] to-[#3ad28b] md:px-6  md:py-2 px-2">
                  <div className="flex flex-col md:flex-row md:items-center  md:justify-between ">
                    <input
                      type="text"
                      className="w-full mt-1 md:mt-0 md:w-1/2 rounded-lg px-2 py-3 text-sm bg-white/20 text-white placeholder-white/70 border border-white/30 backdrop-blur-md outline-none focus:border-white focus:bg-white/30 transition"
                      placeholder="Quick Search...."
                    />

                    <div className="h-auto p-2 flex  gap-1.5 justify-end">
                      <Dropdown label={"Action"} actions={tableDropdownAction} />
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  {/* {patients.length === 0 ? (
                    <NoDataFound message="No Patient Found" />
                  ) : ( */}
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-200 border-b border-gray-200">
                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          <div className="flex items-center gap-2">Sr.No.</div>
                        </th>
                        <th className="px-6 py-4  text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          <div className="flex items-center gap-2  ">Patient Name</div>
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          <div className="flex items-center gap-2">
                            Treatment Status
                          </div>
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          <div className="flex items-center gap-2">Visit Date</div>
                        </th>

                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {/* Row 1 */}
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-cyan-700">
                            01
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Rahul Sharma</p>
                            <p className="text-xs text-gray-500">Apt ID: APT-001</p>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="rounded-full px-3 py-1 text-sm bg-green-100 text-green-700 font-medium">
                            Completed
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          12 Dec 2024
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-end">
                          <Dropdown actions={actions} />
                        </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-cyan-700">
                            02
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Anita Verma</p>
                            <p className="text-xs text-gray-500">Apt ID: APT-002</p>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="rounded-full px-3 py-1 text-sm bg-green-100 text-green-700 font-medium">
                            Completed
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          13 Dec 2024
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Dropdown />
                        </td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-cyan-700">
                            03
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Mohit Kumar</p>
                            <p className="text-xs text-gray-500">Apt ID: APT-003</p>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="rounded-full px-3 py-1 text-sm bg-green-100 text-green-700 font-medium">
                            Completed
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          14 Dec 2024
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Dropdown />
                        </td>
                      </tr>

                      {/* Row 4 */}
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-cyan-700">
                            04
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Priya Singh</p>
                            <p className="text-xs text-gray-500">Apt ID: APT-004</p>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="rounded-full px-3 py-1 text-sm bg-green-100 text-green-700 font-medium">
                            Completed
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          15 Dec 2024
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Dropdown />
                        </td>
                      </tr>

                      {/* Row 5 */}
                      <tr className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-semibold text-cyan-700">
                            05
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <p className="text-sm font-semibold text-gray-900">Amit Patel</p>
                            <p className="text-xs text-gray-500">Apt ID: APT-005</p>
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="rounded-full px-3 py-1 text-sm bg-green-100 text-green-700 font-medium">
                            Completed
                          </span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          16 Dec 2024
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">
                          <Dropdown />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  {/* )} */}
                </div>

                {/* Footer */}
                <div className=" px-6 py-4 border-t border-gray-200">
                  <div class="flex items-center gap-8  justify-center">
                    <button
                      disabled
                      class="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>

                    <p class="text-slate-600">
                      Page <strong class="text-slate-800">1</strong> of&nbsp;
                      <strong class="text-slate-800">10</strong>
                    </p>

                    <button
                      class="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
