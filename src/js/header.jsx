import React from "react";

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
        <li className="nav-menu__item">
          <a href="/" className="nav-menu__link active">
            Today&apos;s Headlines
          </a>
        </li>

        <NavLink link="#" linkName="Trending" />
        <NavLink link="#" linkName="Business" />
        <NavLink link="#" linkName="COVID-19" />
        <NavLink link="#" linkName="Politics" />
        <NavLink link="#" linkName="Sports" />
        <NavLink link="#" linkName="Technology" />
      </ul>
    </div>
  );
};

const NavLink = (props) => {
  return (
    <li className="nav-menu__item">
      <a href={`${props.link}`} className="nav-menu__link">
        {props.linkName}
      </a>
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
