import React from "react";
import { Link } from "react-router-dom";

import favicon from "./favicon-white.png";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-4__small col-6__medium col-4__large">
            <h1 className="footer-heading">
              <img src={`${favicon}`} alt="GENEWS' Logo.png" />
              Genews
            </h1>
            <h3 className="footer-sub-heading">Get the latest news</h3>
            <p className="footer-description">Access the latest trends, news about COVID-19, technology, and more within your device without any hassle.</p>
          </div>

          <div className="col-4__small col-6__medium col-4__large">
            <h1 className="footer-heading__other">Categories</h1>
            <ul className="menu-list">
              <FooterLink link="/" linkName="Today's Headlines" />
              <FooterLink link="/business" linkName="Business" />
              <FooterLink link="/covid-19" linkName="COVID-19" />
              <FooterLink link="/politics" linkName="Politics" />
              <FooterLink link="/sports" linkName="Sports" />
              <FooterLink link="/technology" linkName="Technology" />
              <FooterLink link="/travel" linkName="Travel" />
              <FooterLink link="/trending" linkName="Trending" />
            </ul>
          </div>

          <div className="col-4__small col-6__medium col-4__large">
            <h1 className="footer-heading__other">Contact Us</h1>
            <div>
              <form className="contact-us__form">
                <input type="hidden" name="form-name" value="contact" />

                <div className="input-container">
                  <i className="bx bx-user"></i>
                  <input type="text" className="input-input" name="username" placeholder="Username" required />
                </div>

                <div className="input-container">
                  <i className="bx bx-envelope"></i>
                  <input type="email" className="input-input" name="email" placeholder="E-mail" required />
                </div>

                <div className="input-container">
                  <i className="bx bx-tag-alt"></i>
                  <input type="text" className="input-input" name="subject" placeholder="Subject" required />
                </div>

                <div className="input-container">
                  <textarea className="input-input" name="message" placeholder="Type a message..." rows="8" required></textarea>
                </div>

                <button className="send-button">Send message</button>
              </form>
            </div>
          </div>
        </div>

        <p className="copyright">&copy; 2021 GENEWS | Get the latest news. All Rights Reserved</p>
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
