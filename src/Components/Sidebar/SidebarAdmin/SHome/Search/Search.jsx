import React, {useState} from "react";
import "./search.css";

const Search = ({ filter, setFilter }) => {
  console.log(filter, setFilter, 'asdfsa')
  const [filterValue,setFilterValue]=useState("")
  const filterData=(e)=>{
    setFilterValue(prev=>prev=e.target.value)
    // let filtered = filter.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toLowerCase().includes(e.target.value)))
    let filtered = filter.filter(item => {
      // Convert the search term to a string for consistent comparison
      const searchStr = String(e.target.value);
  
      // Check if any value in the object contains the search term
      for (const key in item) {
        if (key !== "foto" && item[key] && String(item[key]).includes(searchStr)) {
          return true; // Include the item in the result
        }
      }
  
      return false; // Exclude the item from the result
    });
    console.log(filtered, 'filtered')
    setFilter({data: filtered, keyword: filterValue});
  }
  return (
    <div className="  items-center my-3 search-wrapper">
      <div className="fw-bold mr-2 "style={{fontSize:"15px"}}>Search</div>
      <input className="search-input" type="text" placeholder="Search item" value={filterValue || ""} onChange={(e) => filterData(e)} style={{fontSize:"16px"}}/>
    </div>
  );
};

export default Search;
