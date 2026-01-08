import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import UserRoutes from "./routes/private/UserRoutes";
import DoctorRoutes from "./routes/private/DoctorRoutes";
import AdminRoutes from "./routes/private/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NotFound } from "./pages/NotFound";
import { UnauthorizedError } from "./pages/errors/UnauthorizedError";
import { UnexpectedError } from "./pages/errors/UnexpectedError";
const router = createBrowserRouter([
  ...PublicRoutes,
  ...UserRoutes,
  ...DoctorRoutes,
  ...AdminRoutes,

  {
    path: "/unexpected-error",
    element: <UnexpectedError />,
  },
  {
    path: "/unauthorized",
    element: <UnauthorizedError />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
