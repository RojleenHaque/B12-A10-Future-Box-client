import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div className="loading loading-spinner text-primary"></div>; // [cite: 144]
  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />; // [cite: 56]
};

export default PrivateRoute;