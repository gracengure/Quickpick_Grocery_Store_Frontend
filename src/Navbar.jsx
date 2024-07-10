import React ,{useState}from 'react'
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
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
          <li>
         Categories
            <FaCaretDown onClick={toggleDown}/>
            { isDropdown &&(<ul className="dropdown">
              <li><a href="#fruits">Fruits</a></li>
              <li><a href="#vegetables">Vegetables</a></li>
              <li><a href="#meats">Meats</a></li>
              <li><a href="#grains">Grains</a></li>
            </ul>)}
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