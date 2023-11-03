import { useState } from "react";
import { useRecordsContext } from "../../contexts/RecordsContext";
const SearchBar = () => {
  const { updateRecords } = useRecordsContext();
  const [searchTerm, setSearchTerm] = useState("");
  async function searchRecords() {
    const response = await fetch(
      "http://localhost:1111/api/v1/search-records?search_term=" + searchTerm,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "[]",
      }
    );
    const records = await response.json();
    updateRecords(records);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <button
        onClick={() => {
          searchRecords();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
