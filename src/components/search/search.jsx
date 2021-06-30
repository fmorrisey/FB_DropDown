/**
 * SEARCH BAR COMPONENT
 *
 * This component is located in the navigation bar
 * Non-functional display only component
 * In need of CSS correction to mimic fb search bar component
 */

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
