// src/App.jsx
import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
      <Navbar />
    </>
  );
}

export default App;
