import { Heading } from "../UI/Heading";
import { ServiceCard } from "../UI/ServiceCard";
import services from "../../assets/jsonData/services.json";
import { NavLink } from "react-router-dom";

export const Service = () => {
  return (
    <>
      <section className="services">
        <div className="max-w-[1400px] mx-auto  h-auto  mt-20  ">
          <Heading subHeading={"Our Expertise"} mainHeading={"Services Of"} name={"MediCare"} />

          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-20 px-5 space-y-2  py-5">
            {/* service card */}

            {services.slice(0, 6).map((service) => {
              return <ServiceCard service={service} key={service.id} />;
            })}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-10 mb-10">
            <NavLink to={"services"} className="bg-zinc-100 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition">
              View More Services
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
