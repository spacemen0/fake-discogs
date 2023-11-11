import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import config from "../config";
import UserRecords from "../components/container/UserRecords";
import Header from "../components/header/Header";
import UserCard from "../components/container/UserCard";
function User() {
  const { username } = useParams();
  const [user, setUser] = useState({});
  async function searchUser() {
    const response = await fetch(
      `${config.apiUrl}get-user-by-username/${username}`,
      {
        method: "GET",
      }
    );
    const user = await response.json();
    setUser(user);
  }
  useEffect(() => {
    searchUser();
  }, [username]);
  return (
    <div>
      <Header />
      <UserCard user={user} />
      <h1>{username}'s Records</h1>
      <UserRecords username={username} />
    </div>
  );
}

export default User;
