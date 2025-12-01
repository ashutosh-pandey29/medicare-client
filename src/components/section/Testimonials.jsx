import { Heading } from "../UI/Heading";
import userImg from "../../assets/doctors/bhumesh-singh.jpg";
import { TestimonialsCard } from "../UI/TestimonialsCard";
import testimonials from "../../assets/jsonData/testimonials.json";
import { useEffect, useState } from "react";

export const Testimonials = () => {
  const [limitTestimonials, setLimitTestimonials] = useState(10);

  useEffect(() => {
    const updateLimit = () => {
      const width = window.innerWidth;

      if (width <= 768) {
        setLimitTestimonials(5);
      } else if (width < 1024) {
        setLimitTestimonials(10);
      } else {
        setLimitTestimonials(20);
      }
    };

    updateLimit(); // initial call
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  return (
    <>
      <section className="services ">
        <div className="max-w-[1400px] mx-auto  h-auto  mt-20 ">
          <Heading
            subHeading={"Patient Stories & Feedback"}
            mainHeading={"Why Choose"}
            name={"MediCare"}
          />

          {/* testimonials card*/}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-1.5 auto-rows-auto ">
            {/* card */}

            {testimonials.slice(0, limitTestimonials).map((testimonial, index) => (
              <TestimonialsCard key={index} testimonial={testimonial} />
            ))}
          </div>

          {/* end */}
          <div className="mt-8 text-center text-xl md:text-2xl font-semibold">
            Not just these stories —
            <span className="text-blue-600 font-extrabold"> 10,000+ patients </span>
            trusted us.
          </div>
        </div>
      </section>
    </>
  );
};
