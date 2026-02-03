import { FaClock, FaHospital, FaCamera } from "react-icons/fa";
import { NotFound } from "../../components/basic/NotFound";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProfile } from "../../hooks/doctor/useProfile";
import { BsAward, BsKeyFill, BsPhone } from "react-icons/bs";
import { DoctorProfileSkeletonLoader } from "../../components/UI/loaders/skeleton/DoctorProfileSkeltonLoader";
import { MdVerifiedUser } from "react-icons/md";
import { GoShield } from "react-icons/go";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

export function DoctorProfilePage() {
  const navigate = useNavigate();
  const { loading, fetchProfile } = useProfile();
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const loadProfile = async () => {
      const response = await fetchProfile();

      if (response.success) {
        setProfile(response.data);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("department", response.data.departmentName);
      }
    };
    loadProfile();
  }, []);

  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const h = Number(hour);
    const suffix = h >= 12 ? "PM" : "AM";
    const formattedHour = h % 12 || 12;
    return `${formattedHour}:${minute} ${suffix}`;
  };

  return (
    <>
      <div className="min-h-screen">
        {loading ? (
          <DoctorProfileSkeletonLoader />
        ) : profile.length === 0 ? (
          <>
            <NotFound
              message="Profile Not Created"
              description="You haven’t created your profile yet. To start using all features, please create your profile now."
              actionText="Create Profile"
              theme="light" // or "dark"
              onClick={() => {
                navigate("create");
              }}
            />
          </>
        ) : (
          <>
            <div className="min-h-screen">
              <div className="max-w-full mx-auto">
                {/*  Profile Header */}
                <div className="bg-white shadow rounded p-8 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-blue-100 to-purple-100 rounded-full -mr-32 -mt-32 opacity-50"></div>

                  <div className="relative flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/*  Profile Image */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-30"></div>
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
                        alt="Doctor"
                        className="relative w-22 h-22 rounded-full border-4 border-white  object-cover"
                      />
                      {/* Camera Button */}
                      <button
                        type="button"
                        className="absolute -bottom-1 -right-1 bg-green-500 w-9 h-9 rounded-full border-4 border-white flex items-center justify-center shadow-md hover:bg-green-600 transition"
                      >
                        <FaCamera className="text-white text-sm" />
                      </button>
                    </div>

                    {/*  Basic Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex flex-col gap-1">
                          {/* Name + Verified */}
                          <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            Dr. {profile?.doctorName}
                            {profile.isVerified ? (
                              <IoShieldCheckmarkSharp
                                className="text-green-700 text-xl"
                                title="Verified Doctor"
                              />
                            ) : (
                              <GoShield
                                className="text-red-500 text-xl"
                                title="Not Verified Doctor"
                              />
                            )}
                          </h1>

                          {/* Edit profile */}
                          <button
                            onClick={() =>
                              navigate("update", {
                                state: { profileId: profile.profileId },
                              })
                            }
                            className="text-blue-600"
                          >
                            Edit Profile
                          </button>
                        </div>
                      </div>

                      {/* <div className="mt-4 flex flex-wrap gap-3">
                        <span className="px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-blue-600 text-white font-medium shadow-md">
                          {profile.experience} Years Experience
                        </span>
                        <span className="px-4 py-2 rounded-lg bg-linear-to-r from-green-500 to-green-600 text-white font-medium shadow-md">
                          Verified
                        </span>
                      </div> */}
                    </div>
                  </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="md:col-span-2 space-y-6">
                    {/* About Section */}
                    <div className="bg-white shadow rounded p-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded"></div>
                        About Doctor
                      </h2>
                      <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
                    </div>

                    {/* Education Section */}
                    <div className="bg-white shadow rounded p-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded"></div>
                        Education & Qualifications
                      </h2>
                      <div className="space-y-4">
                        {profile?.education.map((e, i) => (
                          <div
                            key={i}
                            className="flex gap-4 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg hover:shadow-md transition"
                          >
                            <div className="shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {e.degree.slice(0, 2)}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{e.degree}</p>
                              <p className="text-sm text-gray-600">{e.college}</p>
                              <p className="text-xs text-gray-500 mt-1">Passing Year : {e.year}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Working Time */}
                    <div className="bg-white shadow rounded p-6">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded"></div>
                        Working Hours
                      </h2>
                      <div className="space-y-3">
                        {profile?.workingTime?.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
                          >
                            {/* Left side */}
                            <div className="flex items-center gap-3">
                              <FaClock className="w-5 h-5 text-green-600" />
                              <span className="font-semibold text-gray-800">{item.day}</span>
                            </div>

                            {/* Right side */}
                            <div className="text-green-700 font-medium">
                              {item.slots.map((slot, i) => (
                                <span key={i}>
                                  {formatTime(slot.from)} - {formatTime(slot.to)}
                                  {i !== item.slots.length - 1 && ", "}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Sidebar */}
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div className="bg-white shadow rounded p-6 ">
                      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-linear-to-b from-blue-500 to-purple-500 rounded"></div>
                        Profile
                      </h2>

                      <div className="space-y-5">
                        {/* Profile ID */}
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                            <BsKeyFill className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Profile ID</p>
                            <p className="font-semibold text-gray-800">
                              {profile?.profileId || "-"}
                            </p>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                            <BsPhone className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Phone</p>
                            <p className="font-semibold text-gray-800">{profile?.phone || "-"}</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                            <FaHospital className="w-5 h-5 text-purple-600" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Department</p>
                            <p className="font-semibold text-gray-800">
                              {profile?.department || "Not available"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
