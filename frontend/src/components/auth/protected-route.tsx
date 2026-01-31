
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  // temporary auth check (replace with real one)
  const isAuthenticated = !!localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}