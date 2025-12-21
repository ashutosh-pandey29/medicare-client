import { CiExport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/custom/useFetch";
import { useEffect, useState } from "react";

export const DoctorList = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    const getDoctor = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/get`);

      const jsonResponse = await response.json();

      console.log(jsonResponse.data);

      setDoctors(jsonResponse.data);
    };
    getDoctor();
  }, []);

  return (
    <>
      <div className=" sm:max-w-sm md:min-w-full  mx-auto overflow-x-auto p-1">
        <div className="flex flex-start  md:justify-between md:items-center flex-col md:flex-row">
          <div className="md:mb-8 mb-4">
            <h2 className="text-base md:text-4xl lg:text-3xl  font-extrabold bg-linear-to-r from-green-500 to-purple-400 text-transparent bg-clip-text">
              Doctors Management
            </h2>
            <p className="text-gray-500 text-sm">Manage departments, doctors and access levels</p>
          </div>

          <div className="btn-box flex gap-1">
            <button
              className="px-3 py-1 text-lg bg-indigo-500 hover:bg-indigo-600 text-white rounded duration-200"
              onClick={() => navigate("new")}
            >
              Add new
            </button>
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
                <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">Name</th>

                <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
                  Department
                </th>
                <th className="px-2 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:text-base">
                  Status
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="text-xs sm:text-sm md:text-base">
              {doctors?.map((d, i) => (
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
              ))}
            </tbody>
          </table>
          
        </div>
      </div>
    </>
  );
};
