import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Travel = () => {
  const [travel, setTravel] = useState([]);

  const fetchTravel = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=travel&skip=1&limit=21&from=2021-01-08&langs=en,ph`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    document.cookie = "SameSite=None; Secure";
    const response = await data.json();
    setTravel(response.news);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchTravel();
  }, []);

  return (
    <section id="technology">
      <div className="container-fluid">
        <h1 className="page-heading">Travel</h1>

        <LoadingAnimation text="Getting news about travel..." />

        <div className="grid">
          {travel.map((travel) => {
            return (
              <div className="grid-col" key={`${travel._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${travel.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{travel.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${travel.url}`} target="_blank">
                        {travel.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(travel.elabDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{travel.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${travel.url}`} className="headline-article-link__link" target="_blank">
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

export default Travel;
