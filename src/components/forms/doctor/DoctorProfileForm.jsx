import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../UI/Button";
import { useForm } from "../../../hooks/custom/useForm";
import { FiFileText } from "react-icons/fi";
import { BsBriefcase, BsPlus, BsTrash2, BsTrash2Fill } from "react-icons/bs";
import { CiClock1 } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
import { useProfile } from "../../../hooks/doctor/useProfile";
import { doctorProfileValidation } from "../../../utils/schema/doctor.validation";
import { useDepartment } from "../../../hooks/department/useDepartment";

export const DoctorProfileForm = ({ isEdit = false }) => {
  const navigate = useNavigate();
  const { fetchPublicDepartment } = useDepartment();
  const [departments, setDepartments] = useState([]);
  const [profile, setProfile] = useState([]);
  const { loading, fetchProfile, createProfile, updateProfile } = useProfile();

  /* ================= Initial State ================= */

  const initialValue = {
    doctorName: "",
    phone: "",
    gender: "",
    departmentId: "",
    experience: "",
    bio: "",
    education: [{ degree: "", year: "", college: "" }],
    workingTime: [],
    isApproved: false,
  };

  const { values, setValues, errors, setErrors, handleChange } = useForm(
    initialValue,
    doctorProfileValidation
  );

  const { state } = useLocation();

  const profileId = state?.profileId;

  console.log(profileId);

  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetchProfile();

      if (response.success) {
        setValues(response.data);
      }
    };
    loadProfile();
  }, []);

  /* ================= Education ================= */

  const addEducation = () => {
    setValues((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", year: "", college: "" }],
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value: inputValue } = e.target;

    setValues((prev) => {
      const updated = [...prev.education];
      updated[index][name] = inputValue;
      return { ...prev, education: updated };
    });
  };

  /* ================= Working Days ================= */

  const workingDays = {
    fullWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    weekend: ["Sat", "Sun"],
  };

  const handleWorkingDays = (e) => {
    const selected = e.target.value;
    if (!selected) return;

    setValues((prev) => ({
      ...prev,
      workingTime: workingDays[selected].map((day) => ({
        day,
        slots: [{ from: "", to: "" }],
      })),
    }));
  };

  /* ================= Slots ================= */

const addSlot = (dayIndex) => {
  setValues((prev) => ({
    ...prev,
    workingTime: prev.workingTime.map((day, index) =>
      index === dayIndex
        ? {
            ...day,
            slots: [...day.slots, { from: "", to: "" }],
          }
        : day
    ),
  }));
};


  const handleSlotChange = (dIndex, sIndex, e) => {
    const { name, value: inputValue } = e.target;

    setValues((prev) => {
      const updated = [...prev.workingTime];
      updated[dIndex].slots[sIndex][name] = inputValue;
      return { ...prev, workingTime: updated };
    });
  };

  /* ================= Submit ================= */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = isEdit
      ? await updateProfile(values, setErrors)
      : await createProfile(values, setErrors);

    console.log(response);
    console.log("FINAL DATA 👉", values);
  };

  // working day selection
  const getDefaultWorkingDaysOption = () => {
    const days = values.workingTime.map((d) => d.day); // e.g. ["Mon","Tue"]

    if (days.length === 7) return "fullWeek";
    if (days.length === 5 && ["Mon", "Tue", "Wed", "Thu", "Fri"].every((d) => days.includes(d)))
      return "weekdays";
    if (days.length === 2 && ["Sat", "Sun"].every((d) => days.includes(d))) return "weekend";
    return ""; // custom, no predefined option
  };

  // loading department
  useEffect(() => {
    const loadDepartmentDropdown = async () => {
      const response = await fetchPublicDepartment();

      console.log(response);
      if (response.success) {
        setDepartments(response.data);
      }
    };
    loadDepartmentDropdown();
  }, []);

  // Remove the slot
const removeSlot = (dayIndex, slotIndex) => {
  setValues((prev) => ({
    ...prev,
    workingTime: prev.workingTime.map((day, index) =>
      index === dayIndex
        ? {
            ...day,
            slots: day.slots.filter((_, i) => i !== slotIndex),
          }
        : day
    ),
  }));
};



const removeEducation = (index) => {
  setValues((prev) => {
    const updated = [...prev.education];
    
    // Remove the education at index
    updated.splice(index, 1);
    
    return { ...prev, education: updated };
  });
};



  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50 ">
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          {/* Personal Information */}
          <div className="bg-white rounded  p-4 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <CgUser className="text-emerald-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Personal Information</h2>
            </div>

            <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  name="doctorName"
                  placeholder="Dr. John Smith"
                  value={values.doctorName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                {errors?.doctorName && (
                  <span className="text-red-600 text-sm mt-1">{errors.doctorName}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={values.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                {errors?.phone && <span className="text-red-600 text-sm mt-1">{errors.phone}</span>}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Gender</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-emerald-500 transition-colors">
                  <input
                    type="radio"
                    name="gender"
                    value="M"
                    checked={values.gender === "M"}
                    onChange={handleChange}
                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="font-medium text-gray-700">Male</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer bg-gray-50 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-emerald-500 transition-colors">
                  <input
                    type="radio"
                    name="gender"
                    value="F"
                    checked={values.gender === "F"}
                    onChange={handleChange}
                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="font-medium text-gray-700">Female</span>
                </label>
              </div>
              {errors?.gender && <span className="text-red-600 text-sm mt-1">{errors.gender}</span>}
            </div>
          </div>

          {/* Professional Information */}
          <div className="bg-white rounded p-4 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-teal-100 p-2 rounded-lg">
                <BsBriefcase className="text-teal-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Professional Information</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>

                <select
                  name="departmentId"
                  value={values.departmentId}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                >
                  <option value="">Select Department</option>

                  {departments.length === 0 ? (
                    <option value="" disabled>
                      No department loaded
                    </option>
                  ) : (
                    departments.map((d) => (
                      <option key={d.departmentId} value={d._id}>
                        {d.departmentName}
                      </option>
                    ))
                  )}
                </select>

                {errors?.departmentId && (
                  <span className="text-red-600 text-sm mt-1">{errors.departmentId}</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Years of Experience
                </label>
                <input
                  type="number"
                  name="experience"
                  placeholder="5"
                  value={values.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                />
                {errors?.experience && (
                  <span className="text-red-600 text-sm mt-1">{errors.experience}</span>
                )}
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white rounded p-4 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-lg">
                <FaGraduationCap className="text-blue-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Education</h2>
            </div>

            <div className="space-y-4">
              {values.education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border-2 border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <input
                        name="degree"
                        placeholder="MBBS, MD, etc."
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                      {errors?.[`education.${index}.degree`] && (
                        <p className="text-red-600 text-sm">
                          {errors[`education.${index}.degree`]}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        name="year"
                        placeholder="2020"
                        value={edu.year}
                        onChange={(e) => handleEducationChange(index, e)}
                        className="px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                      />
                      {errors?.[`education.${index}.year`] && (
                        <p className="text-red-600 text-sm">{errors[`education.${index}.year`]}</p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <div>
                        <input
                          name="college"
                          placeholder="University / College  Name"
                          value={edu.college}
                          onChange={(e) => handleEducationChange(index, e)}
                          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                        {errors?.[`education.${index}.college`] && (
                          <p className="text-red-600 text-sm">
                            {errors[`education.${index}.college`]}
                          </p>
                        )}
                      </div>

                      {values.education.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeEducation(index)}
                          className="px-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                        >
                          <BsTrash2Fill size={18} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addEducation}
              className="mt-4 flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
            >
              <BsPlus size={18} />
              Add Education
            </button>
          </div>

          {/* Working Schedule */}
          <div className="bg-white rounded p-4 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-lg">
                <CiClock1 className="text-purple-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Working Schedule</h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Working Days
              </label>
              <select
                onChange={handleWorkingDays}
                value={getDefaultWorkingDaysOption()}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors bg-white"
              >
                <option value="">Choose a schedule</option>
                <option value="fullWeek">Full Week (Mon - Sun)</option>
                <option value="weekdays">Weekdays (Mon - Fri)</option>
                <option value="weekend">Weekend (Sat - Sun)</option>
              </select>
              {errors["workingTime"] && (
                <p className="text-red-600 text-sm mt-1">{errors["workingTime"]}</p>
              )}
            </div>

            {values.workingTime.length > 0 && (
              <div className="space-y-4">
                {values.workingTime.map((dayObj, dIndex) => (
                  <div
                    key={dayObj.day}
                    className="bg-linear-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200"
                  >
                    <p className="font-bold text-gray-800 mb-4 text-lg">{dayObj.day}</p>

                    <div className="space-y-3">
                      {dayObj.slots.map((slot, sIndex) => (
                        <div key={sIndex} className="flex gap-3 items-center">
                          <div className="md:w-md">
                            <input
                              type="time"
                              name="from"
                              value={slot.from}
                              onChange={(e) => handleSlotChange(dIndex, sIndex, e)}
                              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 w-full focus:outline-none transition-colors bg-white"
                            />

                            {errors[`workingTime.${dIndex}.slots.${sIndex}.from`] && (
                              <p className="text-red-600 text-sm mt-1">
                                {errors[`workingTime.${dIndex}.slots.${sIndex}.from`]}
                              </p>
                            )}
                          </div>

                          <div className="text-gray-500 font-medium">to</div>

                          <div className="md:w-md">
                            <input
                              type="time"
                              name="to"
                              value={slot.to}
                              onChange={(e) => handleSlotChange(dIndex, sIndex, e)}
                              className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-emerald-500 w-full focus:outline-none transition-colors bg-white"
                            />

                            {errors[`workingTime.${dIndex}.slots.${sIndex}.to`] && (
                              <p className="text-red-600 text-sm mt-1">
                                {errors[`workingTime.${dIndex}.slots.${sIndex}.to`]}
                              </p>
                            )}
                          </div>
                          {dayObj.slots.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSlot(dIndex, sIndex)}
                              className="px-3 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                            >
                              <BsTrash2 size={18} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => addSlot(dIndex)}
                      className="mt-3 flex items-center gap-2 text-emerald-600 font-medium hover:text-emerald-700 transition-colors"
                    >
                      <BsPlus size={16} />
                      Add Time Slot
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bio */}
          <div className="bg-white rounded  p-4 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-orange-100 p-2 rounded-lg">
                <FiFileText className="text-orange-600" size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800">About Doctor</h2>
            </div>

            <textarea
              name="bio"
              rows="6"
              placeholder="Write a brief description about yourself, your specializations, achievements, and approach to patient care..."
              value={values.bio}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
            />
            {errors?.bio && <span className="text-red-600 text-sm mt-1">{errors.bio}</span>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Button
              onClick={handleSubmit}
              label={isEdit ? "Update Profile" : "Submit Profile"}
              variant="primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
