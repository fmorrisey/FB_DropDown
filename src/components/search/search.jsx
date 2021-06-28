import React from "react";
import "./search.scss";

import SearchIcon from "@material-ui/icons/Search";

export default function search() {
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
