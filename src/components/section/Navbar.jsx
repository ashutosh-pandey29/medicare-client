import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 10) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`p-2 md:p-0 w-full h-[10vh]  fixed top-0 z-50 left-0   ${
          isScroll ? "backdrop-blur-md bg-white/5 drop-shadow-sm" : "bg-white"
        }`}
      >
        <section className="max-w-[1400px] mx-auto  h-full flex justify-between  items-center py-3">
          <div className="brand flex items-center ">
            <img src={logo} alt="logo" className="h-10 w-10" />

            <NavLink to="/">
              <span className="text-4xl font-bold text-orange-500">M</span>
              <span className="text-3xl font-semibold text-zinc-500">edi</span>
              <span className="text-4xl font-bold text-orange-500">C</span>
              <span className="text-3xl font-semibold text-zinc-500">are</span>
            </NavLink>
          </div>

          <div className="nav-links md:block hidden">
            <ul className="flex gap-5">
              <li className="text-lg text-zinc-700 hover:text-blue-400 ">
                <NavLink
                  to="/"
                  onClick={() => setActiveLink("home")}
                  className={`${activeLink === "home" ? "text-blue-600" : ""}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="text-lg text-zinc-700 hover:text-blue-400 ">
                <NavLink
                  to="about"
                  onClick={() => setActiveLink("about")}
                  className={`${activeLink === "about" ? "text-blue-600" : ""}`}
                >
                  About
                </NavLink>
              </li>
              <li className="text-lg text-zinc-700 hover:text-blue-400 ">
                <NavLink
                  to="services"
                  onClick={() => setActiveLink("services")}
                  className={`${activeLink === "services" ? "text-blue-600" : ""}`}
                >
                  Services
                </NavLink>
              </li>
              <li className="text-lg text-zinc-700 hover:text-blue-400 ">
                <NavLink
                  to="doctors"
                  onClick={() => setActiveLink("doctors")}
                  className={`${activeLink === "doctors" ? "text-blue-600" : ""}`}
                >
                  Doctors
                </NavLink>
              </li>
              <li className="text-lg text-zinc-700 hover:text-blue-400 ">
                <NavLink
                  to="contact"
                  onClick={() => setActiveLink("contact")}
                  className={`${activeLink === "contact" ? "text-blue-600" : ""}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="nav-button flex items-center gap-2">
            {/* <NavLink
              to={"/appointment"}
              className=" text-center cursor-pointer text-lg bg-orange-500 py-2 px-3 rounded text-zinc-50 hover:bg-orange-600 hidden md:block"
            >
              Book Appointment
            </NavLink> */}

            <NavLink
              to={"auth"}
              className="hidden md:block cursor-pointer text-lg bg-green-500 py-2 px-3 rounded text-zinc-50 hover:bg-green-600"
            >
              Login
            </NavLink>

            {/* menu button */}
            <button
              className="md:hidden bg-zinc-200 text-2xl rounded-lg py-2 px-3 cursor-pointer "
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              {toggleMenu ? <RxCross1 /> : <GrMenu />}
            </button>
          </div>
        </section>
      </nav>

      {/* mobile-menu */}

      <div
        className={`z-50 md:hidden w-full bg-white  min-h-screen fixed top-[10vh]  right-0 transition-all duration-300  ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }
      

      `}
      >
        <div className="nav-links mt-5">
          <ul className="flex gap-5 flex-col px-3">
            <li className="text-lg text-zinc-700 hover:text-blue-400 ">
              <NavLink
                to="/"
                onClick={() => setActiveLink("home")}
                className={`${activeLink === "home" ? "text-blue-600" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li className="text-lg text-zinc-700 hover:text-blue-400 ">
              <NavLink
                to="/"
                onClick={() => setActiveLink("about")}
                className={`${activeLink === "about" ? "text-blue-600" : ""}`}
              >
                About
              </NavLink>
            </li>
            <li className="text-lg text-zinc-700 hover:text-blue-400 ">
              <NavLink
                to="/"
                onClick={() => setActiveLink("services")}
                className={`${activeLink === "services" ? "text-blue-600" : ""}`}
              >
                Services
              </NavLink>
            </li>
            <li className="text-lg text-zinc-700 hover:text-blue-400 ">
              <NavLink
                to="/"
                onClick={() => setActiveLink("doctor")}
                className={`${activeLink === "doctor" ? "text-blue-600" : ""}`}
              >
                Doctors
              </NavLink>
            </li>
            <li className="text-lg text-zinc-700 hover:text-blue-400 ">
              <NavLink
                to="/contact"
                onClick={() => setActiveLink("contact")}
                className={`${activeLink === "contact" ? "text-blue-600" : ""}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="py-5 px-3 flex flex-col text-center gap-5">
          <NavLink
            to={"/appointment"}
            className="cursor-pointer text-lg bg-orange-500 py-3 px-5 rounded-lg text-zinc-50 hover:bg-orange-600"
          >
            Book Appointment
          </NavLink>

          <NavLink
            to={"auth"}
            className="  md:block cursor-pointer text-lg bg-green-500 py-3 px-5 rounded-lg text-zinc-50 hover:bg-green-600 "
          >
            Login
          </NavLink>
        </div>
      </div>
    </>
  );
};
