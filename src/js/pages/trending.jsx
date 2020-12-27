import React from "react";

const Trending = () => {
  return (
    <section id="trending">
      <div className="container-fluid">
        <h1 className="page-heading">Trending</h1>

        <div className="loading-spinner__container">
          <div className="loading-spinner__spinner"></div>
          <p>Getting latest trending news...</p>
        </div>

        <div className="no-match">
          {/* <i class="bx bx-news"></i> */}
          <i className="bx bx-unlink"></i>
          <p>No articles were found.</p>
        </div>

        <div className="grid trending-grid"></div>
      </div>
    </section>
  );
};

export default Trending;
