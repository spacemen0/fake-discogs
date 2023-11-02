import React from "react";

const Filter = ({ genres, years, statuses, onFilterChange }) => {
  const handleGenreChange = (event) => {
    onFilterChange({ genre: event.target.value });
  };

  const handleYearChange = (event) => {
    onFilterChange({ year: event.target.value });
  };

  const handleStatusChange = (event) => {
    onFilterChange({ status: event.target.value });
  };

  return (
    <div>
      <label htmlFor="genre">Genre:</label>
      <select id="genre" onChange={handleGenreChange}>
        <option value="">All</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <label htmlFor="year">Release Year:</label>
      <select id="year" onChange={handleYearChange}>
        <option value="">All</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <label htmlFor="status">Record Status:</label>
      <select id="status" onChange={handleStatusChange}>
        <option value="">All</option>
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
