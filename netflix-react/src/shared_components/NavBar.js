import React from "react";
import logo from "../Logos/logo_small_transparent.png";
import "./navbar.css";

// Material-UI Icons
import SearchIcon from "@material-ui/icons/Search";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

const NavBar = ({ pageType }) => {
  let otherCodes = null;
  if (pageType === "home") {
    otherCodes = (
      <div className="menu-bar">
        <select name="language" id="language">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="tamil">Tamil</option>
        </select>
      </div>
    );
  } else {
    otherCodes = (
      <div className="other-nav" id="other-nav">
        <div className="nav-items">
          <div className="nav-item">TV Shows</div>
          <div className="nav-item">Movies</div>
          <div className="nav-item">My List</div>
        </div>
        <div className="nav-symbols">
          <a href="#">
            <SearchIcon fontSize="large" className="nav-icon" />
          </a>
          <a href="#">
            <ScreenShareIcon fontSize="large" className="nav-icon" />
          </a>
          <a href="#">
            <AccountCircleIcon fontSize="large" className="nav-icon" />
          </a>
        </div>
      </div>
    );
  }

  const hamburgerMenuOpen = () => {
    let navEle = document.getElementById("other-nav");
    if (navEle.style.display === "none") {
      navEle.style.display = "block";
    } else {
      navEle.style.display = "none";
    }
  };
  return (
    <nav>
      <div className="mobile-device">
        <img src={logo} alt="VKFLIX LOGO" className="logo" />
        <a onClick={hamburgerMenuOpen} className="menu-icon">
          <MenuIcon fontSize="large" className="menu" />
        </a>
      </div>
      {otherCodes}
    </nav>
  );
};

export default NavBar;
