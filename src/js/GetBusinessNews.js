import $ from "jquery";

const GetBusinessNews = () => {
  const userInput = "digital marketing";

  function GetNews() {
    const settings = {
      async: true,
      crossDomain: true,
      url: `https://news67.p.rapidapi.com/topic-research?search=${userInput}&skip=0&limit=21&from=2020-12-25&langs=en`,
      method: "GET",
      headers: {
        "x-rapidapi-key": "734c8025e8msh3008a9e94311a28p13ee78jsn4f7e98ac6131",
        "x-rapidapi-host": "news67.p.rapidapi.com",
      },
    };

    $(".loading-spinner__container").addClass("display");
    $(".business-grid").empty();

    $.ajax(settings).done(function (response) {
      console.log(response);
      $(".loading-spinner__container").removeClass("display");

      for (var index = 0; index < response.news.length; index++) {
        var img = response.news[index].image,
          heading = response.news[index].title,
          description = response.news[index].description,
          url = response.news[index].url;

        document.querySelector(".business-grid").innerHTML += `
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
    GetNews();
  });
};

export default GetBusinessNews;
