import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const token = sessionStorage.getItem("accessToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
