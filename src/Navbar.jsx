import React ,{useState}from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Navbar() {
const[isDropdown ,setIsDropdown]=useState(false)

function toggleDown(){
  setIsDropdown(!isDropdown)

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
            <li><Link to="/products/fruits">Fruits</Link></li>
        <li><Link to="/products/vegetables">Vegetables</Link></li>
        <li><Link to="/products/grains">Grains</Link></li>
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
          <li>
            <a href="#user loggin"><FaUserAlt /></a>
          </li>
        </ul>
      </nav>
    </div>
  )
  }

export default Navbar