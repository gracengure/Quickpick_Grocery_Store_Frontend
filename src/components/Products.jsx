import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userLoggedIn = localStorage.getItem('access_token') !== null; 

    setIsLoggedIn(userLoggedIn);

    fetch('http://127.0.0.1:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      navigate.push('/login'); 
      return;
    }
    addToCart(product);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3 className='product-name'>{product.name}</h3>
            <Link to={`/product/${product.id}`}>
              <img className="product-img" src={product.image_url} alt={product.name} />
            </Link>
            <div className='product-details'>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>In Stock: {product.stock_quantity}</p>
              {isLoggedIn && ( 
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              )}
              {!isLoggedIn && ( 
                <p>Please <Link to="/login">log in</Link> to add to cart</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
