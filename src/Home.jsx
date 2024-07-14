import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import CreateProduct from './components/CreateProduct';

import React ,{ useState }from 'react';
import Navbar from './Navbar';
function Home() {
 
  return (
    <>
    <div className="home-container">
    <Navbar/>
      <div className='search'>
        <SearchBar onSearch={handleSearch} />
      </div>
          </div>
          <CreateProduct/>
    </>

      
      
  );
}

export default Home;