import { FaCalendarAlt, FaFileMedical, FaFlask, FaPills } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const DashboardHome = () => {
  return (
    <>
      <section className=" p-1  w-full ">
        {/* Top Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
            <FaCalendarAlt className="text-3xl sm:text-4xl text-blue-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">Next Appointment</h2>
              <p className="text-[10px] sm:text-sm text-slate-600">25 Nov • 4:30 PM</p>
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
            <FaFileMedical className="text-3xl sm:text-4xl text-green-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">Medical Reports</h2>
              <p className="text-[10px] sm:text-sm text-slate-600">2 pending • 16 Available</p>
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
            <FaFlask className="text-3xl sm:text-4xl text-indigo-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">Lab Tests</h2>
              <p className="text-[10px] sm:text-sm text-slate-600">2 Pending • 14 Done</p>
            </div>
          </div>

          <div className="bg-white rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
            <FaPills className="text-3xl sm:text-4xl text-pink-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">Medications</h2>
              <p className="text-[10px] sm:text-sm text-slate-600">Next dose 8:00 PM</p>
            </div>
          </div>
        </div>

        {/* Upcoming Appointment */}

        <section className="bg-white rounded-sm shadow p-4 sm:p-1  mb-6">
          <div className="flex items-center justify-between content-center border-b border-b-zinc-100 md:p-3 flex-col md:flex-row">
            <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-3">
              Upcoming Appointment
            </h2>

            <div className="flex gap-0.5 mb-3">
              <button className="px-2 sm:px-3 py-2 text-sm sm:text-sm bg-green-500 text-white rounded hover:bg-green-600">
                Re-schedule
              </button>

              <button className="px-2 sm:px-3 py-2 text-sm sm:text-sm bg-red-500 text-white rounded hover:bg-red-600">
                Cancel
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:p-3 sm:p-1 mt-1 rounded-sm gap-3 sm:gap-0">
            <div>
              <h3 className="text-base sm:text-lg font-bold">Dr. John Doe (Cardiologist)</h3>
              <p className="text-xs sm:text-sm text-slate-600">25 Nov 2025 • 25/100</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full sm:w-auto">
              View Details
            </button>
          </div>
        </section>

        {/* Recent Appointments */}

        <div className="bg-white shadow rounded-sm p-3 sm:p-4 mt-5 md:block hidden">
          <div className="flex items-center justify-between content-center border-b border-b-zinc-100 md:p-3">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Recent Appointments</h2>
            <button className="px-2 sm:px-3 py-2 text-sm sm:text-sm bg-orange-500 text-white rounded hover:bg-orange-600">
              New
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-600">
                  <th className="p-2 sm:p-3">Doctor</th>
                  <th className="p-2 sm:p-3">Department</th>
                  <th className="p-2 sm:p-3">Date</th>
                  <th className="p-2 sm:p-3">Slot</th>
                  <th className="p-2 sm:p-3">Status</th>
                  <th className="p-2 sm:p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody className="text-gray-700">
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 sm:p-3 font-medium">Dr. Rohan Mehta</td>
                  <td className="p-2 sm:p-3">Cardiology</td>
                  <td className="p-2 sm:p-3">25 Nov 2025</td>
                  <td className="p-2 sm:p-3">26</td>
                  <td className="p-2 sm:p-3">
                    <span className="bg-yellow-200 text-yellow-700 px-2 py-1 rounded text-[10px] sm:text-xs font-semibold">
                      Upcoming
                    </span>
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
                      View
                    </button>
                  </td>
                </tr>

                <tr className="border-b hover:bg-gray-50">
                  <td className="p-2 sm:p-3 font-medium">Dr. Anjali Sharma</td>
                  <td className="p-2 sm:p-3">Pediatrics</td>
                  <td className="p-2 sm:p-3">18 Nov 2025</td>
                  <td className="p-2 sm:p-3">46</td>
                  <td className="p-2 sm:p-3">
                    <span className="bg-green-200 text-green-700 px-2 py-1 rounded text-[10px] sm:text-xs font-semibold">
                      Completed
                    </span>
                  </td>
                  <td className="p-2 sm:p-3 text-center">
                    <button className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-800 text-white rounded hover:bg-gray-900">
                      Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* mobile view  */}

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 md:hidden">
          <div className="bg-white rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition text-center ">
            <FaCalendarAlt className="text-3xl sm:text-4xl text-blue-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">Payment Report</h2>
              <NavLink
                to={""}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View
              </NavLink>
            </div>
          </div>

          <div className="bg-white text-center rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
            <FaFileMedical className="text-3xl sm:text-4xl text-green-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">Medical Reports</h2>
              <NavLink
                to={""}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View
              </NavLink>
            </div>
          </div>

          <div className="bg-white text-center rounded-sm shadow-md p-4 sm:p-5 flex items-center flex-col md:flex-row gap-4 hover:shadow-lg transition">
            <FaFlask className="text-3xl sm:text-4xl text-indigo-600" />
            <div>
              <h2 className="text-[13px] sm:text-lg font-semibold">All Appointment </h2>
              <button
                to={""}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
