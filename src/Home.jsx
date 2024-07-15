import React from 'react';
import SearchBar from './components/SearchBar';
import CreateProduct from './components/CreateProduct';

function Home({products,handleSearch}) {
  

  return (
    <>
    <div className="home-container">
    <SearchBar products={products} handleSearch={handleSearch} />
          </div>
          <CreateProduct/>
    </>

  );
}

export default Home;