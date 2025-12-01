import { NavLink } from "react-router-dom";
import heroBackground from "../../assets/hospitals/hero-banner.png";

export const HeroSection = () => {
  return (
    <>
      <section
        className="w-full h-fit  md:h-[80vh] lg:h-screen bg-cover bg-center bg-no-repeat mt-[10vh] flex items-center justify-start"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        {/* Dark Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Content */}
        <div className=" w-full  md:max-w-[1200px] px-5 py-10  md:px-20 text-white flex flex-col  gap-4">
          
          {/* Tagline */}
          <span className="bg-white/40 border border-white/40 backdrop-blur-md px-4 py-2 rounded-full w-fit text-sm md:text-base font-medium tracking-wide">
            ✨ Your Health, Our Priority
          </span>

          {/* Heading */}
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight ">
            Caring For You, <br />
            <span className="text-slate-800">Every Step of the Way</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-sm md:text-xl tracking-wide">
            At MediCare, we believe every patient deserves personal attention, trusted treatment,
            and a healthier tomorrow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-3">
           
              <NavLink to={"/appointment"} className=" text-center md:block cursor-pointer text-lg bg-orange-500 py-3 px-5 rounded-lg text-zinc-50 hover:bg-orange-600">
              Book Appointment
            </NavLink>


            <NavLink to={"contact"} className=" text-center  py-3 px-5  border border-white rounded-lg font-semibold hover:bg-white hover:text-black duration-300">
              Contact Us
            </NavLink>
          </div>
        </div>
      </section>


      
    </>
  );
};
