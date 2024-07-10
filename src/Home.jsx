import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
function Home() {
  return (
    <div className='home-container'>
          <div>
        <nav>
            <ul className='navbar'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#fruits">Fruits</a>
                </li>
                <li>
                    <a href="#vegetables">Vegetables</a>
                </li>
                <li>
                    <a href="#meats">Meats</a>
                </li>
                <li>
                    <a href="#gains">Grains</a>
                </li>
                <li>
                    <a href="#cart"><FaCartShopping /></a>
                </li>
            </ul>
        </nav>
    </div>
    <div className='home-container'>
      <img src="https://i.pinimg.com/564x/7a/af/d9/7aafd92b142fb07d4ec28988978f6c9a.jpg" 
      alt="background"
      className='home-image' 
      />
    </div>

    </div>
  )
}

export default Home