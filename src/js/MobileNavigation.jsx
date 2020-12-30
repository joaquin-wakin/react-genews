import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

function CloseMenu() {
  $("#mobile-navigation").removeClass("active");
  $("#overlay").removeClass("active");
}

function displayNone() {
  $(window).on("resize", function () {
    if ($(window).width() > 992) {
      $("#mobile-navigation").removeClass("active");
      $("#overlay").removeClass("active");
    } else {
      $("#mobile-navigation").addClass("active");
      $("#overlay").addClass("active");
    }
  });
}

const MobileNavigation = () => {
  useEffect(() => {
    displayNone();
  }, []);

  return (
    <>
      <nav id="mobile-navigation">
        <div className="mobile-nav__inner-container">
          <div className="mobile-nav__header">
            <i className="bx bx-arrow-back" onClick={CloseMenu}></i>
            <h1 className="mobile-nav__heading">Genews</h1>
          </div>

          {/* <MobileSearchBar /> */}

          <h3 className="mobile-nav__text">Categories</h3>

          <div className="mobile-links">
            <ul className="mobile-links__list">
              <MobileNavLink link="/" linkName="Today's Headlines" />
              <MobileNavLink link="/business" linkName="Business" />
              <MobileNavLink link="/covid-19" linkName="COVID-19" />
              <MobileNavLink link="/politics" linkName="Politics" />
              <MobileNavLink link="/sports" linkName="Sports" />
              <MobileNavLink link="/technology" linkName="Technology" />
              <MobileNavLink link="/travel" linkName="Travel" />
              <MobileNavLink link="/trending" linkName="Trending" />
            </ul>
          </div>

          <h3 className="mobile-nav__text">Information</h3>
          <div className="mobile-links">
            <ul className="mobile-links__list">
              <MobileNavLink link="/privacy-policy" linkName="Privacy Policy" />
              <MobileNavLink link="/terms-&amp;-conditions" linkName="Terms &amp; Conditions" />
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
      <Link to={`${props.link}`} className="mobile-links__link" onClick={CloseMenu}>
        {props.linkName}
      </Link>
    </li>
  );
};

export default MobileNavigation;
