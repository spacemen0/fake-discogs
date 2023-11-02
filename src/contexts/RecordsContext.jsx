import React, { createContext, useContext, useState } from "react";

const RecordsContext = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const updateRecords = (newRecords) => {
    setRecords(newRecords);
  };

  return (
    <RecordsContext.Provider value={{ records, updateRecords }}>
      {children}
    </RecordsContext.Provider>
  );
};

export const useRecordsContext = () => {
  return useContext(RecordsContext);
};
