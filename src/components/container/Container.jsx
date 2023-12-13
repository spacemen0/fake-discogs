import { useState, useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
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
  const { token } = useAuthContext();
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
  async function deleteRecord(id) {
    const response = await fetch(`${config.apiUrl}delete-record/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.status === 204) {
      console.error(`Error deleting record: ${response.status}`);
    } else {
      getAllRecords();
    }
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
              record={record}
              key={record.ID}
              expandable={true}
              handleDelete={deleteRecord}
            />
          ))}
    </div>
  );
}

export default Container;
