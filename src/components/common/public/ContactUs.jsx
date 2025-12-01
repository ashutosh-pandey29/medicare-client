import { LuPhoneCall } from "react-icons/lu";
import pageBanner from "../../assets/hospitals/Banner.png";
import cImage from "../../assets/hospitals/contact-us.png";
import { FAQ } from "./FAQ";
export const ContactUs = () => {
  return (
    <>
      <section className="contact-us mt-[10vh]">
        {/* banner */}

        <div
          className="max-w-full h-[60vh] md:h-[70vh] bg-green-600 bg-no-repeat bg-center bg-cover flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${pageBanner})` }}
        >
          <div className="text-center max-w-3xl mx-auto my-10">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Get in Touch with Us
            </h1>
            <p className="text-lg md:text-xl text-slate-800">
              We’d love to hear from you! Whether you have a question, feedback, or need assistance,
              feel free to reach out. Our team is here to help you with prompt and friendly support.
            </p>
          </div>
        </div>

        <div className="max-w-[1400px] mt-10 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 mt-30">
            {/* calling */}
            <div className="flex rounded-xl max-w-sm bg-white shadow-sm p-3  flex-col items-center justify-between">
              <span className="block bg-orange-500 py-4 px-4 text-4xl text-white rounded-full">
                <LuPhoneCall />
              </span>

              <p className="font-semibold  text-3xl my-3">Call Us</p>

              <p className="text-xl  mb-2">1800-234-2342</p>
            </div>

            {/* email */}
            <div className="flex rounded-xl max-w-sm bg-white shadow-sm p-3  flex-col items-center justify-between">
              <span className="block bg-orange-500 py-4 px-4 text-4xl text-white rounded-full">
                <LuPhoneCall />
              </span>

              <p className="font-semibold  text-3xl my-3">mail Us</p>

              <p className=" text-xl mb-2">help@medicare.com</p>
            </div>

            {/* Address */}
            <div className="flex rounded-xl max-w-sm bg-white shadow-sm p-3  flex-col items-center justify-between">
              <span className="block bg-orange-500 py-4 px-4 text-4xl text-white rounded-full">
                <LuPhoneCall />
              </span>

              <p className="font-semibold  text-3xl my-3">Address</p>

              <p className=" text-xl  mb-2">area A ABC road Kanpur India -210287</p>
            </div>
          </div>

          {/* form area */}

          <div className="flex flex-row md:flex-row  md:items-center gap-10 mt-15">
            {/* Side Image */}
            <div className="md:w-1/2  h-[70vh] hidden md:block">
              <img src={cImage} alt="Appointment" className="w-full h-full object-cover" />
            </div>

            {/* Form */}
            <div className="form md:w-1/2 bg-white p-6 ">
              <h2 className="text-2xl md:text-3xl font-semibold text-green-600  px-3">
                Contact us
              </h2>

              <p className="text-slate-600 mb-6">
                Fill out the form below and our team will get back to you.
              </p>

              {/* Name */}
              <div className=" w-full mt-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-[6vh] border border-zinc-300 rounded-md px-4 outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>

              {/* Message */}
              <textarea
                placeholder="Message"
                className="w-full h-[25vh] mt-4 border border-zinc-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-green-300"
              ></textarea>

              {/* Submit Button */}
              <button className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* faq  */}

      <FAQ />
      
    </>
  );
};
