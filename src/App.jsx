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
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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
      });
  }, []);

  // Function to filter products based on search criteria
  const handleSearch = (nameCriteria) => {
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(nameCriteria.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  // Function to add a product to the cart and update stock
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
      setFilteredProducts(updatedProducts); // Update filtered products as well
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
      <SearchBar products={products} handleSearch={handleSearch} />
      <Products products={filteredProducts} addToCart={addToCart} />
      <About />
      <Contact />
    </>
  );
}

export default App;
