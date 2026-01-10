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
import { registerServiceWorker } from "./utils/notifications/registerService.worker";
import { useEffect } from "react";
import { requestNotificationPermission } from "./utils/notifications/notificationPermission";
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
  // // web push -> registerService worker start on app start
  // useEffect(() => {
  //   registerServiceWorker();
  // }, []);

  return (
    <>
      
      {/* <button className="mt-50 border "
  onClick={async () => {
    const allowed = await requestNotificationPermission();

    if (!allowed) {
      alert("Notifications not allow");
      return;
    }

    await registerServiceWorker();
    await subscribeUser();
  }}
>
  Enable Notifications
</button> */}

      
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
