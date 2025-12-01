import pageBanner from "../../assets/hospitals/Banner.png";
import { Heading } from "../../components/UI/Heading";
import { ServiceCard } from "../../components/UI/ServiceCard";
import { FAQ } from "../../components/section/FAQ";
import { Testimonials } from "../../components/section/Testimonials";
import services from "../../assets/jsonData/services.json";

export const Services = () => {
  return (
    <>
      <section className="about-page mt-[10vh]">
        {/* Banner Section */}
        <div
          className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${pageBanner})` }}
        >
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              Healthcare  <span className="text-orange-500">Services</span>
            </h1>
            <p className="text-slate-800 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
                 At MediCare, we provide specialized medical services that cater to every aspect of your health.

            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-[1400px] mx-auto mt-5 md:mt-20 px-4">

          <Heading subHeading={" What We Offer"} mainHeading={" Our Medical   "} name="Services"/>

         <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-20 px-5 space-y-2  py-5">
            {/* service card */}

            {services.map((service) => {
              return <ServiceCard service={service} key={service.id} />;
            })}
          </div>
        </div>
      </section>

      {/* testimonials */}

      <Testimonials />

      {/* faqs section */}
      <FAQ />
    </>
  );
};
