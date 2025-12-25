import { NavLink } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import logo from "../../assets/logo/logo.png";
import { useJwtDecode } from "../../hooks/custom/useJwtDecode";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const { decodedUser } = useJwtDecode();

  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setToggleMenu(false);

  const linkClass = ({ isActive }) =>
    `text-lg hover:text-blue-400 ${isActive ? "text-blue-600 font-semibold" : "text-zinc-700"}`;

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 z-50 w-full h-[10vh] transition-all ${
          isScroll ? "backdrop-blur-md bg-white/50 shadow-sm" : "bg-white"
        }`}
      >
        <section className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4">
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-10" />
            <NavLink to="/" onClick={closeMenu}>
              <span className="text-4xl font-bold text-orange-500">M</span>
              <span className="text-3xl font-semibold text-zinc-500">edi</span>
              <span className="text-4xl font-bold text-orange-500">C</span>
              <span className="text-3xl font-semibold text-zinc-500">are</span>
            </NavLink>
          </div>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex gap-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={linkClass}>
              Services
            </NavLink>
            <NavLink to="/doctors" className={linkClass}>
              Doctors
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </ul>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">
            {decodedUser ? (
              <NavLink
                to={`/dashboard/${decodedUser?.role}`}
                className="bg-zinc-100 text-gray-700 px-4 py-2 rounded hover:bg-zinc-200"
              >
                {decodedUser?.username}
              </NavLink>
            ) : (
              <NavLink
                to="/auth/login"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setToggleMenu(!toggleMenu)}
            className="md:hidden bg-zinc-200 text-2xl rounded-lg p-2"
          >
            {toggleMenu ? <RxCross1 /> : <GrMenu />}
          </button>
        </section>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-[10vh] right-0 z-40 w-full min-h-screen bg-white transition-transform duration-300 md:hidden ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 p-6">
          <NavLink to="/" onClick={closeMenu} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu} className={linkClass}>
            About
          </NavLink>
          <NavLink to="/services" onClick={closeMenu} className={linkClass}>
            Services
          </NavLink>
          <NavLink to="/doctors" onClick={closeMenu} className={linkClass}>
            Doctors
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={linkClass}>
            Contact
          </NavLink>
        </ul>

        <div className="flex flex-col gap-4 px-6">
          <NavLink
            to="/appointment"
            onClick={closeMenu}
            className="bg-orange-500 text-white py-3 rounded-lg text-center hover:bg-orange-600"
          >
            Book Appointment
          </NavLink>

         
          {decodedUser ? (
              <NavLink
                to={`/dashboard/${decodedUser?.role}`}
                className="bg-zinc-100 text-gray-700 px-4 py-2 rounded hover:bg-zinc-200"
              >
                {decodedUser?.username}
              </NavLink>
            ) : (
              <NavLink
                to="/auth/login"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Login
              </NavLink>
            )}
        </div>
      </div>
    </>
  );
};
