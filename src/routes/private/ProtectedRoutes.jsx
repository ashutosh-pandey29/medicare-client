import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { PreLoader } from "../../components/UI/loaders/PreLoader";
const ProtectedRoutes = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <PreLoader />;

  // console.log("user.role:", user.role);
  // console.log("allowedRoles:", allowedRoles);
  // console.log("match:", allowedRoles.includes(user.role));

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
