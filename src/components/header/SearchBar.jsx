import React from "react";

const SearchBar = () => {
  const { updateRecords } = useAppContext();
  return (
    <div>
      <input type="text" placeholder="Search..." />
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
