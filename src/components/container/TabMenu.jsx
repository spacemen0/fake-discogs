import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import config from "../../config";
import RecordForm from "./RecordForm";
const TabMenu = ({ setRecords, getAllRecords }) => {
  const { isAuthenticated, token, userInfo } = useAuthContext();
  const [showRecordForm, setShowRecordForm] = useState(false);
  const handleSellerRecords = async () => {
    console.log(userInfo.username);
    const response = await fetch(
      `${config.apiUrl}get-records-by-seller-name/${userInfo.username}`,
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
  };
  const handleCreatingRecords = async (
    e,
    title,
    artist,
    release_year,
    genre,
    description,
    price,
    status,
    image
  ) => {
    e.preventDefault();
    release_year = parseInt(release_year);
    price = parseFloat(price);
    const response = await fetch(`${config.apiUrl}create-record`, {
      method: "POST",
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
    if (response.status === 201) {
      const data = await response.json();
      console.log(data);
      setShowRecordForm(false);
          const formData = new FormData();
          formData.append("image", image);
       const imageResponse = await fetch(`${config.apiUrl}create-image/${data.ID}`, {
         method: "POST",
         headers: {
           Authorization: `Bearer ${token}`,
         },
         body: formData,
       });
       if (imageResponse.status === 200) {
         console.log("Image uploaded successfully");
       } else {
         console.log("Image upload failed");
       }
    } else {
                            const data = await response.json();
      console.log(data);
    }


  };
  return (
    <div>
      <h2>Logo</h2>
      <button onClick={getAllRecords}>Market</button>
      <button>Wanted Records</button>
      {isAuthenticated && (
        <button onClick={handleSellerRecords}>My Selling List</button>
      )}
      {isAuthenticated && (
        <button onClick={() => setShowRecordForm(!showRecordForm)}>
          Add Record
        </button>
      )}
      {showRecordForm && <RecordForm handleSubmit={handleCreatingRecords} />}
    </div>
  );
};

export default TabMenu;
