import { useState, useEffect } from "react";
import config from "../../config";
import TabMenu from "./TabMenu";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import RecordCard from "./RecordCard";
import UserCard from "./UserCard";

function Container() {
  const [records, setRecords] = useState([]);
  const [users, setUsers] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  async function getAllRecords() {
    const response = await fetch(`${config.apiUrl}get-records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "[]",
    });
    const records = await response.json();
    setRecords(records);
  }
  useEffect(() => {
    getAllRecords();
  }, []);

  return (
    <div className="container">
      <TabMenu setRecords={setRecords} getAllRecords={getAllRecords} />
      <SearchBar
        setRecords={setRecords}
        setUsers={setUsers}
        setShowUsers={setShowUsers}
      />
      <Filter
        genres={["rock", "jazz", "pop"]}
        years={["1001", "1002"]}
        statuses={["sold", "selling"]}
      />
      {showUsers
        ? users.map((user, index) => <UserCard key={index} user={user} />)
        : records.map((record) => (
            <RecordCard
              key={record.ID}
              title={record.title}
              artist={record.artist}
              genre={record.genre}
              year={record.release_year}
              description={record.description}
            />
          ))}
    </div>
  );
}

export default Container;
