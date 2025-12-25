import React from "react";
import { FAQ } from "../../components/section/FAQ";
import { PageBanner } from "../../components/UI/PageBanner";
import { ContactUs } from "../../components/section/ContactUs";

export const Contact = () => {
  return (
    <>
      <section className="contact-us mt-[10vh]">
        {/* banner */}

        <PageBanner
          title={
            <>
              {" "}
              We’re Here to <span className="text-orange-500">Care for You</span>
            </>
          }
          subText={`We’d love to hear from you! Whether you have a question, feedback, or need assistance,feel free to reach out. Our team is here to help you with prompt and friendly support.`}
        />

        <div className="max-w-[1400px] mt-10 mx-auto">
          <ContactUs />
        </div>
      </section>

      {/* faq  */}

      <FAQ />
    </>
  );
};
