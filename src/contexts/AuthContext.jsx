import React, { createContext, useContext, useState } from "react";
import config from "../config";

const AuthContext = createContext();
function setWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
 
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedValue = getWithExpiry("isAuthenticated");
    return storedValue ? storedValue : null;
  });
  const [userInfo, setUserInfo] = useState(() => {
    const storedValue = getWithExpiry("userInfo");
    return storedValue ? storedValue : null;
  });
  const [token, setToken] = useState(() => {
    const storedValue = getWithExpiry("token");
    return storedValue ? storedValue : null;
  });

  const login = async (username, email, password, option) => {
    try {
      const url =
        option === "username"
          ? `${config.apiUrl}user-login/username`
          : `${config.apiUrl}user-login/email`;
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
        setWithExpiry("isAuthenticated", true, config.expiryTime);
        setWithExpiry("token", data, config.expiryTime);
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
      const response = await fetch(`${config.apiUrl}get-user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        setUserInfo(data);
        setWithExpiry("userInfo", data, config.expiryTime);
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
    setWithExpiry("isAuthenticated", false, config.expiryTime);
    setWithExpiry("token", null, config.expiryTime);
    setWithExpiry("userInfo", null, config.expiryTime);
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
