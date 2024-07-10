// src/App.jsx
import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import SearchBar from "./components/SearchBar";
import Contact from "./Contact"
import About from "./About";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
    <Home/>
    
    <Navbar/>
    <About/>
    <Contact/> 
    </>
  );
}

export default App
