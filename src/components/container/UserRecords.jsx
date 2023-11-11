import { useEffect, useState } from "react";
import config from "../../config";
import RecordCard from "./RecordCard";

const UserRecords = ({ username }) => {
  const [records, setRecords] = useState([]);
  async function FetchUserRecords() {
    const response = await fetch(
      `${config.apiUrl}get-records-by-seller-name/${username}`,
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
  }
  useEffect(() => {
    FetchUserRecords();
  }, [username]);
  return (
    <div>
      {records.length > 0 &&
        records.map((record) => (
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
};

export default UserRecords;
