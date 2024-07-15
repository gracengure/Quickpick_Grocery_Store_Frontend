import React, { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Products from "./components/Products";
import SearchBar from "./components/SearchBar";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // Update cart count whenever cart items change
  useEffect(() => {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartCount(totalItems);
  }, [cartItems]);

  return (
    <>
      <Home />
      <Navbar cartCount={cartCount} />
      <Products addToCart={addToCart} />
      <About />
      <Contact />
    </>
  );
}
export default App;
