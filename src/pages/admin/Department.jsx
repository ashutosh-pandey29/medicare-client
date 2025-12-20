import { Heading } from "../../components/UI/Dashboard/Heading";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";
import { CiExport } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { Outlet } from "react-router-dom";
export const Department = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departments, setDepartments] = useState([]);

  // [
  //   { id: 1, name: "Cardiology" },
  //   { id: 2, name: "Neurology" },
  //   { id: 3, name: "Orthopedics" },
  //   { id: 4, name: "General Medicine" },
  //   { id: 5, name: "Pediatrics" },
  //   { id: 6, name: "Gynecology" },
  //   { id: 7, name: "Dermatology" },
  //   { id: 8, name: "ENT" },
  //   { id: 9, name: "Psychiatry" },
  //   { id: 10, name: "Radiology" },
  // ]

  const handleSubmit = (e) => {
    e.preventDefault();
    setDepartments([...departments, { departmentName }]);
    console.log(departments);
    setDepartmentName("");
  };

  return (
    <>
      <div className=" sm:max-w-sm md:min-w-full  mx-auto overflow-x-auto p-1">
       <Outlet/>
      </div>
    </>
  );
};
