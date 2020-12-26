import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function CloseMenuOnClick() {
  $("body").removeClass("scroll-disabled");
  $("#mobile-navigation").removeClass("active");
  $("#overlay").removeClass("active");
}

const MobileNavigation = () => {
  return (
    <>
      <nav id="mobile-navigation">
        <div className="mobile-nav__inner-container">
          <div className="mobile-nav__header">
            <i className="bx bx-arrow-back" onClick={CloseMenuOnClick}></i>
            <h1 className="mobile-nav__heading">Genews</h1>
          </div>

          <div className="mobile-links">
            <ul className="mobile-links__list">
              <MobileNavLink link="/" linkName="Today's Headlines" />
              <MobileNavLink link="/trending" linkName="Trending" />
              <MobileNavLink link="/business" linkName="Business" />
              <MobileNavLink link="/covid-19" linkName="COVID-19" />
              <MobileNavLink link="/politcs" linkName="Politics" />
              <MobileNavLink link="/sports" linkName="Sports" />
              <MobileNavLink link="/technology" linkName="Technology" />
            </ul>
          </div>

          <div id="copyrights">
            <p>&copy; 2020 GENEWS | Get the latest news. All Rights Reserved</p>
          </div>
        </div>
      </nav>

      <div id="overlay"></div>
    </>
  );
};

const MobileNavLink = (props) => {
  return (
    <li className="mobile-links__item">
      <Link to={`${props.link}`} className="mobile-links__link" onClick={CloseMenuOnClick}>
        {props.linkName}
      </Link>
    </li>
  );
};

export default MobileNavigation;
