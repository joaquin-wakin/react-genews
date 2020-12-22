import React from "react";

const Headlines = () => {
  return (
    <section id="headlines">
      <div className="container-fluid">
        <h1 className="headlines__heading">Today's Headlines</h1>

        <div className="loading-spinner__container">
          <div className="loading-spinner__spinner"></div>
          <p>Getting the latest news...</p>
        </div>

        <div className="grid headlines-grid"></div>
      </div>
    </section>
  );
};

export default Headlines;
