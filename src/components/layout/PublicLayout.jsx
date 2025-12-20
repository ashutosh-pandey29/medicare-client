import { Outlet } from "react-router-dom"
import { Header } from "../../components/section/Header";
import { Footer } from "../../components/section/Footer";
import { PreLoader } from "../UI/loaders/PreLoader";
const PublicLayout = () => {
 


  return (
    
    <>
    
      <Header />
      <Outlet />
      <Footer/>
    </>
  )


}

export default PublicLayout;