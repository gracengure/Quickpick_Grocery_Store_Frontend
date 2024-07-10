// src/App.jsx
import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import SearchBar from "./components/SearchBar";

import Home from "./Home"
import Navbar from "./Navbar"
function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
    <Home/>
    <Navbar/>
    </>
  );
}

export default App
