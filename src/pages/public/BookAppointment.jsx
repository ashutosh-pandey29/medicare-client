import { Appointment } from "../../components/section/Appointment";
import { FAQ } from "../../components/section/FAQ";
import { PageBanner } from "../../components/UI/PageBanner";

export const BookAppointment = () => {
  return (
    <>
      <section className="w-ful mt-[10vh]">
        {/* Banner Section */}
        
        <PageBanner
          title={
            <>
              Fast & Easy <span className="text-orange-500">Appointment</span>
            </>
          }
          subText={`  Schedule a visit with our expert doctors and take the first step towards better
              health.`}
        />

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
