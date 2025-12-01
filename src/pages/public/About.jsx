import pageBanner from "../../assets/hospitals/Banner.png";
import aboutImage from "../../assets/hospitals/about-page.png";
import missionVision from "../../assets/hospitals/mission-vision.png";
import { Heading } from "../../components/UI/Heading";
import { FAQ } from "../../components/section/FAQ";
import { Testimonials } from "../../components/section/Testimonials";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";
import { MdLocalHospital, MdMedicalServices } from "react-icons/md";

export const About = () => {
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
              Welcome to <span className="text-orange-500">MediCare</span>
            </h1>
            <p className="text-slate-800 text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Your health, our priority. At MediCare, we provide world-class medical services with
              care, compassion, and professionalism.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-[1400px] mx-auto mt-5 md:mt-20 px-4">
          <div className="flex flex-col md:flex-row items-start  gap-10 md:gap-10">
            {/* Image */}
            <div className="md:w-1/2  hidden  md:block">
              <img src={aboutImage} alt="About MediCare" className="w-full" />
            </div>

            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl text-left font-bold mb-6 text-slate-800">
                Our <span className="text-green-500">Story</span>
              </h2>
              <p className="text-slate-700 text-justify text-base md:text-lg leading-relaxed mb-4">
                MediCare was founded in 2005 with a vision to make high-quality healthcare
                accessible to everyone. What started as a small clinic with a handful of dedicated
                doctors and nurses has grown into a trusted healthcare network serving thousands of
                patients annually. We combine advanced medical technology with a patient-centered
                approach, ensuring each individual receives the care they deserve.
              </p>
              <p className="text-slate-700 text-justify text-base md:text-lg leading-relaxed mb-4">
                Over the years, we have achieved several milestones: expanding into multiple
                specialized departments, introducing innovative treatment techniques, and building
                strong partnerships with leading medical institutions. Every step of our journey has
                been guided by our commitment to excellence and compassion.
              </p>

              <p className="text-slate-700 text-justify text-base md:text-lg leading-relaxed">
                Today, we continue to grow, innovate, and focus on delivering healthcare that is
                accessible, reliable, and compassionate. Our story is one of dedication, resilience,
                and a relentless pursuit of better health outcomes for everyone who walks through
                our doors.
              </p>

              {/* Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                {/* 24x7 Service */}
                <div className="flex items-center gap-4 bg-green-50 rounded-2xl p-4 ">
                  <div className="bg-green-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <AiOutlineClockCircle />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg">24x7 Service</span>
                </div>

                {/* Expert Doctors */}
                <div className="flex items-center gap-4 bg-blue-50 rounded-2xl p-4 ">
                  <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <FaUserMd />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg">Expert Doctors</span>
                </div>

                {/* Emergency Care */}
                <div className="flex items-center gap-4 bg-purple-50 rounded-2xl p-4 ">
                  <div className="bg-purple-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <MdLocalHospital />
                  </div>
                  <span className="text-purple-800 font-semibold text-lg">Emergency Care</span>
                </div>

                {/* Modern Technology */}
                <div className="flex items-center gap-4 bg-yellow-50 rounded-2xl p-4 ">
                  <div className="bg-yellow-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <MdMedicalServices />
                  </div>
                  <span className="text-yellow-800 font-semibold text-lg">Modern Technology</span>
                </div>
              </div>
            </div>
          </div>

          {/* mission and vision  */}

          <div className="flex flex-col md:flex-row items-start  gap-10 mt-20">
            {/* Text */}
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-6xl text-left font-bold mb-6 text-slate-800">
                Our <span className="text-green-500">Mission</span> &{" "}
                <span className="text-green-500">Vision</span>
              </h2>
              <p className="text-slate-700 text-justify text-base md:text-lg leading-relaxed mb-4">
                At MediCare, our mission is to deliver compassionate, high-quality healthcare to
                every patient who walks through our doors. We focus on combining advanced medical
                technology with a human touch, ensuring each individual receives personalized care
                that addresses their specific health needs. Our team of skilled doctors, nurses, and
                support staff work tirelessly to make healthcare accessible, reliable, and
                effective, while fostering trust and comfort with every interaction.
              </p>
              <p className="text-slate-700 text-justify text-base md:text-lg leading-relaxed mb-4">
                Our vision is to establish MediCare as a benchmark in the healthcare industry for
                innovation, excellence, and patient-centered care. We aspire to create a future
                where advanced, affordable, and effective medical treatment is available to
                everyone, empowering individuals and communities to lead healthier, more fulfilling
                lives. By continuously evolving our services and embracing modern medical practices,
                we aim to transform the way healthcare is experienced and delivered.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2  hidden  md:block">
              <img src={missionVision} alt="About MediCare" className="w-full" />
            </div>
          </div>

          {/* achievement and statistics  */}

          <section>
            <div className="text-center mt-16">
              <Heading subHeading={""} mainHeading={"Achievements of "} name="medicare" />
              <p className="text-gray-600 text-lg">
                We are proud of the milestones we have achieved and the lives we have impacted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 mt-10 gap-10">
              {/* happy customer */}

              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">20,000+</h1>
                <span className="text-white text-lg md:text-xl">Happy People</span>
              </div>

              {/* doctors */}

              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">100+</h1>
                <span className="text-white text-lg md:text-xl">Expert Doctors</span>
              </div>

              {/* Surgeries */}

              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">250+</h1>
                <span className="text-white text-lg md:text-xl">Successful Surgeries</span>
              </div>

              {/* Years of Service */}
              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">25+</h1>
                <span className="text-white text-lg md:text-xl">Years of Service</span>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* testimonials */}

      <Testimonials />

      {/* faqs section */}
      <FAQ />
    </>
  );
};
