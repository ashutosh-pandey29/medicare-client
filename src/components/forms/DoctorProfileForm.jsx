import { FaArrowsRotate } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToken } from "../../hooks/custom/useToken";
import { toast } from "react-toastify";
import { useForm } from "../../hooks/custom/useForm";
import { useFetch } from "../../hooks/custom/useFetch";
import { Button } from "../UI/Button";
import { LuLoaderCircle } from "react-icons/lu";
export const DoctorProfileForm = () => {
  const [loading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const token = useToken();
  const navigate = useNavigate();
  const { doctorId } = useParams();
  const [department, setDepartment] = useState([]);

  // check registered member  verified  or not
  useEffect(() => {
    const checkVerification = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/account/get/${doctorId}`, {
          method: "GET",
          headers: {
            Authorization: token ? `Bearer ${token}` : "",
          },
        });

        const jsonResponse = await response.json();

        if (!response.ok) {
          throw new Error(jsonResponse.message || "Failed to fetch account info.");
        }

        // Check if user exists and is verified
        if (jsonResponse.status && jsonResponse.data) {
          if (!jsonResponse.data[0].isVerified) {
            setIsVerified(true); // user not verified
          } else {
            setIsVerified(false);
          }
        } else {
          throw new Error(jsonResponse.message || "Failed to fetch account info.");
        }
      } catch (err) {
        console.log(err);
        toast.error(err.message);
      }
    };

    checkVerification();
  }, []);

  // get department list
  const { data } = useFetch(`${import.meta.env.VITE_API_URL}/department/get`);
  useEffect(() => {
    if (data && data.data) {
      setDepartment(data.data);
    }
  }, [data]);

  /***
   * ===================
   * !handle profile
   * ===================
   */
  // initial value
  const initialValue = {
    userId: doctorId,
    doctorName: "",
    phone: "",
    departmentId: "",
    experience: "",
    bio: "",
    education: [{ degree: "", year: "", college: "" }],
    workingTime: [],
    isApproved: true,
  };

  // add more education field
  const addEducation = () => {
    setValue((prev) => ({
      ...prev,
      education: [...prev.education, { degree: "", year: "", college: "" }],
    }));
  };

  /// handle education value
  const handleEducationChange = (index, e) => {
    const { name, value: inputValue } = e.target;

    setValue((prev) => {
      const updatedEducation = [...prev.education];
      updatedEducation[index] = {
        ...updatedEducation[index],
        [name]: inputValue,
      };

      return {
        ...prev,
        education: updatedEducation,
      };
    });
  };

  // add more slot field
  // const addSlot = () => {
  //   setValue((prev) => ({
  //     ...prev,
  //     workingTime: [
  //       {
  //         ...prev.workingTime[0],
  //         slots: [...prev.workingTime[0].slots, { from: "", to: "" }],
  //       },
  //     ],
  //   }));
  // };

  const addSlot = (dayIndex) => {
    setValue((prev) => {
      const updatedWorkingTime = [...prev.workingTime];

      updatedWorkingTime[dayIndex] = {
        ...updatedWorkingTime[dayIndex],
        slots: [...updatedWorkingTime[dayIndex].slots, { from: "", to: "" }],
      };

      return {
        ...prev,
        workingTime: updatedWorkingTime,
      };
    });
  };

  // handle slot value

  const handleSlot = (dIndex, sIndex, e) => {
    const { name, value } = e.target;
    setValue((prev) => {
      const updatedWorkingTime = [...prev.workingTime];

      const updatedSlots = [...updatedWorkingTime[dIndex].slots];
      updatedSlots[sIndex] = {
        ...updatedSlots[sIndex],
        [name]: value,
      };

      updatedWorkingTime[dIndex] = {
        ...updatedWorkingTime[dIndex],
        slots: updatedSlots,
      };

      return {
        ...prev,
        workingTime: updatedWorkingTime,
      };
    });
  };

  // handling working days

  const workingDays = {
    fullWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    weekend: ["Sat", "Sun"],
  };

  const handleWorkingDays = (e) => {
    const selected = e.target.value;
    if (!selected) return;
    const days = workingDays[selected];
    setValue((prev) => ({
      ...prev,
      workingTime: days.map((day) => ({
        day,
        slots: [{ from: "", to: "" }],
      })),
    }));
  };

  // handle form submission
  const onsubmit = async (value) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/doctor/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(value),
      });

      const jsonResponse = await response.json();

      if (!response.ok) {
        throw new Error(jsonResponse?.message || "Something went wrong");
      }

      if (jsonResponse.status) {
        // console.log("Success:", jsonResponse);
        toast.success(jsonResponse.message || "Doctor added successfully");
        navigate(`../profile/${doctorId}`);
      } else {
        throw new Error(jsonResponse?.message || "Something went wrong");
      }
    } catch (err) {
      // console.error("Err:", err.message);
      toast.error(err.message || "Server error");
    }
  };

  const { value, setValue, errors, handleChange, handleSubmit } = useForm(
    initialValue,
    null,
    onsubmit
  );

  if (isVerified) {
    return (
      <>
        <div className="p-3 border-l-4  text-center border-l-amber-600 bg-amber-100 rounded-xs flex items-center ">
          <h1 className="text-base text-amber-600">
            This user has not verified their email. Please ask them to verify before proceeding.
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      {/* ---------------- professional and personal   Info ---------------- */}
      <div className="bg-white p-5 shadow rounded mb-8 mt-5">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-gray-600">Name:</label>
              <input
                type="text"
                className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                name="doctorName"
                id="doctorName"
                value={value.doctorName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Phone:</label>
              <input
                type="text"
                className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                name="phone"
                id="phone"
                value={value.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Date Of Birth:</label>
              <input
                type="text"
                className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                name="dob"
                id="dob"
                value={value.dob}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Address:</label>
              <input
                type="text"
                className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                name="address"
                id="address"
                value={value.address}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Department:</label>
              <select
                className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                name="departmentId"
                id="departmentId"
                onChange={handleChange}
              >
                <option>Select Department</option>
                {department.length > 0 &&
                  department.map((d) => (
                    <option key={d._id} value={d._id}>
                      {d.departmentName}
                    </option>
                  ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-600">Experience(Year):</label>
              <input
                type="text"
                placeholder="12"
                className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                name="experience"
                id="experience"
                value={value.experience}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Education */}
          <div className="mt-5">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-gray-600">Education</label>
            </div>

            {value.education.map((edu, index) => (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-1" key={index}>
                <input
                  name="degree"
                  id="degree"
                  placeholder="Degree"
                  value={edu.degree}
                  className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <input
                  placeholder="Year"
                  name="year"
                  id="year"
                  value={edu.year}
                  className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <input
                  name="college"
                  id="college"
                  placeholder="College"
                  value={edu.college}
                  className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
            ))}

            <button className="text-blue-700 cursor-pointer" onClick={addEducation}>
              +add more
            </button>
          </div>

          {/* Working Days */}
          <div className="mt-5">
            <label className="text-sm text-gray-600">Working Days:</label>
            <select
              className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
              name="day"
              id="day"
              onChange={handleWorkingDays}
            >
              <option value={""}>Select Working Days</option>
              <option value={"fullWeek"}>Full Week</option>
              <option value={"weekdays"}>Weekdays</option>
              <option value={"weekend"}>Weekend</option>
            </select>
          </div>

          {/* Slot Time */}
          {/* day wise slot render  */}
          <div className="mt-5">
            {value.workingTime.map((dayItem, dayIndex) => (
              <div key={dayIndex} className="mt-3">
                {/* <h4 className="font-semibold text-sm mb-2">{dayItem.day}</h4> */}
                <label className="text-sm text-gray-600">Slot Timing: ({dayItem.day})</label>

                {dayItem.slots.map((slot, slotIndex) => (
                  <div className="flex items-center gap-2 mt-2" key={slotIndex}>
                    <input
                      type="time"
                      name="from"
                      id="from"
                      className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                      value={slot.from}
                      onChange={(e) => handleSlot(dayIndex, slotIndex, e)}
                    />

                    <span>to</span>

                    <input
                      type="time"
                      name="to"
                      id="to"
                      className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
                      value={slot.to}
                      onChange={(e) => handleSlot(dayIndex, slotIndex, e)}
                    />
                  </div>
                ))}

                <button
                  type="button"
                  className="text-blue-700 mt-2"
                  onClick={() => addSlot(dayIndex)}
                >
                  + add slot
                </button>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="mt-5">
            <label className="text-sm text-gray-600">Bio:</label>
            <textarea
              className="h-11 w-full mt-2 px-3 rounded-md border border-zinc-300
        focus:outline-none focus:ring-2 focus:ring-green-500/40
        focus:border-green-500 transition"
              name="bio"
              id="bio"
              value={value.bio}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="text-right mt-5">
            <Button
              type="submit"
              disabled={loading}
              label={
                loading ? (
                  <>
                    <div className="flex items-center justify-center ">
                      <LuLoaderCircle className="animate-spin w-6 h-6 " />
                      Registering...
                    </div>
                  </>
                ) : (
                  "Create Profile"
                )
              }
            />
          </div>
        </form>
      </div>
    </>
  );
};
