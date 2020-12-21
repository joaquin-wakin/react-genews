import React from "react";
import { Link } from "react-router-dom";

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
        </div>
      </nav>
    </header>
  );
};

const NavMenu = () => {
  return (
    <div className="nav-menu__container">
      <ul className="nav-menu__list">
        <Link to="/">
          <li className="nav-menu__item">
            <span className="nav-menu__link active">Today&apos;s Headlines</span>
          </li>
        </Link>

        {/* <Link to="/categories/trending"> */}
        <NavLink linkName="Trending" />
        {/* </Link> */}

        {/* <Link to="/categories/business"> */}
        <NavLink linkName="Business" />
        {/* </Link> */}

        <NavLink linkName="COVID-19" />
        <NavLink linkName="Politics" />
        <NavLink linkName="Sports" />
        <NavLink linkName="Technology" />
      </ul>
    </div>
  );
};

const NavLink = (props) => {
  return (
    <li className="nav-menu__item">
      <span className="nav-menu__link">{props.linkName}</span>
    </li>
  );
};

const SearchForm = () => {
  return (
    <div className="search-form__container">
      <form className="search-form__form">
        <div className="input-container">
          <i className="bx bx-search search-icon"></i>
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
      </form>
    </div>
  );
};

export default Header;
