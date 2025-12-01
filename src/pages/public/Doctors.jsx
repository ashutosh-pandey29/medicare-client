import pageBanner from "../../assets/hospitals/Banner.png";
import { Heading } from "../../components/UI/Heading";
import { FAQ } from "../../components/section/FAQ";
import { Testimonials } from "../../components/section/Testimonials";
import doctors from "../../assets/jsonData/doctors.json";
import { DoctorCard } from "../../components/UI/DoctorCard";

export const Doctors = () => {
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
              Meet Our <span className="text-orange-500">Experts</span>
            </h1>
            <p className="text-slate-800 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Our team of experienced doctors is here to care for you.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-[1400px] mx-auto mt-5 md:mt-20 px-4">
          <Heading subHeading={"Our Specialists "} mainHeading={" Team Behind  "} name="Medicare" />




          <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-10 px-2 md:px-5 space-y-2  py-5">
            {/* doctors card */}

            {doctors.map((doctor) => {
              return <DoctorCard doctor={doctor} />;
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
