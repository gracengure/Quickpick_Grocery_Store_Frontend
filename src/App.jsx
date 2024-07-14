// App.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
import CartModal from "./components/cart";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false); 
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
      .then(data => {
        setProducts(data);
        setFilteredProducts(data); 
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error.message);
      });
  }, []);

  const handleSearch = (nameCriteria) => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(nameCriteria.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);

    if (product && product.stock_quantity > 0) {
      const existingItem = cartItems.find(item => item.id === productId);

      if (existingItem) {
        const updatedCart = cartItems.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }

      const updatedProducts = products.map(p =>
        p.id === productId ? { ...p, stock_quantity: p.stock_quantity - 1 } : p
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);

    const product = products.find(p => p.id === productId);
    if (product) {
      const updatedProducts = products.map(p =>
        p.id === productId ? { ...p, stock_quantity: p.stock_quantity + 1 } : p
      );
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
    }
  };

  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems]);

  const handleCartIconClick = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  const handleCheckout = () => {
    const orderData = {
      user_id: localStorage.getItem('id'), 
      total_price: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    };

    fetch('http://127.0.0.1:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to create order');
        }
        return response.json();
      })
      .then(data => {
        console.log('Order created successfully:', data);
        setIsCartModalOpen(false); 
        setCartItems([]); 
      })
      .catch(error => {
        console.error('Error creating order:', error);
        // Handle error cases
      });
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Home  products={products} handleSearch={handleSearch}/>
      <Navbar cartCount={cartCount} />
      
      <Products
        products={filteredProducts}
        addToCart={addToCart}
        isLoggedIn={isLoggedIn}
        navigate={navigate}
      />
      <About />
      <Contact />
      <CartModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCartModal}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        handleCheckout={handleCheckout}
      />
    </>
  );
}

export default App;
