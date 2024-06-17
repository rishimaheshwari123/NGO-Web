// SearchContext.js

import React, { createContext, useState, useContext } from "react";

// Create a new context
const SearchContext = createContext();

// Create a custom hook to use the search context
export const useSearchContext = () => {
  return useContext(SearchContext);
};

// Create the provider component
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider value={{ searchQuery, updateSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
