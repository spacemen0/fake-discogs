import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLoggedIn = (LoggedInStatus) => {
    setLoggedIn(LoggedInStatus);
  };

  return (
    <AuthContext.Provider value={{ LoggedIn: loggedIn, updateLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
