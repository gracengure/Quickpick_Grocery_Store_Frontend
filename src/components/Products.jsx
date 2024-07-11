
import React, { useEffect, useState } from 'react';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('http://127.0.0.1:5000/products'); // updated URL
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Products fetched:', data);
        setProducts(data.products); // assuming the API returns an object with a `products` property
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div className="products-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
         
          <h3>{product.name}</h3>
          <img src={product.image_url} alt={product.name} /> <img src={product.image_url} alt={product.name} />
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>In Stock: {product.stock_quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;