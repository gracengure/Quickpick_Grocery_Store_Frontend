
import React, { useState, useEffect } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Products from "./components/Products";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Fetch error:', error));
  }, []);

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

      // Decrease stock
      const updatedProducts = products.map(p =>
        p.id === productId ? { ...p, stock_quantity: p.stock_quantity - 1 } : p
      );
      setProducts(updatedProducts);
    }
  };

  // Update cart count whenever cart items change
  useEffect(() => {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartCount(totalItems);
  }, [cartItems]);

  return (
    <>
      <Home />
      <Navbar cartCount={cartCount} />
      <Products products={products} addToCart={addToCart} />
      <About />
      <Contact />
    </>
  );
}

export default App;
