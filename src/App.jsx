// src/App.jsx

import React ,{useState ,useEffect} from "react";
import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import SearchBar from "./components/SearchBar";
import Contact from "./Contact";
import About from "./About";
import Products from "./components/Products";


  

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update cart count whenever cart items change
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems]);
  return (
    <>
    
    <Home/>
    <Navbar cartCount={cartCount} />
      <Products addToCart={addToCart} />
    <About/>
    <Contact/> 
      <Home />
      <div className="background-image">
        <SearchBar onSearch={handleSearch} />
      </div>

      
    </>
  );
}

export default App;
