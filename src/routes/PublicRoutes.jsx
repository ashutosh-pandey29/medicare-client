import PublicLayout from "../components/layout/PublicLayout";
import { Home } from "../pages/public/Home";
import { About } from "../pages/public/About";
import { ContactUs } from "../components/section/ContactUs";
import { Services } from "../pages/public/Services";
import { Doctors } from "../pages/public/Doctors";
import { BookAppointment } from "../pages/public/BookAppointment";


// auth pages

import { Login } from "../auth/Login";
import { Register } from "../auth/Register";

const publicRouter =[
  
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/services",
        element:<Services/>
      },
      {
        path: "/doctors",
        element:<Doctors/>
      },
      {
        path: "/contact",
        element:<ContactUs/>
      },
      {
        path: "/appointment",
        element:<BookAppointment/>
      }
      
    ]
  },
  {
    path: "/auth",
    children: [
      {
        path: "",
        index: true,
        element:<Login/>
      },
      {
        path: "register",
        element:<Register/>
      }
    ]
  }

];

export default publicRouter