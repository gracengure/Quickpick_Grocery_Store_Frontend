import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import CreateProduct from './components/CreateProduct';

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
    <div className="home-container">
      {/* <div className='search'>
        <SearchBar onSearch={handleSearch} />
      </div> */}
          </div>
          <CreateProduct/>
    </>

  );
}

export default Home;