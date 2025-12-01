import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="w-full bg-zinc-100  mt-10">
        <section className="max-w-[1400px] mx-auto  py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="h-12" />
              <h1 className="text-4xl font-bold text-orange-500">
                M<span className="text-3xl font-semibold text-zinc-600">edi</span>
                C<span className="text-3xl font-semibold text-zinc-600">are</span>
              </h1>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              We provide advanced medical services and facilities with expert doctors.
              Your health and care is our priority.
            </p>
          </div>

          {/* Department */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 underline decoration-orange-500 underline-offset-4">Departments</h2>
            <ul className="space-y-2 text-zinc-700">
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Cardiology</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Neurology</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Dental Care</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Orthopedics</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Radiology</NavLink></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 underline decoration-orange-500 underline-offset-4">Quick Links</h2>
            <ul className="space-y-2 text-zinc-700">
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Privacy Policy</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Refund Policy</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Cookie Policy</NavLink></li>
              <li><NavLink to="/" className="hover:text-orange-500 duration-200">Terms & Conditions</NavLink></li>
            </ul>
          </div>

          {/* Contact + Social Icons */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 underline decoration-orange-500 underline-offset-4">Get In Touch</h2>
            <ul className="space-y-1 text-zinc-700">
              <li className="text-xl font-semibold">support@medicare.in</li>
              <li className="text-xl font-semibold">+91 9876543210</li>
            </ul>

            {/* Icons */}
            <div className="flex items-center gap-4 mt-4 text-2xl">
              <a href="#" className="p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition duration-300">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="p-2 rounded-full shadow hover:bg-orange-500 hover:text-white transition duration-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        </section>

        <div className="w-full text-center py-4 bg-zinc-200 text-sm text-zinc-600">
          © 2025 MediCare Hospital. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
