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

//video animation
$(document).ready(function() {
  $(".video").hover(
    //primeiro parametro
    function() {
      $(this).animate(
        {
          marginTop: "-=1%"
        },
        200
      );
    },
    //segundo parametro
    function() {
      $(this).animate(
        {
          marginTop: "0%"
        },
        200
      );
    }
  );
});

//video animation
$(document).ready(function() {
  $(".cartao").hover(
    //primeiro parametro
    function() {
      $(this).animate(
        {
          marginTop: "-=1%"
        },
        200
      );
    },
    //segundo parametro
    function() {
      $(this).animate(
        {
          marginTop: "0%"
        },
        200
      );
    }
  );
});

//============ animçao fade in===========
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};
const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const sliders = document.querySelectorAll(".slide-in");
sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});
