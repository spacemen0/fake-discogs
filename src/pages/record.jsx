import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import RecordCard from "../components/container/RecordCard";
import config from "../config";

function Record() {
  const { record_id } = useParams();
  const [record, setRecord] = useState({});
  const [ok, setOk] = useState(false);
  async function fetchData() {
    try {
      const response = await fetch(`${config.apiUrl}get-record/${record_id}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error fetching record: ${response.status}`);
      }

      const data = await response.json();
      setRecord(data);
      setOk(true);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {ok ? (
        <>
          <RecordCard record={record} expandable={false} />
          {/* {record.img_url !== undefined ? (
            <img
              src={`${config.serverPath}${record.img_url}`}
              alt="cover art"
            />
          ) : (
            <p>No image</p>
          )} */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Record;
