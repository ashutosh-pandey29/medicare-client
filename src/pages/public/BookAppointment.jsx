import { Appointment } from "../../components/section/Appointment";
import pageBanner from "../../assets/hospitals/Banner.png";
import { FAQ } from "../../components/section/FAQ";

export const BookAppointment = () => {
  return (
    <>
      <section className="w-ful mt-[10vh]">
        {/* Banner Section */}
        <div
          className="relative w-full h-[60vh] md:h-[70vh] bg-gray-900 bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${pageBanner})` }}
        >
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
              Fast & Easy <span className="text-orange-500">Appointment</span>
            </h1>
            <p className="text-slate-800 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Schedule a visit with our expert doctors and take the first step towards better
              health.
            </p>
          </div>
        </div>

        <div className=" bg-[#e6e8ed]">
          <div className="max-w-[1400px] mx-auto ">
            <Appointment />
          </div>
        </div>
      </section>

      {/* faqs area */}

      <FAQ />
    </>
  );
};
