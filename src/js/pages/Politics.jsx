import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Politics = () => {
  const [politics, setPolitics] = useState([]);

  const fetchPolitics = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=politics&skip=21&limit=21&from=2021-01-08&langs=en`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    setPolitics(response.news);
    document.cookie = "SameSite=None; Secure";

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchPolitics();
  }, []);

  return (
    <section id="politics">
      <div className="container-fluid">
        <h1 className="page-heading">Politics</h1>

        <LoadingAnimation text="Getting news about politics..." />

        <div className="grid">
          {politics.map((politics) => {
            return (
              <div className="grid-col" key={`${politics._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${politics.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{politics.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${politics.url}`} target="_blank">
                        {politics.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(politics.elabDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{politics.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${politics.url}`} className="headline-article-link__link" target="_blank">
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

export default Politics;
