import { Heading } from "../UI/Heading";
import appointmentImage from "../../assets/hospitals/appointment.png";
import { OptimizedImage } from "../common/public/OptimizedImage";
import { Button } from "../UI/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDepartment } from "../../hooks/department/useDepartment";
import { useProfile } from "../../hooks/doctor/useProfile";
import { useAppointment } from "../../hooks/appointment/useAppointment";
import { useForm } from "../../hooks/custom/useForm";
import { appointmentSchema } from "../../utils/validationSchema";
import { useAuth } from "../../context/AuthContext";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";
export const Appointment = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const { fetchPublicDepartment } = useDepartment();
  const { fetchDoctorByDepartmentId } = useProfile();
  const { loading, newAppointment } = useAppointment();
  const { decodedUser } = useJwtDecode();

  console.log("decodedUser", decodedUser);

  const { values, setValues, errors, setErrors, handleChange, resetForm, validateOnSubmit } =
    useForm(
      {
        departmentId: "",
        doctorId: "",
        appointmentDate: "",
        name: "",
        phone: "",
        problem: "",
      },
      appointmentSchema
    );

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

    const formErrors = validateOnSubmit(values);
    if (Object.keys(formErrors).length > 0) return;

    const response = await newAppointment(values, setErrors);

    if (response.success) {
      toast.success(response.message || "Appointment scheduled.");
      // move to payment page
      navigate(`/appointment/confirmation?appointmentId=${response.data?.appointmentId}`);
    }
  };

  // check user logged in or not

  return (
    <>
      <section className="contact bg-[#e6e8ed] py-1">
        <Heading subHeading="Book Your Visit" mainHeading="Appointment at" name="MediCare" />


        <div className="max-w-[1400px] mx-auto  lg:px-5">
          {/* Heading */}

          {/* Content */}
          <div className="flex flex-col justify-center md:flex-row items-start md:items-center gap-10 mt-10">
            {/* Side Image */}
            <div className="hidden md:block">
              <OptimizedImage src={appointmentImage} alt="Appointment" className="w-full h-auto " />
            </div>

            {/* Form */}

            <div className="form  md:w-1/2 bg-gray-50 p-1 md:p-4 rounded   ">
             
             <div className="p-3">
               <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-2">
                Schedule an Appointment
              </h2>

              <p className="text-slate-600 mb-3 ">
                Fill out the form below and our team will contact you to confirm your appointment.
              </p>
             </div>

              <div className="bg-zinc-200 w-full h-px"></div>

              <form className="space-y-1 md:p-3" onSubmit={handleSubmit}>
                {/* Department & Service */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    {errors.departmentId && (
                      <span className="text-sm text-red-700">{errors.departmentId}</span>
                    )}
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
                    {errors.doctorId && (
                      <span className="text-sm text-red-700">{errors.doctorId}</span>
                    )}
                  </div>

                  
                </div>

                {/* Appointment Date */}
                  <div className="flex flex-col mt-3">
                    <input
                      type="date"
                      name="appointmentDate"
                      id="appointmentDate"
                      className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                      onChange={handleChange}
                      value={values.appointmentDate}
                    />
                    {errors.appointmentDate && (
                      <span className="text-sm text-red-700">{errors.appointmentDate}</span>
                    )}
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
                    {errors.name && <span className="text-sm text-red-700">{errors.name}</span>}
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
                    {errors.phone && <span className="text-sm text-red-700">{errors.phone}</span>}
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
                  {errors.problem && <span className="text-sm text-red-700">{errors.problem}</span>}
                </div>

                {/* Submit Button */}

                <div className="flex items-center justify-end mt-5  gap-5">
                  <div className="flex flex-col items-end mt-5 gap-2">
                    <Button label="Book Appointment" variant="primary" disabled={!decodedUser} />

                    {!decodedUser && (
                      <p className="text-red-600 text-xs">* Please login to book an appointment</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
