import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ products, setFilteredProducts }) => {
  const [categoryCriteria, setCategoryCriteria] = useState("");

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategoryCriteria(value); // Update category criteria based on input value
    console.log("Category Criteria:", value); // Log category criteria for debugging
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting with Category Criteria:", categoryCriteria); // Log category criteria when submitting
    const filteredProducts = products.filter((product) => {
      // Convert both product category and criteria to lowercase for case-insensitive comparison
      const productCategory = product.category.toLowerCase();
      const criteria = categoryCriteria.toLowerCase();
      // Check if product category includes criteria or if criteria is empty
      const categoryMatch = productCategory.includes(criteria) || criteria === "";
      return categoryMatch;
    });
    console.log("Filtered Products:", filteredProducts); // Log filtered products for debugging
    setFilteredProducts(filteredProducts); // Update filtered products state
  };

  return (
    <div className="container">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoryCriteria}
          onChange={handleCategoryChange}
          placeholder="Search for products by category..."
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
 