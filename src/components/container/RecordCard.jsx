
import React from 'react';

const RecordCard = ({ title, artist, year, genre }) => {
  return (
    <div className="record-card">
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>{genre}</p>
    </div>
  );
};

export default RecordCard;
