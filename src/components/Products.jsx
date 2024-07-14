import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; // Import SearchBar component

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); // Initialize filtered products with all products
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
      <div className="product-container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3 className="product-name">{product.name}</h3>
            <Link to={`/product/${product.id}`}>
              <img className="product-img" src={product.image_url} alt={product.name} />
            </Link>
            <div className="product-details">
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>In Stock: {product.stock_quantity}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
