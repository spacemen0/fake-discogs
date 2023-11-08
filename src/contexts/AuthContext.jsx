import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [token, setToken] = useState(null);

  const login = async (username, email, password, option) => {
    try {
      const url =
        option === "username"
          ? "http://localhost:1111/api/v1/user-login/username"
          : "http://localhost:1111/api/v1/user-login/email";
      const body =
        option === "username" ? { username, password } : { email, password };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status === 200) {
        const data = await response.json();
        setIsAuthenticated(true);
        setToken(data);
        getUserInfo(data);
        return { success: true, error: null };
      } else {
        const data = await response.json();
        console.log(data);
        return { success: false, error: data };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
  const getUserInfo = async (token) => {
    try {
      const response = await fetch("http://localhost:1111/api/v1/get-user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setUserInfo(data);
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Get user info failed:", error);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUserInfo(null);
    setToken(null);
  };
  const contextValue = {
    isAuthenticated,
    userInfo,
    login,
    logout,
    token,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
