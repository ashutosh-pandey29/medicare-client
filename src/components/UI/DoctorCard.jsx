import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

export const DoctorCard = ({ doctor }) => {
  return (
    <div className="card shadow p-5 rounded-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl h-auto min-h-fit bg-white">
      
      {/* Top: Image + Name + Service */}
      <div className="flex items-center gap-5 mb-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="rounded-full w-20 h-20 outline-2 outline-green-500 outline-offset-2"
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-slate-800">{doctor.name}</span>
          <span className="text-orange-500 font-medium">{doctor.service_name}</span>
        </div>
      </div>

      {/* Middle: Experience + Education */}
      <div className="grid grid-cols-2 gap-4 mb-3 text-gray-600">
        <div className="flex flex-col">
          <span className="font-semibold">{doctor.experience}</span>
          <span className="text-sm">Experience</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold">{doctor.education}</span>
          <span className="text-sm">Education</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-4">{doctor.description}</p>

      {/* Contact + Social Icons */}
      <div className="flex items-center justify-between mt-2">
        {/* Phone */}
        <div className="flex items-center gap-2 text-gray-600">
          <BsFillTelephoneFill className="text-green-500" />
          <span>{doctor.phone || "+91 9876543210"}</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-3 text-lg">
          <a href={doctor.facebook || "#"} className="text-blue-600 hover:text-blue-800">
            <FaFacebookF />
          </a>
          <a href={doctor.instagram || "#"} className="text-pink-500 hover:text-pink-700">
            <FaInstagram />
          </a>
          <a href={doctor.whatsapp || "#"} className="text-green-500 hover:text-green-700">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};
