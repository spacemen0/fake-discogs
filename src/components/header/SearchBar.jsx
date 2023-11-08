import { useState } from "react";
import { useRecordsContext } from "../../contexts/RecordsContext";
const SearchBar = () => {
  const { updateRecords } = useRecordsContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("records");
  async function searchRecords() {
    const response = await fetch(
      `http://localhost:1111/api/v1/search-records?search_term=${searchTerm}"`,
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
  async function searchUsers() {
    const response = await fetch(
      `http://localhost:1111/api/v1/get-users-by-username/${searchTerm}`,
      {
        method: "GET",
      }
    );
    const users = await response.json();
    console.log(users);
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
      <input
        type="checkbox"
        checked={option === "users"}
        onChange={() => setOption(option === "records" ? "users" : "records")}
      />
      <span>search users</span>
      <button
        onClick={() => {
          option === "records" ? searchRecords() : searchUsers();
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
