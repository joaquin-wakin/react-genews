import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Sports = () => {
  return (
    <section id="future">
      <div className="container-fluid">
        <h1 className="page-heading">Sports</h1>

        <LoadingAnimation text="Getting news about sports..." />
      </div>
    </section>
  );
};

export default Sports;
