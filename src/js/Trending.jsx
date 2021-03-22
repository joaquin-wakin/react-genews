import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import Disabled from "./Disabled";

import LoadingAnimation from "./LoadingAnimation";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch("https://news67.p.rapidapi.com/inter-country?country2=ph&langs=en&country1=ph&limit=21&skip=21", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "90001d1797msh553ef0c39769ba6p133ae0jsnc03200d885bc",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    setTrending(response);
    document.cookie = "SameSite=None; Secure";

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    Disabled();
    fetchTrending();
  }, []);

  return (
    <section id="headlines">
      <div className="container-fluid">
        <h1 className="page-heading">Trending News</h1>

        <LoadingAnimation text="Getting trending news..." />

        <div className="grid headlines-grid">
          {trending.map((trending) => {
            return (
              <div className="grid-col" key={`${trending.id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${trending.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{trending.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${trending.url}`} target="_blank">
                        {trending.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(trending.publishedDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{trending.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${trending.url}`} className="headline-article-link__link" target="_blank">
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

export default Trending;
