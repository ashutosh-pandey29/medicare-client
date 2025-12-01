import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = ({ isAuthenticated, allowedRole  , children}) => {
  const allowedRoles = ["user", "doctor", "admin"];


  
  if (!isAuthenticated ) {
    return <Navigate to={"/auth"} replace/>
  }
  
  if (!allowedRole && !allowedRoles.includes(allowedRole)) {
        return <Navigate to="/unauthorized" replace />;
  }

  return children;

  
}
export default ProtectedRoutes