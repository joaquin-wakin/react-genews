import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrending = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch("https://news67.p.rapidapi.com/trending?limit=21&skip=21&langs=en", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    document.cookie = "SameSite=None;Secure";
    const response = await data.json();
    setTrending(response);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchTrending();
  }, []);

  return (
    <section id="trending">
      <div className="container-fluid">
        <h1 className="page-heading">Trending</h1>

        <LoadingAnimation text="Getting latest trending news..." />

        <div className="grid">
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
