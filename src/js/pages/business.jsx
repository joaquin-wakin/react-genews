import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import Disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Business = () => {
  const [business, setBusiness] = useState([]);

  const fetchBusiness = async () => {
    $(".loading-spinner__container").addClass("display");

    var currentDate = new Date();
    var month = String(currentDate.getMonth() + 1).padStart(2, "0");
    var day = String(currentDate.getDate()).padStart(2, "0");
    var year = currentDate.getFullYear();

    currentDate = month + "-" + day + "-" + year;

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=business&limit=21&from=${year}&langs=en&skip=21`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "90001d1797msh553ef0c39769ba6p133ae0jsnc03200d885bc",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    setBusiness(response.news);
    document.cookie = "SameSite=None; Secure";

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    Disabled();
    fetchBusiness();
  }, []);

  return (
    <section id="business">
      <div className="container-fluid">
        <h1 className="page-heading">Business</h1>

        <LoadingAnimation text="Getting news about business..." />

        <div className="grid">
          {business.map((business) => {
            return (
              <div className="grid-col" key={`${business._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${business.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{business.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${business.url}`} target="_blank">
                        {business.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(business.elabDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{business.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${business.url}`} className="headline-article-link__link" target="_blank">
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

export default Business;
