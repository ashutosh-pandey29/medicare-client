import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdLockReset,
  MdOutlineNoAccounts,
  MdOutlinePublishedWithChanges,
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
} from "react-icons/fa";

export const DoctorList = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const getDoctor = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/get`);
      const jsonResponse = await response.json();
      setDoctors(jsonResponse.data);
    };
    getDoctor();
  }, []);

  const actions = [
    {
      label: "view Profile",
      icon: FaEye,
    },
    {
      label: "Change role",
      icon: MdOutlinePublishedWithChanges,
    },
    {
      label: "Activity History",
      icon: FaHistory,
    },
    {
      label: "Deactivate Account",
      icon: MdOutlineNoAccounts,
    },
    {
      label: "Reset Password",
      icon: MdLockReset,
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
      label: "All",
      value: "all",
    },
    {
      label: "Active Doctors",
      value: "active",
    },
    {
      label: "Inactive Doctors",
      value: "inactive",
    },
    {
      label: "Verified Doctors",
      value: "verified",
    },
    {
      label: "Pending Verification",
      value: "pending_verified",
    },
    {
      label: "Blocked Doctors",
      value: "blocked",
    },
    {
      label: "By Department",
      value: "department",
    },
  ];

  return (
    <div className="sm:max-w-sm md:min-w-full mx-auto p-1 h-auto">
      {/* Heading */}

      {/* Table Container */}
      <div className="bg-gray-900 rounded-md border border-gray-800 shadow-lg mt-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 gap-2 sm:gap-0">
          <h2 className="text-xl font-bold text-white">Doctors List</h2>
          <div className="flex gap-1.5">
            <Dropdown label="Download" theme="dark" actions={tableDropdownAction} />
            <FilterDropdown theme="dark" filters={filters} />
          </div>
        </div>

        {/* Table */}
        <div className="">
          <table className="min-w-[600px] w-full border-collapse text-left">
            <thead className="bg-gray-800 border-b border-gray-700">
              <tr>
                <th className="px-2 py-2 sm:px-4 sm:py-3 text-sm md:text-base text-gray-300 min-w-[100px]">
                  Avatar
                </th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 text-sm md:text-base text-gray-300 min-w-[150px]">
                  Name
                </th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 text-sm md:text-base text-gray-300 min-w-[150px]">
                  Department
                </th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 text-sm md:text-base text-gray-300 min-w-[100px]">
                  Status
                </th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 text-sm md:text-base text-gray-300 min-w-[120px]">
                  Phone
                </th>
                <th className="px-2 py-2 sm:px-4 sm:py-3 text-sm md:text-base text-gray-300 min-w-[100px]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="text-white text-sm md:text-base">
              {doctors?.map((d, i) => (
                <tr key={i} className="hover:bg-gray-800 transition-colors duration-200">
                  <td className="py-3 px-2 sm:px-4 border-b border-gray-700">
                    <img
                      src={d.avatar || "https://img.icons8.com/?size=96&id=kDoeg22e5jUY&format=png"}
                      alt="avatar"
                      className="h-12 w-12 rounded-full object-cover border border-slate-500"
                    />
                  </td>
                  <td className="py-3 px-2 sm:px-4 border-b border-gray-700">{d.name}</td>
                  <td className="py-3 px-2 sm:px-4 border-b border-gray-700">{d.department}</td>
                  <td className="py-3 px-2 sm:px-4 border-b border-gray-700">
                    <div class="mt-1 flex items-center gap-x-1.5">
                      <div class="flex-none rounded-full bg-green-500/20 p-1">
                        <div class="size-1.5 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                      <p class="text-xs/5 text-gray-500">Online</p>
                    </div>
                  </td>
                  <td className="py-3 px-2 sm:px-4 border-b border-gray-700">{d.phone}</td>
                  <td className="py-3 px-2 sm:px-4 border-b border-gray-700">
                    <Dropdown actions={actions} theme="dark" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
