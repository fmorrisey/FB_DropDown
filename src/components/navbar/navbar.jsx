/**
 * NAVBAR COMPONENT
 *
 * This component is the main container that holds child components such as Search and DropdownMenu
 */

import React from "react";
import "./navbar.scss";

import { CSSTransition } from "react-transition-group";

import Search from "../search/search";

import Shortcuts from "./shortcuts/shortcuts";

import FBLogo from "../../assets/icons/fblogo58.png";

export default function Navbar(props) {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <img src={FBLogo} className="logo" />

      {/* SEARCH */}
      <Search />

      {/* SHORTCUTS */}
      <Shortcuts />

      {/* MENUS */}
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}
