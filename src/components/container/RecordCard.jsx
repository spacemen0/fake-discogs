import { Link } from "react-router-dom";

const RecordCard = ({
  title,
  artist,
  year,
  genre,
  description,
  seller_name,
}) => {
  return (
    <div className="record-card">
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
      <p>{description}</p>
      <Link to={`/user/${seller_name}`}>{seller_name}</Link>
    </div>
  );
};

export default RecordCard;
