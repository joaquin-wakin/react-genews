import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

function COVID19() {
  const [covid19, setCovid19] = useState([]);

  const fetchCOVID19 = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=coronavirus&skip=42&limit=21&from=2020-12-25&langs=en`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    document.cookie = "SameSite=None; Secure";
    setCovid19(response.news);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchCOVID19();
  }, []);

  return (
    <section id="covid-19">
      <div className="container-fluid">
        <h1 className="page-heading">COVID-19</h1>

        <LoadingAnimation text="Getting news about COVID-19..." />

        <div className="grid">
          {covid19.map((covid19) => {
            return (
              <div className="grid-col" key={`${covid19._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${covid19.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{covid19.title}</h1>
                    <p className="headline-article__description">{covid19.description}</p>

                    <div className="headline-article-link__container">
                      <a href={`${covid19.url}`} className="headline-article-link__link" target="_blank">
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

export default COVID19;
