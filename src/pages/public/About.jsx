import aboutImage from "../../assets/hospitals/about-page.png";
import missionVision from "../../assets/hospitals/mission-vision.png";
import { Heading } from "../../components/UI/Heading";
import { OptimizedImage } from "../../components/common/public/OptimizedImage";
import { FAQ } from "../../components/section/FAQ";
import { Testimonials } from "../../components/section/Testimonials";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaUserMd } from "react-icons/fa";
import { MdLocalHospital, MdMedicalServices } from "react-icons/md";
import CountUp from "react-countup";
import { PageBanner } from "../../components/UI/PageBanner";

export const About = () => {
  return (
    <>
      <section className="about-page mt-[10vh]  w-full">
        {/* Banner Section */}
        <PageBanner
          title={
            <>
              {" "}
              About <span className="font-bold text-orange-500">M</span>
              <span className=" font-semibold text-zinc-500">edi</span>
              <span className=" font-bold text-orange-500">C</span>
              <span className=" font-semibold text-zinc-500">are</span>
            </>
          }
          subText={`  At MediCare, our mission is to deliver compassionate, high-quality healthcare, combining advanced medical technology with a human touch. `}
        />

        <div className="max-w-[1400px] mx-auto mt-5 md:mt-20 px-5">
          {/* Our Story Section */}
          <div className="flex flex-col justify-center md:flex-row items-start  gap-10 md:gap-20 ">
            {/* Image */}
            <div className=" hidden md:flex  justify-center items-center ">
              <OptimizedImage
                src={aboutImage}
                alt="About MediCare"
                className="w-full h-auto rounded-xs mt-5 "
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-left font-bold mb-1 text-slate-800">
                Our <span className="text-green-500">Story</span>
              </h2>

              <div className="content">
                <p className="text-slate-700 text-left text-base md:text-lg leading-relaxed mb-4">
                  <span className="font-semibold text-green-500">MediCare</span> was founded in{" "}
                  <span className="font-semibold">2005 </span>
                  with a vision to make{" "}
                  <span className="font-semibold text-green-500">high-quality healthcare</span>{" "}
                  accessible to everyone. What started as a{" "}
                  <span className="font-semibold">small clinic</span> with a handful of dedicated
                  <span className="font-semibold text-green-500">doctors and nurses</span> has grown
                  into a<span className="font-semibold">trusted healthcare network</span> serving
                  thousands of patients annually. We combine{" "}
                  <span className="font-semibold text-green-500">advanced medical technology</span>
                  with a <span className="font-semibold">patient-centered approach</span>, ensuring
                  each individual receives the care they deserve.
                </p>

                <p className="text-slate-700 text-left text-base md:text-lg leading-relaxed">
                  Over the years, we have expanded into{" "}
                  <span className="font-semibold">multiple specialized departments</span>,
                  introduced{" "}
                  <span className="font-semibold text-green-500">
                    innovative treatment techniques
                  </span>
                  , and built strong partnerships with{" "}
                  <span className="font-semibold">leading medical institutions</span>. Today, we
                  continue to grow,
                  <span className="font-semibold text-green-500">innovate</span>, and deliver
                  healthcare that is
                  <span className="font-semibold">accessible, reliable, and compassionate</span> — a
                  story of
                  <span className="font-semibold text-green-500">dedication, resilience</span>, and
                  a relentless pursuit of better{" "}
                  <span className="font-semibold">health outcomes</span> for everyone.
                </p>
              </div>
              {/* Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                {/* 24x7 Service */}
                <div className="flex items-center gap-4 bg-green-100 rounded-2xl p-4 ">
                  <div className="bg-green-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <AiOutlineClockCircle />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg">24x7 Service</span>
                </div>

                {/* Expert Doctors */}
                <div className="flex items-center gap-4 bg-blue-100 rounded-2xl p-4 ">
                  <div className="bg-blue-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <FaUserMd />
                  </div>
                  <span className="text-slate-800 font-semibold text-lg">Expert Doctors</span>
                </div>

                {/* Emergency Care */}
                <div className="flex items-center gap-4 bg-purple-100 rounded-2xl p-4 ">
                  <div className="bg-purple-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <MdLocalHospital />
                  </div>
                  <span className="text-purple-800 font-semibold text-lg">Emergency Care</span>
                </div>

                {/* Modern Technology */}
                <div className="flex items-center gap-4 bg-yellow-100 rounded-2xl p-4 ">
                  <div className="bg-yellow-500 text-white rounded-full p-4 flex items-center justify-center text-2xl">
                    <MdMedicalServices />
                  </div>
                  <span className="text-yellow-800 font-semibold text-lg">Modern Technology</span>
                </div>
              </div>
            </div>
          </div>
          

          {/* mission and vision  */}

          <div className="flex  justify-center flex-col md:flex-row items-start  gap-10 mt-20">
            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-left font-bold mb-6 text-slate-800">
                Our <span className="text-green-500">Mission</span> &{" "}
                <span className="text-green-500">Vision</span>
              </h2>
              <p className="text-slate-700 text-left text-base md:text-lg leading-relaxed mb-6">
                At <span className="font-semibold text-green-500">MediCare</span>, our mission is to
                deliver
                <span className="font-semibold text-green-500">
                  {" "}
                  compassionate, high-quality healthcare
                </span>{" "}
                to every patient who walks through our doors. We focus on combining{" "}
                <span className="font-semibold text-green-500">advanced medical technology</span>
                with a <span className="font-semibold">human touch</span>, ensuring each individual
                receives
                <span className="font-semibold">personalized care</span> tailored to their specific
                health needs. Our team of skilled{" "}
                <span className="font-semibold text-green-500">
                  doctors, nurses, and support staff
                </span>{" "}
                work tirelessly to make healthcare
                <span className="font-semibold">accessible, reliable, and effective</span>, while
                fostering trust and comfort with every interaction.
              </p>

              <p className="text-slate-700 text-left text-base md:text-lg leading-relaxed">
                Our vision is to establish{" "}
                <span className="font-semibold text-green-500">MediCare</span> as a benchmark in the
                healthcare industry for{" "}
                <span className="font-semibold">
                  innovation, excellence, and patient-centered care
                </span>
                . We aspire to create a future where{" "}
                <span className="font-semibold text-green-500">
                  advanced, affordable, and effective medical treatment
                </span>
                is available to everyone, empowering individuals and communities to lead healthier,
                more fulfilling lives. By continuously evolving our services and embracing{" "}
                <span className="font-semibold">modern medical practices</span>, we aim to transform
                the way healthcare is experienced and delivered.
              </p>
            </div>

            {/* Image */}

            <div className=" hidden md:flex  justify-center items-center ">
              <OptimizedImage
                src={missionVision}
                alt="mission-vision-img"
                className="w-full h-auto rounded-xs mt-5 "
              />
            </div>
          </div>

          {/* achievement and statistics  */}

          <section className="px-5">
            <div className="text-center mt-16">
              <Heading subHeading={""} mainHeading={"Achievements of "} name="medicare" />
              <p className="text-gray-600 text-lg">
                We are proud of the milestones we have achieved and the lives we have impacted.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-6 mt-10 gap-6 md:gap-10 lg:gap-12">
              {/* happy customer */}

              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <CountUp end={20000} duration={2.5} separator="," />
                  {"+"}
                </h1>
                <span className="text-white text-lg md:text-xl font-medium">Happy People</span>
              </div>

              {/* doctors */}

              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <CountUp end={100} duration={2.5} separator="," />
                  {"+"}
                </h1>
                <span className="text-white text-lg md:text-xl font-medium">Expert Doctors</span>
              </div>

              {/* Surgeries */}

              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <CountUp end={250} duration={2.5} separator="," />
                  {"+"}
                </h1>
                <span className="text-white text-lg md:text-xl font-medium">
                  Successful Surgeries
                </span>
              </div>

              {/* Years of Service */}
              <div className="flex flex-col items-center justify-center h-40 bg-green-600 rounded p-4 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <CountUp end={25} duration={2.5} separator="," />
                  {"+"}
                </h1>
                <span className="text-white text-lg md:text-xl font-medium">Years of Service</span>
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
