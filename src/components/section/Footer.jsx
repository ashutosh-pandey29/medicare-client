import logo from "../../assets/logo/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaWhatsapp, FaInstagramSquare } from "react-icons/fa";
import { IconButton } from "../UI/IconButton";

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
                M<span className="text-3xl font-semibold text-zinc-600">edi</span>C
                <span className="text-3xl font-semibold text-zinc-600">are</span>
              </h1>
            </div>

            <p className="text-sm text-zinc-600 leading-relaxed">
              We provide advanced medical services and facilities with expert doctors. Your health
              and care is our priority.
            </p>

            
              
            {/* footer social icon */}
            <div className="flex gap-2">
                          <IconButton
                            href={"#"}
                            Icon={FaFacebookF}
                            variant="outline"
                            customClass={"hover:bg-blue-600 hover:text-white "}
                          />
                          <IconButton
                            href={"#"}
                            Icon={FaInstagram}
                            variant="outline"
                            customClass={"hover:from-purple-600 hover:to-pink-600 hover:text-white"}
                          />
                          <IconButton
                            href={"#"}
                            Icon={FaWhatsapp}
                            variant="outline"
                            customClass={"hover:bg-green-600 hover:text-white"}
                          />
                        </div>
          </div>

          {/* Department */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 underline decoration-orange-500 underline-offset-4">
              Patient Services
            </h2>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Book Appointment
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Find a Doctor
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Emergency Services
                </NavLink>
              </li>

              <li className="text-green-600 font-semibold mt-2">24×7 Emergency Support</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 underline decoration-orange-500 underline-offset-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-zinc-700">
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Cookie Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="hover:text-orange-500 duration-200">
                  Refund Policy
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact + Social Icons */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 underline decoration-orange-500 underline-offset-4">
              Contact{" "}
            </h2>
            <ul className="space-y-2 text-zinc-700">
              <li>
                Email :{" "}
                <NavLink
                  to="mailto:support@medicare.com?subject=support%20Request&body=Hello%20MediCare%20Support%20Team,"
                  className="hover:text-orange-500 duration-200"
                >
                  support@medicare.com
                </NavLink>
              </li>
              <li>
                Phone :{" "}
                <NavLink to="tel:+1200-321-3783" className="hover:text-orange-500 duration-200">
                  1200-321-3783
                </NavLink>
              </li>
              <li>
                Emergency :{" "}
                <NavLink to="tel:+1200-1234-8932" className="hover:text-orange-500 duration-200">
                  1200-1234-8932
                </NavLink>
              </li>
            </ul>
          </div>
        </section>

        <div className="w-full text-center py-4 bg-zinc-200 text-sm text-zinc-600">
          © 2025 MediCare Hospital. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};
