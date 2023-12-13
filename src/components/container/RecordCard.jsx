import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import config from "../../config";
import RecordForm from "./RecordForm";

const RecordCard = ({ record, expandable, handleDelete }) => {
  const { userInfo, token } = useAuthContext();
  const [showRecordForm, setShowRecordForm] = useState(false);

  async function updateRecord(
    e,
    id,
    title,
    artist,
    release_year,
    genre,
    description,
    price,
    status,
    image
  ) {
    e.preventDefault();
    release_year = parseInt(release_year);
    price = parseFloat(price);
    const response = await fetch(`${config.apiUrl}update-record/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        artist,
        release_year,
        genre,
        description,
        price,
        status,
      }),
    });
    if (response.status === 201 && image) {
      const data = await response.json();
      setShowRecordForm(false);
      const formData = new FormData();
      formData.append("image", image);
      const imageResponse = await fetch(
        `${config.apiUrl}create-image/${data.ID}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      if (imageResponse.status === 201) {
        console.log("image uploaded");
      }
    }
  }
  return (
    <div className="record-card">
      <h2>{record.title}</h2>
      <p>{record.artist}</p>
      <p>{record.release_year}</p>
      <p>{record.genre}</p>
      <p>{record.description}</p>
      <p>{record.price}</p>
      <p>{record.status}</p>
      {expandable && <Link to={`/record/${record.ID}`}>View</Link>}

      <p>Seller:</p>
      <Link to={`/user/${record.seller_name}`}>{record.seller_name}</Link>
      {userInfo && userInfo.username === record.seller_name && (
        <>
          <p></p>
          <button
            onClick={() => {
              handleDelete(record.ID);
            }}
          >
            Delete
          </button>
          <button
            onClick={() => {
              setShowRecordForm(!showRecordForm);
            }}
          >
            Update
          </button>
        </>
      )}
      {showRecordForm && (
        <RecordForm handleSubmit={updateRecord} id={record.ID} />
      )}
    </div>
  );
};

export default RecordCard;
