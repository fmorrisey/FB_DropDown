import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { Grid } from "react-feather";
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HelpIcon from "@material-ui/icons/Help";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <Navbar>
      <Navitem icon={<AppsIcon />} />
      <Navitem icon={<MessengerIcon />} />
      <Navitem icon={<BellIcon />} />

      <Navitem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </Navitem>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function Navitem(props) {
  const [open, setOpen] = useState(true);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownUser() {
    return <span>TEST</span>;
  }

  function DropdownItem(props) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        href="#"
        className="menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span
          className={props.leftIcon ? "icon-button icon-left" : ""}
          style={{}}
        >
          {props.leftIcon}
        </span>

        {props.children}

        <span className={props.rightIcon ? "icon-button icon-right" : ""}>
          {props.rightIcon}
        </span>
      </a>
    );
  }

  function DropdownHR() {
    return <hr />;
  }

  function DropdownFooter() {
    return (
      <p classNames="dropdown-footer">
        <a href="#">Privacy</a>
        <b> · </b>
        <a href="#">Terms</a>
        <b> · </b>
        <a href="#">Advertising</a>
        <b> · </b>
        <a href="#">Ad Choices</a>
        <b> · </b>
      </p>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* Main Menu */}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}

        // This allows React to toggle the classes
      >
        <div className="menu">
          {/* MY PROFILE */}
          <DropdownItem leftIcon={<AccountCircleIcon />}>
            Forrest Morrisey
            <br />
            See your profile
          </DropdownItem>
          <DropdownHR />
          {/* FEEDBACK */}
          <DropdownItem leftIcon={<FeedbackIcon />}>
            Give Feedback
            <br />
            Help us improve the new Forrestbook
          </DropdownItem>
          <DropdownHR />

          {/* SETTINGS */}
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            <h4>Settings and Privacy</h4>
          </DropdownItem>

          {/* SUPPORT */}
          <DropdownItem
            leftIcon={<HelpIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="support"
          >
            <h4>Help & Support</h4>
          </DropdownItem>

          {/* accessibility */}
          <DropdownItem
            leftIcon={<AccessibilityIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="accessibility"
          >
            <h4>Display & Accessibility</h4>
          </DropdownItem>

          {/* accessibility */}
          <DropdownItem leftIcon={<ExitToAppIcon />}>
            <h4>Log Out</h4>
          </DropdownItem>
          <DropdownFooter />
        </div>
      </CSSTransition>

      {/* Settings Menu */}
      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        // This allows React to toggle the classes
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>

      {/* Support Menu */}
      <CSSTransition
        in={activeMenu === "support"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        // This allows React to toggle the classes
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>

      {/* Accessibility Menu */}
      <CSSTransition
        in={activeMenu === "accessibility"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
        // This allows React to toggle the classes
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main" />
          <DropdownItem leftIcon={<CogIcon />} rightIcon={<ChevronIcon />}>
            Settings
          </DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
