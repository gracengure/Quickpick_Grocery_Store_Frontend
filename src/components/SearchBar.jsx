import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ products, setFilteredProducts }) => {
  const [nameCriteria, setNameCriteria] = useState("");

  const handleNameChange = (e) => {
    const { value } = e.target;
    setNameCriteria(value); // Update name criteria based on input value
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredProducts = products.filter((product) => {
      // Convert both product name and criteria to lowercase for case-insensitive comparison
      const productName = product.name.toLowerCase();
      const criteria = nameCriteria.toLowerCase();
      // Check if product name includes criteria or if criteria is empty
      const nameMatch = productName.includes(criteria) || criteria === "";
      return nameMatch;
    });
    setFilteredProducts(filteredProducts); // Update filtered products state
  };

  return (
    <div className="container">
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
