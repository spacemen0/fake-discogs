import { Link } from "react-router-dom";

const RecordCard = ({ record, expandable }) => {
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
    </div>
  );
};

export default RecordCard;
