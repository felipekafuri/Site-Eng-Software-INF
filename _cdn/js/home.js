const btnScrollTop = document.querySelector("#btnScrollTop");

btnScrollTop.addEventListener("click", function(e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

$(document).ready(function() {
  $(".out").click(function() {
    if ($("nav").is(":visible")) {
      $("nav").hide();
      $(".out").show();
      $("#intro").css({ "margin-top": "200px" });
    } else {
      $("nav").show();
      $(".out").hide();
      $("#intro").css({ "margin-top": "450px" });
    }
  });
  $(".in").click(function() {
    if ($("nav").is(":visible")) {
      $("nav").hide();
      $(".out").show();
      $("#intro").css({ "margin-top": "200px" });
    } else {
      $("nav").show();
      $(".out").hide();
      $("#intro").css({ "margin-top": "420px" });
    }
  });
});
