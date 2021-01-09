import React, { useState, useEffect } from "react";
import $ from "jquery";
import "regenerator-runtime/runtime";

import disabled from "../Disabled";

import LoadingAnimation from "../LoadingAnimation";

const Technology = () => {
  const [technology, setTechnology] = useState([]);

  const fetchTechnology = async () => {
    $(".loading-spinner__container").addClass("display");

    const category = "android,iphone,macbook,microsoft,pc,samsung,technology";

    const data = await fetch(`https://news67.p.rapidapi.com/topic-research?search=${category}&skip=21&limit=21&from=2021-01-8&langs=en,ph`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    });

    document.cookie = "SameSite=None; Secure";
    const response = await data.json();
    setTechnology(response.news);

    $(".loading-spinner__container").removeClass("display");
  };

  useEffect(() => {
    disabled();
    fetchTechnology();
  }, []);

  return (
    <section id="technology">
      <div className="container-fluid">
        <h1 className="page-heading">Technology</h1>

        <LoadingAnimation text="Getting news about technology..." />

        <div className="grid">
          {technology.map((technology) => {
            return (
              <div className="grid-col" key={`${technology._id}`}>
                <div className="headline-article__container">
                  <div className="headline-article__header">
                    <img src={`${technology.image}`} alt="" />
                  </div>

                  <div className="headline-article__body">
                    <h1 className="headline-article__heading">{technology.title}</h1>
                    <p className="source-name">
                      Source:{" "}
                      <a href={`${technology.url}`} target="_blank">
                        {technology.source}
                      </a>
                    </p>

                    <p className="published-date">
                      Published at <b>{new Date(technology.elabDate).toLocaleString()}</b>
                    </p>

                    <p className="headline-article__description">{technology.summarization}</p>

                    <div className="headline-article-link__container">
                      <a href={`${technology.url}`} className="headline-article-link__link" target="_blank">
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

export default Technology;
