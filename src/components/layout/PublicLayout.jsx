import { Outlet } from "react-router-dom";
import { Header } from "../../components/section/Header";
import { Footer } from "../../components/section/Footer";
import { Chatbot } from "../UI/chatbot/Chatbot";
import { ScrollToTop } from "../../utils/ScrollToTop";
const PublicLayout = () => {
  return (
    <>
      {/* public  header */}
      <Header />

      <main>
        {/* scroll top when routes change */}
        <ScrollToTop />

        {/* Route-specific page content */}
        <Outlet />
      </main>

      {/* public  footer */}
      <Footer />
      
      {/* public support chatbot  */}
      <Chatbot />
    </>
  );
};

export default PublicLayout;
