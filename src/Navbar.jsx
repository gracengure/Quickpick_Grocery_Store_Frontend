import React from 'react'

function Navbar() {
  return (
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
            </ul>
        </nav>
    </div>
  )
}

export default Navbar