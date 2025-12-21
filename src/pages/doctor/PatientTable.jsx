import { useState } from "react";
import { CiExport, CiFilter } from "react-icons/ci";

export const PatientTable = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-4">
      {/* Header */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="mb-4 md:mb-8">
          <h2 className="text-base md:text-4xl lg:text-3xl font-extrabold bg-linear-to-r from-green-500 to-purple-500 bg-clip-text text-transparent">
            Patient Records
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            List of patients whose appointments have been successfully completed
          </p>
        </div>
      </div>

      <div className="w-full overflow-x-auto">
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
            <tr className="border-b border-indigo-50">
              <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base capitalize">
                Patient Name
              </th>

              <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base capitalize">
                Visit Date
              </th>

              <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base capitalize">
                Treatment Status
              </th>

              <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base capitalize">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-xs sm:text-sm md:text-base">
            {/* {doctors?.map((d, i) => (
              <tr
                key={i}
                className="cursor-pointer transition duration-300 hover:bg-indigo-100 border-b border-b-zinc-100"
                onClick={() => navigate(`profile/${d.userId}`, { state: { doctor: d } })}
              >
                <td className="px-2 py-2 sm:px-4 sm:py-4">{d.name}</td>
                <td className="px-2 py-2 sm:px-4 sm:py-4">{d.department}</td>

                <td className="px-2 py-2 sm:px-4 sm:py-4">
                  <span className="px-2 py-1 sm:px-3 sm:py-1 text-[10px] sm:text-xs md:text-sm bg-green-100 text-green-600 rounded-full">
                    Active
                  </span>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
