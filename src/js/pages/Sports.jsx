import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Sports = () => {
  const [sports, setSports] = useState([]);

  const fetchSports = async () => {
    $(".loading-spinner__container").addClass("display");

    const category = "basketball,football,soccer,volleyball";
    var currentYear = new Date().getFullYear();

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=${category}&limit=21&from=${currentYear}&langs=en&skip=21`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "90001d1797msh553ef0c39769ba6p133ae0jsnc03200d885bc",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    setSports(response.news);
    document.cookie = "SameSite=None; Secure";

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchSports();
  }, []);

  return (
    <section id="sports">
      <div className="container-fluid">
        <h1 className="page-heading">Sports</h1>

        <LoadingAnimation text="Getting news about sports..." />

        <div className="grid">
          {sports.map((sports) => {
            return (
              <div className="grid-col" key={`${sports._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${sports.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{sports.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${sports.url}`} target="_blank">
                        {sports.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(sports.elabDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{sports.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${sports.url}`} className="headline-article-link__link" target="_blank">
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
};

export default Sports;
