import { useEffect, useState } from "react";
import config from "../../config";
import RecordCard from "./RecordCard";

const UserRecords = ({ username }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch(`${config.apiUrl}get-records-by-seller-name/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "[]",
    })
      .then((response) => response.json())
      .then((response) => setRecords(response));
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
