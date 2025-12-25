import { FAQCard } from "../UI/FAQCard";
import faqs from "../../assets/jsonData/faq.json";
import { Heading } from "../UI/Heading";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../UI/Button";
export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="faq">
        <div className="max-w-[1400px] mx-auto mt-5 md:mt-20 p-1 md:px-5">
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
      <div className="mt-20 mx-4 md:mx-20 rounded-2xl bg-linear-to-r from-green-600 via-green-700 to-emerald-500 py-14 px-6 md:px-12 text-center text-white shadow-lg">
        <h3 className="text-3xl md:text-4xl font-semibold mb-4">Join Our Health Community</h3>

        <p className="text-base md:text-lg text-green-50 max-w-3xl mx-auto mb-8">
          Your health deserves the best. Connect with trusted doctors, manage appointments, and
          receive personalized care — all in one secure platform.
        </p>

        <Button label={" Join Now"} variant="light" />
      </div>
    </>
  );
};
