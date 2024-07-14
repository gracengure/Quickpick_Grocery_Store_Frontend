
import React, { useState, useEffect } from "react";
// src/App.jsx
// src/App.jsx
import React ,{useState} from "react";
import Home from "./Home";
// import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import Products from "./components/Products";


  

function App() {
  return (
    <>
    
    <Home/>
    {/* <Navbar/> */}
    <Products/>
    <About/>
    <Contact/> 
    </>
  );
}

export default App
