// import pageBanner from "../../assets/hospitals/Banner.png";
import { Heading } from "../../components/UI/Heading";
import { ServiceCard } from "../../components/UI/ServiceCard";
import { FAQ } from "../../components/section/FAQ";
import { Testimonials } from "../../components/section/Testimonials";
import services from "../../assets/jsonData/services.json";
import { PageBanner } from "../../components/UI/PageBanner";
import { ServiceCTA } from "../../components/UI/ServiceCTA";
export const Services = () => {
  return (
    <>
      <section className="about-page mt-[10vh]">
        {/* Banner Section */}

        <PageBanner
          title={
            <>
              Healthcare <span className="text-orange-500">Services</span>
            </>
          }
          subText={`At MediCare, we provide specialized medical services that cater to every aspect of your health.
 `}
        />

        {/* Our Story Section */}
        <div className="max-w-[1400px] mx-auto mt-5 md:mt-20 md:px-4 px-1">
          <Heading subHeading={" What We Offer"} mainHeading={" Our Medical   "} name="Services" />

          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:mt-20 px-1 md:px-5 space-y-2  py-5">
            {/* service card */}
            {services.map((service) => {
              return <ServiceCard service={service} key={service.id} />;
            })}

            {/* service CTA */}
            <ServiceCTA />
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
