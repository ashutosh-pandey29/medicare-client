import { NavLink, useLocation, useParams } from "react-router-dom";
import { FaArrowsRotate } from "react-icons/fa6";

export const ViewDoctor = () => {
  const { id } = useParams();

  const location = useLocation();
  const doctor = location.state.doctor;

  return (
    <>
      <div className=" sm:max-w-sm md:min-w-full  mx-auto overflow-x-auto p-1">
        <div className=" min-h-screen ">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-extrabold bg-linear-to-r from-green-500 to-purple-500 text-transparent bg-clip-text">
              Doctor Profile Page
            </h1>
            <p className="text-gray-500 text-sm">
              View complete details about the <strong>{doctor.name}</strong> .
            </p>
          </div>

          <button className="bg-gray-200 text-gray-700 px-5 py-2 rounded hover:bg-gray-300">
              Back
            </button>


          {/* Profile Card */}
          <div className="bg-white rounded shadow p-5 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-indigo-200"></div>
              <div>
                <h2 className="text-xl font-semibold">Dr. {doctor.name}</h2>
                <p className="text-sm text-gray-500"> {doctor.department}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              <p>
                <span className="font-semibold">Email:</span> {doctor.email}
              </p>
              <p>
                <span className="font-semibold">Phone:</span> {doctor.phone || ".........."}
              </p>
              <p>
                <span className="font-semibold">Username:</span> {doctor.username || ".........."}
              </p>
              <p>
                <span className="font-semibold">Experience:</span> {doctor.experience || ".........."}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {doctor.role || "........"}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {doctor.isApproved ? "Approved" : "not Approved"}
              </p>

              <p>
                <span className="font-semibold">Id Card:</span>{" "}
                <span className="bg-zinc-200 text-orange-400 rounded-full text-sm px-2 py-1 capitalize">
                  {doctor.isIdCardIssued ? "Issued" : "pending"}
                </span>
              </p>
            </div>
          </div>

          {/* Professional Info */}
          <div className="bg-white rounded shadow p-5 mb-8">
            <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">
              Professional Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <p>
                <span className="font-semibold">User ID:</span> {doctor.userId || ".........."}
              </p>
              <p>
                <span className="font-semibold">Department:</span> {doctor.department || "........"}
              </p>
              <p>
                <span className="font-semibold">Clinic Name:</span> {doctor.clinicName}
              </p>
              <p>
                <span className="font-semibold">Working Days:</span> Weekdays
              </p>
              <p>
                <span className="font-semibold">Slot Timing:</span>

                <ul className="list-disc pl-5 space-y-1">
                  {doctor.workingTime.map((dayObj, index) => (
                    <li key={index}>
                      {dayObj.day}:{" "}
                      {dayObj.slots.map((slot, slotIndex) => (
                        <span key={slotIndex}>
                          {slot.from} - {slot.to}
                          {slotIndex < dayObj.slots.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded shadow p-5 mb-8">
            <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">
              Education Background
            </h2>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {doctor.education.map((e, index) => (
                <li key={index}>
                  <strong>{e.degree} </strong> - ({e.year}) - {e.college}
                </li>
              ))}
            </ul>
          </div>

          {/* Bio */}
          <div className="bg-white rounded shadow p-5 mb-8">
            <h2 className="text-lg font-semibold border-b border-zinc-200 pb-2 mb-4">Bio</h2>
            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3">
            <button className="bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700">
              Delete
            </button>

            
            <NavLink to={`../profile/edit/${id}`} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-800">
              Edit Profile
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
