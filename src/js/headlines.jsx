import React, { useState, useEffect } from 'react'
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "./Disabled";

import LoadingAnimation from "./LoadingAnimation";

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);

  const fetchHeadlineArticles = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch("https://news67.p.rapidapi.com/inter-country?country2=ph&langs=en&country1=ph&skip=1&limit=21", {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    document.cookie = "SameSite=None; Secure";
    setHeadlines(response);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchHeadlineArticles();
  }, []);

  return (
    <section id="headlines">
      <div className="container-fluid">
        <h1 className="page-heading">Today&apos;s Headlines</h1>

        <LoadingAnimation text="Getting the latest news..." />

        <div className="grid headlines-grid">
          {headlines.map((headline) => {
            return (
              <div className="grid-col" key={`${headline.id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${headline.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{headline.title}</h1>
                    <p className="headline-article__description">{headline.description}</p>

                    <div className="headline-article-link__container">
                      <a href={`${headline.url}`} className="headline-article-link__link" target="_blank">
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

export default Headlines;
