import React, { useEffect } from "react";

import disabled from "../Disabled";

const PageNotFound = () => {
  useEffect(() => {
    disabled();
  });

  return (
    <section id="page-not-found">
      <div className="container-fluid">
        <i className="bx bx-unlink"></i>
        <p>Page not found</p>
        <div className="reload-button__container">
          <a href="/">Reload</a>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
