import { useParams } from "react-router-dom";
import UserRecords from "../components/container/UserRecords";
import Header from "../components/header/Header";
function User() {
  const { username } = useParams();
  window.alert(username);
  return (
    <div>
      <Header />
      <UserRecords username={username} />
    </div>
  );
}

export default User;
