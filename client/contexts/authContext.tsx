import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie";
import api from "../api/axiosInstance";

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  login: (email: any, password: any) => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const { data: user } = { data: "oguz" };
        if (user) setUser(user as any);
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email: any, password: any) => {
    const { data: token } = await api.post("auth/login", { email, password });
    if (token) {
      console.log("Got token");
      Cookies.set("token", token, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${token.token}`;
      const { data: user } = await api.get("users/me");
      setUser(user);
      console.log("Got user", user);
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setUser(null);
    delete api.defaults.headers.Authorization;
    window.location.pathname = "/login";
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        isLoading: loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
