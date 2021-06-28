import React from "react";
import "./navbar.scss";

import { CSSTransition } from "react-transition-group";

import Search from "../search/search";

import FBLogo from "../../assets/icons/fblogo58.png";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      <img src={FBLogo} className="logo" />

      <Search />

      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}
