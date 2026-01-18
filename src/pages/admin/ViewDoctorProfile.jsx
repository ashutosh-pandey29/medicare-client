import React, { useEffect, useState } from "react";
import {
  FaCheck,
  FaTimes,
  FaArrowLeft,
  FaShieldAlt,
  FaShieldVirus,
  FaCalendarAlt,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaBuilding,
  FaLuggageCart,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useDoctor } from "../../hooks/admin/useDoctor";
import { AdminDoctorProfileSkeletonLoader } from "../../components/UI/loaders/skeleton/AdminDoctorProfileSkeletonLoader";
import { FaSuitcase } from "react-icons/fa6";
import { toast } from "react-toastify";
import { BiLoader } from "react-icons/bi";

/* ------------------ Reusable ------------------ */
const InfoRow = ({ label, value, icon: Icon }) => (
  <div className="flex items-center py-3 border-b border-gray-700 last:border-0">
    <div className="flex items-center gap-2 w-44 text-sm text-gray-400">
      <Icon className="text-gray-500" />
      {label}
    </div>
    <div className="text-sm text-gray-100">{value}</div>
  </div>
);

const SectionTitle = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className="text-emerald-400" />
    <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
  </div>
);

/* ------------------ Main ------------------ */
export const ViewDoctorProfile = () => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const [profile, setProfile] = useState([]);

  const { loading, fetchDoctorById, verifyDoctorProfile } = useDoctor();

  const loadDoctorProfile = async () => {
    const response = await fetchDoctorById(profileId);

    console.log(response);
    if (response.success) {
      setProfile(response.data);
    }
  };

  useEffect(() => {
    loadDoctorProfile();
  }, []);

  const handleVerification = async () => {
    const response = await verifyDoctorProfile(profileId);
    if (response.success) {
      toast.success(response.message || "Profile verified");
      loadDoctorProfile();
    }
  };

  if (loading || !profile) {
    return <AdminDoctorProfileSkeletonLoader />;
  }

  return (
    <div className="min-h-screen bg-gray-900 rounded-xl p-5">
      {/* Back */}
      <button
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft /> Back to Doctors
      </button>

      <div className="bg-gray-800 border border-gray-800 rounded-xl shadow-lg">
        {/* Header */}
        <div className="px-4 py-6 border-b border-gray-700 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">{profile.doctorName}</h1>
            <p className="text-sm text-gray-400">Profile ID: {profile.profileId}</p>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs flex items-center gap-1
        ${
          profile.isVerified ? "bg-emerald-500/30 text-emerald-100" : "bg-red-500/20 text-red-400"
        }`}
          >
            {profile.isVerified ? <FaShieldAlt /> : <FaShieldVirus />}
            {profile.isVerified ? "Verified" : "Not Verified"}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 grid md:grid-cols-2 gap-8">
          {/* Left */}
          <div>
            <SectionTitle title="Personal Information" icon={FaUser} />

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <InfoRow
                label="Gender"
                value={profile.gender === "F" ? "Female" : "Male"}
                icon={FaUser}
              />
              <InfoRow label="Phone" value={profile.phone} icon={FaPhoneAlt} />
              <InfoRow label="email" value={profile.email} icon={FaEnvelope} />
              <InfoRow label="Department" value={profile.department} icon={FaBuilding} />
              <InfoRow label="Experience" value={`${profile.experience}+ year`} icon={FaSuitcase} />
            </div>

            <div className="mt-6">
              <SectionTitle title="Biography" icon={FaBriefcase} />
              <div className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm">
                {profile.bio || "No bio available"}
              </div>
            </div>

            <div className="mt-6">
              <SectionTitle title="Education" icon={FaGraduationCap} />
              {profile?.education?.map((edu) => (
                <div
                  key={edu._id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 mb-3"
                >
                  <p className="text-white font-medium">{edu.degree}</p>
                  <p className="text-gray-400 text-sm">{edu.college}</p>
                  <p className="text-gray-500 text-xs">Year: {edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <SectionTitle title="Working Hours" icon={FaCalendarAlt} />

            {profile?.workingTime?.map((day) => (
              <div key={day._id} className="mb-4 bg-gray-900 rounded-lg p-4">
                <div className="flex justify-between text-gray-200 mb-2">
                  <span className="font-medium">{day.day}</span>
                  <FaClock className="text-gray-500" />
                </div>

                {day.slots?.map((slot) => (
                  <div key={slot._id} className="text-sm text-gray-400 pl-2">
                    {slot.from} → {slot.to}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="px-8 py-6 border-t border-gray-800 flex justify-end">
          <button
            disabled={profile.isVerified || loading}
            onClick={handleVerification}
            className={`px-6 py-2 rounded font-medium transition
    ${
      profile.isVerified
        ? "bg-gray-600 text-gray-300 cursor-not-allowed"
        : "bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white"
    }
  `}
          >
            {profile.isVerified ? "Already Verified" : "Verify Profile"}

            {loading && <BiLoader className="animate-spin text-xl text-white" />}
          </button>
        </div>
      </div>
    </div>
  );
};
