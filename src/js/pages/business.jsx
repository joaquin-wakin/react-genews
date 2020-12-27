import React from "react";

const Business = () => {
  return (
    <section id="business">
      <div className="container-fluid">
        <h1 className="page-heading">Business</h1>

        <div className="loading-spinner__container">
          <div className="loading-spinner__spinner"></div>
          <p>Getting news about business...</p>
        </div>

        <div className="no-match">
          {/* <i class="bx bx-news"></i> */}
          <i className="bx bx-unlink"></i>
          <p>No articles were found.</p>
        </div>

        <div className="grid business-grid"></div>
      </div>
    </section>
  );
};

export default Business;
