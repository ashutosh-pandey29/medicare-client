import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import UserRoutes from "./routes/private/UserRoutes";
import DoctorRoutes from "./routes/private/DoctorRoutes";
import AdminRoutes from "./routes/private/AdminRoutes";

const router = createBrowserRouter([
  ...PublicRoutes,
  ...UserRoutes,
  ...DoctorRoutes,
  ...AdminRoutes,
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
