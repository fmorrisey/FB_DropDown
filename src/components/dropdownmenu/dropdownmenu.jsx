import React, { useState } from "react";

// PACKAGES
import { CSSTransition } from "react-transition-group";

// LOCAL
import { ReactComponent as BellIcon } from "../../icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../icons/caret.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as BoltIcon } from "../../icons/bolt.svg";

// @MATERIAL UI
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FeedbackIcon from "@material-ui/icons/Feedback";
import HelpIcon from "@material-ui/icons/Help";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EnhancedEncryptionIcon from "@material-ui/icons/EnhancedEncryption";
import LockIcon from "@material-ui/icons/Lock";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import LanguageIcon from "@material-ui/icons/Language";

export default function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
    console.log(height);
  }

  function DropdownUser() {
    return <span>TEST</span>;
  }

  function DropdownHeader(props) {
    const changeMenu = () => props.goToMenu && setActiveMenu(props.goToMenu);
    return (
      <a href="#" className="menu-header" onClick={changeMenu}>
        <span className={props.leftIcon ? "icon-button__noBG icon-left" : ""}>
          {props.leftIcon}
        </span>
        <h2>{props.children}</h2>
      </a>
    );
  }

  function DropdownItem(props) {
    const changeMenu = () => props.goToMenu && setActiveMenu(props.goToMenu);

    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href="#" className="menu-item" onClick={changeMenu}>
        <span className={props.leftIcon ? " icon-button__BG icon-left" : ""}>
          {props.leftIcon}
        </span>

        {props.children}

        <span className={props.rightIcon ? " icon-button__BG icon-right" : ""}>
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
      <span className="dropdown-footer">
        <a href="#">Privacy</a>
        <b> · </b>
        <a href="#">Terms</a>
        <b> · </b>
        <a href="#">Advertising</a>
        <b> · </b>
        <a href="#">Ad Choices</a>
        <b> · </b>
        <a href="#">Cookies</a>
        <b> · </b>
        <a href="#">More</a>
        <b> · </b>
        <a>Forrestbook @ 2021</a>
      </span>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      {/* Main Menu */}
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        // This allows React to toggle the classes
        classNames="menu-primary"
        onEnter={calcHeight}
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
            help us improve the new Forrestbook
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
            <h4>Help &amp; Support</h4>
          </DropdownItem>

          {/* accessibility */}
          <DropdownItem
            leftIcon={<AccessibilityIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="accessibility"
          >
            <h4>Display &amp; Accessibility</h4>
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
          <DropdownHeader leftIcon={<ArrowIcon />} goToMenu="main">
            Settings &amp; Privacy
          </DropdownHeader>
          <DropdownItem leftIcon={<CogIcon />}>Settings</DropdownItem>
          <DropdownItem leftIcon={<EnhancedEncryptionIcon />}>
            Privacy Checkup
          </DropdownItem>
          <DropdownItem leftIcon={<LockIcon />}>Privacy Shortcuts</DropdownItem>
          <DropdownItem leftIcon={<FormatListBulletedIcon />}>
            Activity Logs
          </DropdownItem>
          <DropdownItem leftIcon={<CogIcon />}>
            News Feed Preferences
          </DropdownItem>
          <DropdownItem leftIcon={<LanguageIcon />}>Language</DropdownItem>
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
