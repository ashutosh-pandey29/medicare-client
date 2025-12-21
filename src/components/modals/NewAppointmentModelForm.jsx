import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/custom/useFetch";
import { useForm } from "../../hooks/custom/useForm";
import { appointmentSchema } from "../../utils/validationSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LuLoaderCircle } from "react-icons/lu";
import { useToken } from "../../hooks/custom/useToken";

export const NewAppointmentModelForm = () => {
  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [touchedField, setTouchedField] = useState({}); //  tracking user interaction
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const token = useToken();
  const handleBlur = (e) => {
    setTouchedField({ ...touchedField, [e.target.name]: true });
  };
  const initialValue = {
    doctorId: "",
    departmentId: "",
    appointmentDate: "",
    name: "",
    phone: "",
    problem: "",
  };

  const onSubmit = async (value) => {
    setLoading(true);

    // console.log("appointment value :", value);
    try {
      // const token = localStorage.getItem("accessToken");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/appointment/book-appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(value),
      });

      const jsonResponse = await response.json();

      console.log(jsonResponse);

      if (response.ok) {
        if (jsonResponse.status) {
          toast.success(jsonResponse.message);
          navigate(`/appointment/confirmation?appointmentId=${jsonResponse.data.appointmentId}`);
        } else {
          toast.error(jsonResponse.message);
        }
      } else {
        throw new Error();
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const { value, errors, handleChange, handleSubmit } = useForm(
    initialValue,
    appointmentSchema,
    onSubmit
  );

  // fetch department
  useEffect(() => {
    const fetchDepartment = async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/department/get`, {
        method: "GET",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      });
      const d = await response.json();
      setDepartments(d.data);
    };
    fetchDepartment();
  }, []);

  // fetch doctor
  useEffect(() => {
    console.log("dd", departmentId);
    const fetchDoctor = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/doctor/get/department/${departmentId}`,
        {
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        }
      );
      const doc = await response.json();
      console.log(doc);
      setDoctor(doc.data ? doc.data : []);
    };
    fetchDoctor();
  }, [departmentId]);

  const handleDepartmentChange = (e) => {
    console.log(e.target.value);
    handleChange(e);
    setDepartmentId(e.target.value);
  };

  return (
    <>
      <div className="p-1">
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Department & Service */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            {/* Department Select */}
            <div className="flex flex-col">
              <select
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                name="departmentId"
                id="departmentId"
                value={value.departmentId}
                onChange={handleDepartmentChange}
                onBlur={handleBlur}
              >
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept._id} value={dept._id}>
                    {dept.departmentName} — ₹{dept.fees}
                  </option>
                ))}
              </select>
              {touchedField.departmentId && errors.departmentId && (
                <span className="text-red-500 text-sm mt-1">{errors.departmentId}</span>
              )}
            </div>

            {/* Doctor Select */}
            <div className="flex flex-col">
              <select
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                name="doctorId"
                id="doctorId"
                value={value.doctorId}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Doctor</option>
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
              {touchedField.doctorId && errors.doctorId && (
                <span className="text-red-500 text-sm mt-1">{errors.doctorId}</span>
              )}
            </div>

            {/* Appointment Date */}
            <div className="flex flex-col">
              <input
                type="date"
                name="appointmentDate"
                id="appointmentDate"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                value={value.appointmentDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.appointmentDate && errors.appointmentDate && (
                <span className="text-red-500 text-sm mt-1">{errors.appointmentDate}</span>
              )}
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
                value={value.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.name && errors.name && (
                <span className="text-red-500 text-sm mt-1">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                id="phone"
                className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                value={value.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touchedField.phone && errors.phone && (
                <span className="text-red-500 text-sm mt-1">{errors.phone}</span>
              )}
            </div>
          </div>

          {/* Problem/Message */}
          <div className="flex flex-col mt-4">
            <textarea
              placeholder="Please describe your problem or question..."
              name="problem"
              id="problem"
              className="w-full h-[25vh] border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300 resize-none"
              value={value.problem}
              onChange={handleChange}
              onBlur={handleBlur}
            ></textarea>
            {touchedField.problem && errors.problem && (
              <span className="text-red-500 text-sm mt-1">{errors.problem}</span>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-lg shadow transition 
      ${
        loading
          ? "bg-green-300 cursor-not-allowed"
          : "bg-linear-to-r from-green-500 to-green-400 hover:shadow-lg cursor-pointer"
      }`}
          >
            {loading ? (
              <div className="flex items-center gap-2 justify-center text-green-700">
                <LuLoaderCircle className="animate-spin w-6 h-6" />
                Booking...
              </div>
            ) : (
              "Book Appointment"
            )}
          </button>
        </form>
      </div>
    </>
  );
};
