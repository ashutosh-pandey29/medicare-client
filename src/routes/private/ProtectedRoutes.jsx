import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { PreLoader } from "../../components/UI/loaders/PreLoader";
const ProtectedRoutes = ({ allowedRole }) => {
  const { user, loading } = useAuth();

  if (loading) return <PreLoader/>;

  // console.log("user:", user);

  if (!user || !user.accessToken) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRole && user.role !== allowedRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
