import { Heading } from "../UI/Heading";
import { ServiceCard } from "../UI/ServiceCard";
import services from "../../assets/jsonData/services.json";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../UI/Button";
import { FaPlus } from "react-icons/fa";

export const Service = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="services">
        <div className="max-w-[1400px] mx-auto  h-auto mt-5 md:mt-20 md:px-10  ">
          <Heading subHeading={"Our Expertise"} mainHeading={"Services Of"} name={"MediCare"} />

          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-3 md:mt-10 px-1 md:px-5 space-y-2  py-5">
            {/* service card */}

            {services.slice(0, 7).map((service) => {
              return <ServiceCard service={service} key={service.id} />;
            })}

            {/* landing page service CTA */}

            <div className="hidden md:block min-h-[260px] ">
              <NavLink
                to="/services"
                className=" group relative flex items-center justify-center rounded-xl border border-green-200 bg-white min-h-full  transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="
          flex items-center justify-center
          h-[180px] w-[180px]
          rounded-lg
          border-2 border-dashed border-green-500
          transition group-hover:scale-105
        "
                >
                  <FaPlus className="text-6xl text-green-600 transition-transform group-hover:rotate-90" />
                </div>

                {/* Overlay */}
                <div
                  className="
          absolute inset-0 flex flex-col items-center justify-center
          rounded-xl
          bg-green-700/90 text-white
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
                >
                  <h3 className="text-xl font-semibold mb-2">Explore All Services</h3>
                  <p className="text-sm opacity-90">View all medical departments & treatments</p>
                </div>
              </NavLink>
            </div>

            {/* small screen explore service button */}

            <div className="w-full flex items-center justify-center  md:hidden ">
              <Button
                type="button"
                onClick={() => navigate("/services")}
                label={"Explore Services"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
