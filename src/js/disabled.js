import $ from "jquery";

const Disabled = () => {
  function defaultDisabled() {
    $("a, img").on("dragstart", function (event) {
      event.preventDefault();
    });

    $("body").on("contextmenu", "img", function () {
      return false;
    });
  }

  $(function () {
    defaultDisabled();
  });
};

export default Disabled;
