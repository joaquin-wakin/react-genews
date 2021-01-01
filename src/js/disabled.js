import $ from "jquery";

const disabled = () => {
  $("a, img").on("dragstart", function (event) {
    event.preventDefault();
  });

  $("body").on("contextmenu", "img", function () {
    return false;
  });
};

export default disabled;
