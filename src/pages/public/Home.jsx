import { About } from "../../components/section/About"
import { Appointment } from "../../components/section/Appointment"
import { FAQ } from "../../components/section/FAQ"
import { HeroSection } from "../../components/section/HeroSection"
import { Service } from "../../components/section/Services"
import { Testimonials } from "../../components/section/Testimonials" 



export const Home = () => {
  return (
    <>
   
      <HeroSection />
      
      <About />
      {/* service section */}
      <Service />
      {/* Appointment */}

      <Appointment/>

      {/* testimonials */}

      <Testimonials />
      
      {/* faq section  */}

      <FAQ/>

    </>
  )
}