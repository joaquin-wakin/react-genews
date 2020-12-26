import React from "react";
import $ from "jquery";

const Trending = () => {
  function GetSearchInputValue() {
    $(".search-form").on("submit", function (event) {
      event.preventDefault();
      const userInput = new $(".search-input").val();

      if ($(".search-input").val() == 0) {
        return false;
      } else {
        searchUserInput();
        this.reset();
      }

      function searchUserInput() {
        // console.log(userInput);

        const settings = {
          async: true,
          crossDomain: true,
          url: `https://news67.p.rapidapi.com/topic-research?search=${userInput}&skip=0&limit=21&from=2020-11-30&langs=en`,
          method: "GET",
          headers: {
            "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
            "x-rapidapi-host": "news67.p.rapidapi.com",
          },
        };

        $(".loading-spinner__container").addClass("display");
        $(".no-match").removeClass("display");

        $.ajax(settings).done(function (response) {
          // console.log(response);

          if (response.news.length == 0) {
            $(".page-heading").html(`No matches for "${userInput}"`);
            $(".trending-grid").empty();
            $(".loading-spinner__container").removeClass("display");
            $(".no-match").addClass("display");

            // console.log("Not found.");
          } else {
            $(".page-heading").html(`Search results for "${userInput}"`);
            $(".trending-grid").empty();
            $(".loading-spinner__container").removeClass("display");
            $(".no-match").removeClass("display");

            for (var index = 0; index < response.news.length; index++) {
              var img = response.news[index].image,
                heading = response.news[index].title,
                description = response.news[index].description,
                url = response.news[index].url;

              document.querySelector(".trending-grid").innerHTML += `
              <div class="grid-col">
                <div class="headline-article__container">
                  <div class="headline-article__header">
                    <img src="${img}" alt="" />
                  </div>

                  <div class="headline-article__body">
                    <h1 class="headline-article__heading">${heading}</h1>
                    <p class="headline-article__description">${description}</p>

                    <div class="headline-article-link__container">
                      <a href="${url}" class="headline-article-link__link" target="_blank">Read more</a>
                    </div>
                  </div>
                </div>
              </div>`;
            }

            $("img, a").on("dragstart", function (event) {
              event.preventDefault();
            });

            // console.log("Found.");
          }
        });
      }
    });
  }

  function GetTrendingNews() {
    const category = "trending topics";

    const settings = {
      async: true,
      crossDomain: true,
      url: `https://news67.p.rapidapi.com/topic-research?search=${category}&skip=0&limit=21&from=2020-11-30&langs=en`,
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    };

    $(".loading-spinner__container").addClass("display");

    $.ajax(settings).done(function (response) {
      // console.log(response);

      $(".loading-spinner__container").removeClass("display");

      for (var index = 0; index < response.news.length; index++) {
        var img = response.news[index].image,
          heading = response.news[index].title,
          description = response.news[index].description,
          url = response.news[index].url;

        document.querySelector(".trending-grid").innerHTML += `
        <div class="grid-col">
          <div class="headline-article__container">
            <div class="headline-article__header">
              <img src="${img}" alt="" />
            </div>

            <div class="headline-article__body">
              <h1 class="headline-article__heading">${heading}</h1>
              <p class="headline-article__description">${description}</p>

              <div class="headline-article-link__container">
                <a href="${url}" class="headline-article-link__link" target="_blank">Read more</a>
              </div>
            </div>
          </div>
        </div>`;
      }

      $("img, a").on("dragstart", function (event) {
        event.preventDefault();
      });
    });
  }

  $(function () {
    GetSearchInputValue();
    GetTrendingNews();
  });

  return (
    <section id="trending">
      <div className="container-fluid">
        <h1 className="page-heading">Trending</h1>

        <div className="loading-spinner__container">
          <div className="loading-spinner__spinner"></div>
          <p>Getting latest trending news...</p>
        </div>

        <div className="no-match">
          {/* <i class="bx bx-news"></i> */}
          <i className="bx bx-unlink"></i>
          <p>No articles were found.</p>
        </div>

        <div className="grid trending-grid"></div>
      </div>
    </section>
  );
};

export default Trending;
