/**
 * SHORTCUT MENU
 *
 * Located on top of the navbar, this shortcut menu enables
 * navigation to various parts of the fb_clone
 * non-functional only contains conditional rendering
 */

import React, { useState } from "react";
import "./shortcuts.scss";

import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";

export default function Shortcuts() {
  const [activeShortcut, setActiveShortcut] = useState("home");

  function ShortcutItem(props) {
    //   sets the current shortcut string
    const openShortcut = () => {
      props.goToShortcut && setActiveShortcut(props.goToShortcut);
    };

    return (
      <span
        // Conditional rendering based on active shortcut string
        // set the css class to true blue or false default
        className={
          activeShortcut === props.goToShortcut
            ? "shortcuts-engagement-active"
            : "shortcuts-engagement-default"
        }
        onClick={openShortcut}
      >
        <span className="icon-action">{props.icon}</span>
      </span>
    );
  }

  return (
    // Span wraps around the shortcut buttons
    <span className="shortcuts">
      <ShortcutItem icon={<HomeOutlinedIcon />} goToShortcut="home" />
      <ShortcutItem icon={<OndemandVideoOutlinedIcon />} goToShortcut="video" />
      <ShortcutItem icon={<StorefrontOutlinedIcon />} goToShortcut="market" />
      <ShortcutItem
        icon={<SupervisedUserCircleOutlinedIcon />}
        goToShortcut="group"
      />
      <ShortcutItem
        icon={<SportsEsportsOutlinedIcon />}
        goToShortcut="gaming"
      />
    </span>
  );
}
