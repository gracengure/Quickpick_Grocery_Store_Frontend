import React ,{ useState }from 'react';
import Navbar from './Navbar';
function Home() {
 
  return (
      <div className="home-container">
        <Navbar/>
        <div className='search'>
        </div>
      </div>
  );
}

export default Home;