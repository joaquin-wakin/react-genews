import $ from "jquery";

function defaultDisabled() {
  $("a, img").on("dragstart", function (event) {
    event.preventDefault();
  });

  $("body").on("contextmenu", "img", function () {
    return false;
  });
}

document.cookie = "SameSite = None; Secure";

// Fetches local headlines on first loading of the webpage
function getHeadlines() {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://news67.p.rapidapi.com/inter-country?country2=ph&langs=en&country1=ph&skip=1&limit=21",
    method: "GET",
    headers: {
      "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
      "x-rapidapi-host": "news67.p.rapidapi.com",
    },
  };

  $(".loading-spinner__container").addClass("display");

  $.ajax(settings).done(function (response) {
    for (var index = 0; index < response.length; index++) {
      var img = response[index].image,
        heading = response[index].title,
        description = response[index].description,
        url = response[index].url;

      $(".loading-spinner__container").removeClass("display");

      document.querySelector(".grid").innerHTML += `
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

      $("img, a").on("dragstart", function (event) {
        event.preventDefault();
      });
    }
  });
}

$(function () {
  defaultDisabled();
  getHeadlines();
});
