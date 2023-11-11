import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div>
      <Link to={`/user/${user.username}`}>{user.username}</Link>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserCard;
