import React from "react";
import "./search.css";

const Search = ({ filter, setFilter }) => {
  return (
    <div className="  items-center my-1 search-wrapper">
       <div className="fw-bold mr-2 "style={{fontSize:"15px"}}>Search</div>
      <input className="search-input" type="text" placeholder="Search item" value={filter || ""} onChange={(e) => setFilter(e.target.value)} style={{fontSize:"16px"}} />
    </div>
    
  
  );
};

export default Search;
