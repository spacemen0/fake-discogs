import { useAuthContext } from "../../contexts/AuthContext";
import config from "../../config";
const TabMenu = ({ setRecords, getAllRecords }) => {
  const { userInfo } = useAuthContext();
  const handleSelling = async () => {
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
  return (
    <div>
      <h2>Logo</h2>
      <button onClick={getAllRecords}>Market</button>
      <button>Wanted Records</button>
      <button onClick={handleSelling}>My Selling List</button>
    </div>
  );
};

export default TabMenu;
