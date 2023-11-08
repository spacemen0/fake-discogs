import React, { useEffect } from "react";
import TabMenu from "./TabMenu";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import RecordCard from "./RecordCard";

async function fetchRecords() {
  const response = await fetch("http://localhost:1111/api/v1/get-records", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "[]",
  });
  const records = await response.json();
  // updateRecords(records);
}

function Container() {
  const [records, setRecords] = React.useState([]);
  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="container">
      <TabMenu />
      <SearchBar />
      <Filter
        genres={["rock", "jazz", "pop"]}
        years={["1001", "1002"]}
        statuses={["sold", "selling"]}
      />
      {records.map((record) => (
        <RecordCard
          key={record.id}
          title={record.title}
          artist={record.artist}
          genre={record.genre}
          year={record.year}
          description={record.description}
        />
      ))}
    </div>
  );
}

export default Container;
