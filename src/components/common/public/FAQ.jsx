import { FAQCard } from "../UI/FAQCard";
import faqs from "../../assets/jsonData/faq.json";
import { Heading } from "../UI/Heading";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq">
        <div className="max-w-[1400px] mx-auto mt-20  ">
          {/* heading */}

          <Heading
            subHeading={"Your Doubts, Our Answers"}
            mainHeading={"Frequently Asked"}
            name={"Questions"}
          />

          {/* faq  */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 mb-5 p-3 items-start">
            {faqs.map((faq, index) => (
              <FAQCard
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === faq.id}
                onToggle={() => handleToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
        <div className="mt-20 bg-green-500 py-12 text-center text-white rounded-lg mx-4 md:mx-20">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">
            Join Our Health Community
          </h3>
          <p className="text-lg md:text-xl mb-6">
          Your health deserves the best! Connect with expert doctors, access personalized care, <br /> and stay on top of your wellness journey—all in one place.
          </p>
          <NavLink to={"services"} className="bg-zinc-600 py-2 px-4 rounded hover:bg-orange-500 hover:text-white transition">
             Join Now
            </NavLink>
        </div>
    </>
  );
};
