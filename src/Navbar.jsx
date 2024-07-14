// Navbar.js
import React, { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Navbar({ cartCount, onCartIconClick }) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isUserDropdown, setIsUserDropdown] = useState(false);
 
  function toggleDown() {
    setIsDropdown(!isDropdown);
  }

  function toggleUserDown() {
    setIsUserDropdown(!isUserDropdown);
  }
  function handleSignOut() {
    console.log('Signing out...'); // Check if function is being called
    localStorage.removeItem('access_token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    
    // Simulate the redirection for debugging purpose
    console.log('Redirecting to login page...'); // Check if this log appears
    history.push('/login'); // Navigate to the login page after sign-out
  }
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-categories">
          Categories
          <FaCaretDown onClick={toggleDown} />
          {isDropdown && (
            <ul className="dropdown">
              <li><Link to="/products/fruits">Fruits</Link></li>
              <li><Link to="/products/vegetables">Vegetables</Link></li>
              <li><Link to="/products/grains">Grains</Link></li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <FaCartShopping onClick={onCartIconClick} />
          <span className="cart-count-badge">{cartCount}</span>
        </li>
        <li className="navbar-user">
          <FaUserAlt onClick={toggleUserDown} />
          {isUserDropdown && (
            <ul className="dropdown">
              <li><Link to='/userprofile'>User profile</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/signup'>Sign-up</Link></li>
              <li><a href="#sign-out" onClick={handleSignOut}>Sign-out</a></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;