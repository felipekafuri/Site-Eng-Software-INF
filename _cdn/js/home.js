const btnScrollTop = document.querySelector("#btnScrollTop");

btnScrollTop.addEventListener("click", function(e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

const cur = document.getElementById("cur");

cur.addEventListener("click", function(e) {
  e.preventDefault();
  const id = $(this).attr("href");
  targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    700
  );
});

const hor = document.getElementById("hor");

hor.addEventListener("click", function(e) {
  e.preventDefault();
  const id = $(this).attr("href");
  targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    700
  );
});

const curs = document.getElementById("curs");

curs.addEventListener("click", function(e) {
  e.preventDefault();
  const id = $(this).attr("href");
  targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    700
  );
});

const newyt = document.getElementById("newyt");

newyt.addEventListener("click", function(e) {
  e.preventDefault();
  const id = $(this).attr("href");
  targetOffset = $(id).offset().top;

  $("html, body").animate(
    {
      scrollTop: targetOffset
    },
    700
  );
});
