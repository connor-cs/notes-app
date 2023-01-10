import React from "react";
import { MdSearch } from "react-icons/md";

export default function Search({ setSearch, setFilteredCat }) {
  
  const handleTagSelect = (e) => {
    console.log(e.target.value);
    setFilteredCat(e.target.value)
  };

  return (
    <div className="search-container">
      <div className="search">
        <MdSearch className="search-icon" size="1.3em" />

        <input
          type="text"
          placeholder="type to search..."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <select className="dropdown" onChange={handleTagSelect}>
        <option disabled="disabled" selected="selected">
          Select Tag
        </option>
        <option value="work" style={{ color: "#3a86ff" }}>
          Work
        </option>
        <option value="study" style={{ color: "#8338ec" }}>
          Study
        </option>
        <option value="fitness" style={{ color: "#fb5607" }}>
          Fitness
        </option>
        <option value="personal" style={{ color: "#ff006e" }}>
          Personal
        </option>
        <option value="other" style={{ color: "#ffbe0b" }}>
          Other
        </option>
      </select>
    </div>
  );
}
