$(function () {
  $(".top").on("click", function () {
    $("body").animate({ scrollTop: $("details").offset().top }, 400);
  });
});

window.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("details").forEach(function (item) {
    item.addEventListener("toggle", (event) => {
      let toggled = event.target;
      if (toggled.attributes.open) {
        document.querySelectorAll("details[open]").forEach(function (opened) {
          if (toggled != opened) opened.removeAttribute("open");
        });
      }
    });
  });
});
