import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading">Genews</h1>
            <h3 className="footer-sub-heading">Get the latest news</h3>
            <p className="footer-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, voluptas ullam. Totam corporis fugiat, sequi facere dolores, asperiores odio fuga deleniti cum
              excepturi nam delectus. Inventore officiis ducimus quo. Sit!
            </p>
          </div>

          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading__other">Categories</h1>
            <ul className="menu-list">
              <FooterLink link="/" linkName="Today's Headlines" />
              <FooterLink link="#" linkName="Trending" />
              <FooterLink link="#" linkName="Business" />
              <FooterLink link="#" linkName="COVID-19" />
              <FooterLink link="#" linkName="Politics" />
              <FooterLink link="#" linkName="Sports" />
              <FooterLink link="#" linkName="Technology" />
            </ul>
          </div>

          <div className="col-3__small col-6__medium col-3__large">
            <h1 className="footer-heading__other">Information</h1>
            <ul className="menu-list">
              <FooterLink link="#" linkName="Privacy Policy" />
              <FooterLink link="#" linkName="Terms &amp; Conditions" />
              <FooterLink link="#" linkName="Third Party Libraries" />
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
      </div>
    </footer>
  );
};

const FooterLink = (props) => {
  return (
    <li className="menu-item">
      <a href={`${props.link}`} className="menu-link">
        {props.linkName}
      </a>
    </li>
  );
};

export default Footer;
