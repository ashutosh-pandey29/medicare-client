import PublicLayout from "../components/layout/PublicLayout";
import { Home } from "../pages/public/Home";
import { About } from "../pages/public/About";
import { ContactUs } from "../components/section/ContactUs";
import { Services } from "../pages/public/Services";
import { Doctors } from "../pages/public/Doctors";
import { BookAppointment } from "../pages/public/BookAppointment";
import { AppointmentConfirmation } from "../pages/public/AppointmentConfirmation";

// auth pages

import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { VerifyEmailReminder } from "../auth/VerifyEmailRemainder";
import { VerifyEmail } from "../auth/VerifyEmail";
import { AuthProvider } from "../context/AuthContext";
import { AuthLayout } from "../auth/AuthLayout";
import { NotFound } from "../pages/NotFound";
import { CashPaymentConfirmation } from "../pages/public/CashPaymentConfirmation";
import { PaymentSuccess } from "../pages/public/PaymentSuccess";
import PaymentFailed from "../pages/public/PaymentFailed";

const publicRouter = [
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "doctors",
        element: <Doctors />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "appointment",
        element: <BookAppointment />,
      },
    ],
  },

  // appointment booking routes

  {
    path: "/appointment/confirmation",
    element: <AppointmentConfirmation />,
  },
  {
    path: "/appointment/payment/cash",
    element: <CashPaymentConfirmation />,
  },
  {
    path: "/appointment/payment/success",
    element: <PaymentSuccess />,
  },
  {
    path: "/appointment/payment/failed",
    element: <PaymentFailed />,
  },

  {
    path: "/auth",
    element: (
      <AuthProvider>
        <AuthLayout />
      </AuthProvider>
    ),
    children: [
      {
        index: true,
        element: <NotFound />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "verify-email/:email",
        element: <VerifyEmailReminder />,
      },
      {
        path: "verify",
        element: <VerifyEmail />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default publicRouter;
