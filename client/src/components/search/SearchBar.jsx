import React from 'react';
import { useContext } from "react";
import {useSearchContext} from "../../redux/SearchContext"

const SearchBar = () => {
    const { searchQuery, updateSearchQuery } = useSearchContext();
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
        placeholder="Search..."
        className="p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
