import React from "react";
import "./navbar.scss";

import { CSSTransition } from "react-transition-group";

import FBLogo from "../../assets/icons/fblogo58.png";
import SearchIcon from "@material-ui/icons/Search";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={FBLogo} className="logo" />

      <span className="search">
        <SearchIcon className="search-icon" />
        <input
          type="search"
          placeholder="Search Forrestbook"
          className="search-input"
        />
      </span>

      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}
