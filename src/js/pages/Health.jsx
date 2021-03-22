import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

function Health() {
  const [health, setHealth] = useState([]);

  const fetchCOVID19 = async () => {
    $(".loading-spinner__container").addClass("display");

    const category = "health";
    var currentYear = new Date().getFullYear();

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=${category}&limit=21&from=${currentYear}&langs=en&skip=21`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "90001d1797msh553ef0c39769ba6p133ae0jsnc03200d885bc",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    document.cookie = "SameSite=None; Secure";
    setHealth(response.news);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchCOVID19();
  }, []);

  return (
    <section id="covid-19">
      <div className="container-fluid">
        <h1 className="page-heading">Health</h1>

        <LoadingAnimation text="Getting news about health..." />

        <div className="grid">
          {health.map((health) => {
            return (
              <div className="grid-col" key={`${health._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${health.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{health.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${health.url}`} target="_blank">
                        {health.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(health.elabDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{health.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${health.url}`} className="headline-article-link__link" target="_blank">
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Health;
