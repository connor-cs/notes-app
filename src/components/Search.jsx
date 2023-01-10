import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ setSearch }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        
        placeholder="type to search..."
        onChange={(e)=>setSearch(e.target.value)}
      ></input>
    </div>
  );
}