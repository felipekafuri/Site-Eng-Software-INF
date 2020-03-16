const btnScrollTop = document.querySelector("#btnScrollTop");

btnScrollTop.addEventListener("click", function(e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});
