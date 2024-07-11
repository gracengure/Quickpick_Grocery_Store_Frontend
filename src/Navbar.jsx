import React ,{useState}from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {
const[isDropdown ,setIsDropdown]=useState(false)
const[isUserDropdown,setIsUserDropdown]=useState(false)
function toggleDown(){
  setIsDropdown(!isDropdown)
}
function toggleUserDown(){
  setIsUserDropdown(!isUserDropdown)
}
  return (
    <div className="home-container">
     <nav>
        <ul className="navbar">
          <li>
          <a href="#">Home</a>
          </li>
          <li className="navbar-categories">
         Categories
            <FaCaretDown onClick={toggleDown}/>
            { isDropdown &&(<ul className="dropdown">
              <li><a href="#fruits">Fruits</a></li>
              <li><a href="#vegetables">Vegetables</a></li>
              
              <li><a href="#grains">Grains</a></li>
            </ul>)}
          </li>
          <li>
          <Link to="/about" >About</Link>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#cart"><FaCartShopping /></a>
          </li>
          <li className="navbar-user">
            <FaUserAlt onClick={toggleUserDown} />
            {isUserDropdown && (
              <ul className="dropdown">
                <li><a href="#userprofile">User profile</a></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Sign-up</Link></li>
                <li><a href="#sign-out">Sign-out</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
      </div>)}


export default Navbar