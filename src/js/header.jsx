import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

const Header = () => {
  return (
    <header>
      <nav className="nav-container">
        <div className="container-fluid">
          <a href="/" className="nav-logo">
            Genews
          </a>

          <NavMenu />
          <SearchForm />
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
        <NavLink link="/" linkName="Today's Headlines" />
        <NavLink link="/trending" linkName="Trending" />
        <NavLink link="/business" linkName="Business" />
        <NavLink link="/covid-19" linkName="COVID-19" />
        <NavLink link="/politics" linkName="Politics" />
        <NavLink link="/sports" linkName="Sports" />
        <NavLink link="/technology" linkName="Technology" />
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

const SearchForm = () => {
  return (
    <div className="search-form__container">
      <form className="search-form__form search-form">
        <div className="input-container">
          <i className="bx bx-search search-icon"></i>
          <input type="text" className="search-input" placeholder="Search" />
        </div>
      </form>
    </div>
  );
};

const MobileNavHamburger = () => {
  function SlideMenu() {
    $("body").addClass("scroll-disabled");
    $("#mobile-navigation").addClass("active");
    $("#overlay").addClass("active");

    $("#overlay").on("click", function () {
      $("#mobile-navigation").removeClass("active");
      $(this).removeClass("active");
    });
  }

  return (
    <div className="mobile-nav-hamburger">
      <i className="bx bx-menu hamburger-icon" onClick={SlideMenu}></i>
    </div>
  );
};

export default Header;
