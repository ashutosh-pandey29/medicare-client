import { Heading } from "../../components/UI/Dashboard/Heading";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

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

  // handle change -  add new department

  const handleChange = (e) => {
    // const { name, type } = e.target;

    setDepartmentName(e.target.value);
    console.log(departmentName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDepartments([...departments, { departmentName }]);
    console.log(departments);
    setDepartmentName("");
  };

  return (
    <>
      <section>
        {/* heading */}
        <div className="border-b border-b-zinc-100">
          <Heading
            heading={"Department Management"}
            subText={`Keep your hospital structure organized. Manage every department efficiently—create, update, or delete department entries here.
`}
          />
        </div>

        {/* add and view department */}

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-5 gap-4">
          <div className="shadow p-3">
            {/* heading */}

            <div className="border-b">
              <h1 className="text-2xl ">Add Department</h1>
            </div>

            {/* form  */}

            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                <label htmlFor="departmentName" className="capitalize  space-y-2 block">
                  Department Name{" "}
                </label>
                <input
                  type="text"
                  name="departmentName"
                  id="departmentName"
                  placeholder="Eg: Cardiology ,  Neurology...."
                  className="w-full mt-1 border rounded border-zinc-300 h-10 outline-0 focus:border-blue-500 px-2"
                  value={departmentName}
                  onChange={handleChange}
                />

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded mt-5">
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* department list */}

          <div className="shadow p-2">
            {/* heading */}

            <div className="border-b flex md:flex-row flex-col   justify-between md:items-center">
              <h1 className="text-2xl ">All Department</h1>

              {/* button */}
              <div className="flex gap-2 items-center">
                {/* search */}
                <input
                  type="search"
                  placeholder="Search Department"
                  className="outline-0 border border-zinc-100 focus:border-blue-800 w-full h-8 rounded  px-2"
                  onChange={handleChange}
                />

                <span className="block w-fit bg-zinc-100 font-semibold text-2xl rounded  px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer ">
                  <HiOutlineDotsVertical />
                </span>
              </div>
            </div>

            {/* list */}

            <div className="list-container h-auto mb-5">
              <ul className="mt-4 space-y-1">
                {departments.length > 0 ? (
                  departments.map((d, i) => {
                    return (
                      <li
                        key={i}
                        className="p-1 h-10 flex items-center capitalize hover:bg-zinc-100  justify-between"
                      >
                        <span className="block">{d.departmentName}</span>
                        <div className="list-btn flex items-center gap-1">
                          <span className="block w-fit bg-zinc-100 font-semibold text-xl rounded px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer">
                            <MdEditSquare />
                          </span>
                          <span className="block w-fit bg-zinc-100 font-semibold text-xl rounded px-1 py-1 mb-1 hover:bg-orange-500 hover:text-white cursor-pointer">
                            <MdDelete />
                          </span>
                        </div>
                      </li>
                    );
                  })
                ) : (
                  <p className="text-center mt-5 text-gray-500">No Department Found...</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
