import React from "react";

import SearchIcon from "@material-ui/icons/Search";

function search() {
  return (
    <span className="search">
      <SearchIcon className="search-icon" />
      <input
        type="search"
        placeholder="Search Forrestbook"
        className="search-input"
      />
    </span>
  );
}

export default search;
