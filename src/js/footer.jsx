import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading">Genews</h1>
            <h3 className="footer-sub-heading">Get the latest news</h3>
            <p className="footer-description">Access the latest trends, news about COVID-19, technology, and more within your device without any hassle.</p>
          </div>

          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading__other">Categories</h1>
            <ul className="menu-list">
              <FooterLink link="/" linkName="Today's Headlines" />
              <FooterLink link="trending" linkName="Trending" />
              <FooterLink link="business" linkName="Business" />
              <FooterLink link="covid-19" linkName="COVID-19" />
              <FooterLink link="politics" linkName="Politics" />
              <FooterLink link="sports" linkName="Sports" />
              <FooterLink link="technology" linkName="Technology" />
            </ul>
          </div>

          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading__other">Information</h1>
            <ul className="menu-list">
              <FooterLink link="privacy-policy" linkName="Privacy Policy" />
              <FooterLink link="terms-&amp;-conditions" linkName="Terms &amp; Conditions" />
              <FooterLink link="third-party-libraries" linkName="Third Party Libraries" />
            </ul>
          </div>

          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading__other">About</h1>
            <p className="footer-sub-heading__other">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, distinctio. Laborum facere quam iste molestiae cum fugiat porro tenetur expedita, esse optio
              saepe debitis impedit quod, amet sint vel molestias.
            </p>
          </div>
        </div>

        <p className="copyright">&copy; 2020 GENEWS | Get the latest news. All Rights Reserved</p>
      </div>
    </footer>
  );
};

const FooterLink = (props) => {
  return (
    <li className="menu-item">
      <Link className="menu-link" to={`${props.link}`}>
        {props.linkName}
      </Link>
    </li>
  );
};

export default Footer;
