import { useState } from "react";
import config from "../../config";
const SearchBar = ({ setRecords, setUsers, setShowUsers }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [option, setOption] = useState("records");
  async function searchRecords() {
    const response = await fetch(
      `${config.apiUrl}search-records?search_term=${searchTerm}"`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: "[]",
      }
    );
    const records = await response.json();
    setRecords(records);
    setShowUsers(false);
  }
  async function searchUsers() {
    const response = await fetch(
      `${config.apiUrl}get-users-by-username/${searchTerm}`,
      {
        method: "GET",
      }
    );
    const users = await response.json();
    setUsers(users);
    setShowUsers(true);
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
