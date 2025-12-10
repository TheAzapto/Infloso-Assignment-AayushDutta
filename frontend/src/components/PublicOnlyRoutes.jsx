// src/components/PublicOnlyRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Checking auth...</div>;
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return children;
};

export default PublicOnlyRoute;
