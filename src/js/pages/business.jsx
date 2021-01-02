import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Business = () => {
  const [business, setBusiness] = useState([]);

  const fetchBusiness = async () => {
    $(".loading-spinner__container").addClass("display");

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=digital%20marketing&skip=1&limit=21&from=2020-12-25&langs=en`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    const response = await data.json();
    document.cookie = "SameSite=None; Secure";
    setBusiness(response.news);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
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
                    <p className="headline-article__description">{business.description}</p>

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
