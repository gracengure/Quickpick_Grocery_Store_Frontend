// Products.jsx
import React, { useEffect, useState } from "react";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Fetch error:", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.name}</h3>
          <img
            className="product-img"
            src={product.image_url}
            alt={product.name}
          />
          <div className="product-details">
            <p>{product.category}</p>
            <p>${product.price}</p>
            <p>In Stock: {product.stock_quantity}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
