import { useEffect, useState } from "react";
import { useForm } from "../../hooks/custom/useForm";
import { appointmentSchema } from "../../utils/validationSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";
import { RiCloseLargeLine } from "react-icons/ri";
import { useDepartment } from "../../hooks/department/useDepartment";
import { useProfile } from "../../hooks/doctor/useProfile";
import { useAppointment } from "../../hooks/appointment/useAppointment";

export const NewAppointmentModelForm = ({ mode = "create", data, onClose }) => {
  const [departments, setDepartments] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const { fetchPublicDepartment } = useDepartment();
  const { fetchDoctorByDepartmentId } = useProfile();
  const { loading, newAppointment } = useAppointment();

  const { values, setValues, errors, setErrors, handleChange, resetForm } = useForm(
    {
      departmentId: data?.departmentId || "",
      doctorId: data?.doctorId || "",
      appointmentDate: data?.appointmentDate ? data.appointmentDate.split("T")[0] : "",
      name: data?.name || "",
      phone: data?.phone || "",
      problem: data?.problem || "",
    },
    appointmentSchema
  );

  useEffect(() => {
    if (mode === "update" && data) {
      setValues({
        departmentId: data.departmentId || "",
        doctorId: data.doctorId || "",
        appointmentDate: data.appointmentDate ? data.appointmentDate.split("T")[0] : "",
        name: data.name || "",
        phone: data.phone || "",
        problem: data.problem || "",
      });
    }
  }, [data, mode]);

  // fetch department for dropdown

  useEffect(() => {
    const fetchDepartment = async () => {
      const response = await fetchPublicDepartment(setErrors);
      console.log(response);
      if (response.success) {
        setDepartments(response.data);
      }
    };
    fetchDepartment();
  }, []);

  // fetch doctor for dropdown

  const fetchDoctor = async (departmentId) => {
    const response = await fetchDoctorByDepartmentId(departmentId);
    console.log(response);
    if (response.success) {
      setDoctor(response.data);
    }
  };

  // handle department change
  const handleDepartmentChange = (e) => {
    handleChange(e);
    setDoctor([]); // reset old doctor
    fetchDoctor(e.target.value);
  };

  // fetch doctor when department already exists (update case)
  useEffect(() => {
    if (values.departmentId) {
      fetchDoctor(values.departmentId);
    }
  }, [values.departmentId]);

  // handle submit appointment

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await newAppointment(values);

    if (response.success) {
      toast.success(response.message || "Appointment crated");
      // move to payment page
    }
  };

  return (
    <>
      <div className="w-full max-w-sm md:max-w-lg p-1 md:p-6 bg-white rounded-xl">
        {/* header */}

        <div className="mb-5 p-1 border-b border-b-zinc-100 flex items-center justify-between">
          <h1 className="text-2xl font-semibold ">Book Your Appointment</h1>
          <button className={`w-8 h-8 flex items-center justify-center rounded`} onClick={onClose}>
            <RiCloseLargeLine />
          </button>
        </div>

        <form className="space-y-1 p-3" onSubmit={handleSubmit}>
          {/* Department & Service */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {/* Department Select */}
            <div className="flex flex-col">
              <select
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                name="departmentId"
                id="departmentId"
                value={values.departmentId}
                onChange={handleDepartmentChange}
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept._id} value={dept._id}>
                    {dept.departmentName}
                  </option>
                ))}
              </select>
            </div>

            {/* Doctor Select */}
            <div className="flex flex-col">
              <select
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                name="doctorId"
                id="doctorId"
                value={values.doctorId}
                onChange={handleChange}
              >
                <option value="">
                  {!values.departmentId ? "Select department first" : "Select Doctor"}
                </option>{" "}
                {doctor.length > 0 ? (
                  doctor.map((doc) => (
                    <option key={doc._id} value={doc._id}>
                      {doc.doctorName}
                    </option>
                  ))
                ) : (
                  <option disabled>Doctor not found</option>
                )}
              </select>
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col">
              <input
                type="date"
                name="appointmentDate"
                id="appointmentDate"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                onChange={handleChange}
                value={values.appointmentDate}
              />
            </div>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                id="name"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                value={values.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                id="phone"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                value={values.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Problem/Message */}
          <div className="flex flex-col mt-4">
            <textarea
              placeholder="Please describe your problem or question..."
              name="problem"
              id="problem"
              className="w-full h-[25vh] border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300 resize-none"
              value={values.problem}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Submit Button */}

          <div className="flex items-center justify-end mt-5  gap-5">
            {/* btn */}
            <button
              onClick={onClose}
              className="bg-zinc-100 hover:bg-zinc-200 px-3 py-2.5 text-gray-700 rounded cursor-pointer"
            >
              Cancel
            </button>

            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-2.5 text-white rounded cursor-pointer">
              {mode && mode === "update" ? "Update Appointment" : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
