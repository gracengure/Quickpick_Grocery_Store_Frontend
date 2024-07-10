import React from 'react'
import { FaCartShopping } from 'react-icons/fa6';
function Navbar() {
  return (
    <div className="home-container">
     <nav>
        <ul className="navbar">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#categories">Categories</a>
            <ul className="dropdown">
              <li><a href="#fruits">Fruits</a></li>
              <li><a href="#vegetables">Vegetables</a></li>
              <li><a href="#meats">Meats</a></li>
              <li><a href="#grains">Grains</a></li>
            </ul>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cart"><FaCartShopping /></a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar