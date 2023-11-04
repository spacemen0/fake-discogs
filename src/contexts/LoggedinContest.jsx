import React, { createContext, useContext, useState } from "react";

const LoggedInContext = createContext();

export const LoggedInProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const updateLoggedIn = (LoggedInStatus) => {
    setLoggedIn(LoggedInStatus);
  };

  return (
    <LoggedInContext.Provider value={{ LoggedIn: loggedIn, updateLoggedIn }}>
      {children}
    </LoggedInContext.Provider>
  );
};

export const useLoggedInContext = () => {
  return useContext(LoggedInContext);
};
