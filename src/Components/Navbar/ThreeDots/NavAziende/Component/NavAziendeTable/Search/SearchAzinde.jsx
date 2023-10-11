import React from "react";
import "./search.css";
import { useState } from "react";

const Search = ({ rowsCatAziende, setRowsCatAziende }) => {
  const [filterValue,setFilterValue]=useState("")
  const filterData=(e)=>{
    setFilterValue(e.target.value)
    setRowsCatAziende(rowsCatAziende.filter((data)=>data.includes(e.target.value)))
  }
  return (
    <div className="  items-center my-3 search-wrapper">
      <div className="fw-bold mr-2 "style={{fontSize:"15px"}}>Search</div>
      <input className="search-input" type="text" placeholder="Search item" value={filterValue || ""} onChange={(e) => filterData(e)} style={{fontSize:"16px"}}/>
    </div>
  );
};

export default Search;
