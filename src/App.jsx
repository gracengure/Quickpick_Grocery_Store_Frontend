// src/App.jsx
import React ,{useState} from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import SearchBar from "./components/SearchBar";
import Contact from "./Contact"
import About from "./About";
import UserProfile from "./User_profile"




  

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <>
    <Navbar/> 
    <Home/>
    
    <Navbar/>
    <User Profile/>
    <About/>
    <Contact/> 
    </>
  );
}

export default App
