import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminGuard({ children }) {
  const ok = localStorage.getItem("envy_admin_ok") === "1";
  if (!ok) return <Navigate to="/admin/login" replace />;
  return children;
}