import React from "react";

const Headlines = () => {
  return (
    <section id="headlines">
      <div className="container-fluid">
        <h1 className="page-heading">Today&apos;s Headlines</h1>

        <div className="loading-spinner__container">
          <div className="loading-spinner__spinner"></div>
          <p>Getting the latest news...</p>
        </div>

        <div className="no-match">
          {/* <i class="bx bx-news"></i> */}
          <i className="bx bx-unlink"></i>
          <p>No articles were found.</p>
        </div>

        <div className="grid headlines-grid"></div>
      </div>
    </section>
  );
};

export default Headlines;
