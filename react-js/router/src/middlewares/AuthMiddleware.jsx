import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const isAuth = false;
export default function AuthMiddleware() {
    const isAuth = localStorage.getItem("isAuth") === "true";
    const location = useLocation()
    console.log(location);
    
  if (isAuth) {
    return <Outlet />;
  }

  const continueUrl = location.pathname

  return <Navigate to={`/login?continue=${continueUrl}`} replace />;
}
