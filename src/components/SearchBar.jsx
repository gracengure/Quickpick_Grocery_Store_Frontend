import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleSearch }) => {
  const [nameCriteria, setNameCriteria] = useState("");

  const handleNameChange = (e) => {
    const { value } = e.target;
    setNameCriteria(value); // Update name criteria based on input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(nameCriteria); // Trigger search with current criteria
  };

  return (
    <div>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nameCriteria}
          onChange={handleNameChange}
          placeholder="Search for products by name..."
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
