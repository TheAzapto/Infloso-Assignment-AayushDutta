// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = `http://localhost:5000`;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("/auth/verify");
        if (res.data.authenticated) {
          setIsAuthenticated(true);
          setUser(res.data.user || null);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (err) {
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (identifier, password) => {
    const res = await axios.post("/api/login", { identifier, password });
    setIsAuthenticated(true);
    setUser(res.data.user || null);
    return res;
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout");
    } catch (e) {
    }
    setIsAuthenticated(false);
    setUser(null);
  };

  const signup = async (username, email, password) => {
    const res = await axios.post("/api/signup", { username, email, password });
    setIsAuthenticated(true);
    setUser(res.data.user || null);
    return res;
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
