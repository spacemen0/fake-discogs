import React, { useState } from "react";

const RecordForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release_year, setReleaseYear] = useState(0);
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [status, setStatus] = useState("available");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(
          e,
          title,
          artist,
          release_year,
          genre,
          description,
          price,
          status
        );
      }}
    >
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Artist:
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </label>
      <label>
        Release Year:
        <input
          type="number"
          value={release_year}
          onChange={(e) => setReleaseYear(e.target.value)}
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </label>
      <label>
        Description (Optional):
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="available">Available</option>
          <option value="sold">Sold</option>
          <option value="reserved">Reserved</option>
        </select>
      </label>
      <button type="submit">Add Record</button>
    </form>
  );
};

export default RecordForm;