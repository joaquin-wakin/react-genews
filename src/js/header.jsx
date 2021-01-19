import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import favicon from "./favicon-white.png";

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="container-fluid">
          <a href="/" className="nav-logo">
            <img src={`${favicon}`} alt="GENEWS' Logo.png" />
            Genews
          </a>

          <NavMenu />
          <MobileNavHamburger />
        </div>
      </nav>
    </header>
  );
};

const NavMenu = () => {
  return (
    <div className="nav-menu__container">
      <ul className="nav-menu__list">
        <NavLink link="/" linkName="Trending" />
        <NavLink link="/business" linkName="Business" />
        <NavLink link="/health" linkName="Health" />
        <NavLink link="/politics" linkName="Politics" />
        <NavLink link="/sports" linkName="Sports" />
        <NavLink link="/technology" linkName="Technology" />
        <NavLink link="/travel" linkName="Travel" />
      </ul>
    </div>
  );
};

const NavLink = (props) => {
  return (
    <li className="nav-menu__item">
      <Link className="nav-menu__link" to={`${props.link}`}>
        {props.linkName}
      </Link>
    </li>
  );
};

const MobileNavHamburger = () => {
  function SlideMenu() {
    $("body").addClass("disabled-scroll");
    $("#mobile-navigation").addClass("active");
    $("#overlay").addClass("active");
  }

  return (
    <div className="mobile-nav-hamburger">
      <i className="bx bx-menu hamburger-icon" onClick={SlideMenu}></i>
    </div>
  );
};

export default Header;
