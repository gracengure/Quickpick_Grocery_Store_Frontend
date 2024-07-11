// src/App.jsx
// src/App.jsx
import React ,{useState} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import SearchBar from "./components/SearchBar";
import Contact from "./Contact"
import About from "./About";
import Products from "./components/Products";





  

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
    
    <Home/>
    <Navbar/>
    <Products/>
    <About/>
    <Contact/> 
    </>
  );
}

export default App