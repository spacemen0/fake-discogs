const UserCard = ({ user }) => {
  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserCard;
