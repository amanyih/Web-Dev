"use strict";
const [slider] = document.getElementsByClassName("slider");
const slide = document.getElementsByClassName("slide");
const btns = document.getElementsByClassName("slider__btn");
const [dotsContainer] = document.getElementsByClassName("dots");

const con = Array.from(
  document.getElementsByClassName("accordion__content-text")
);
const icon = Array.from(document.getElementsByClassName("icon"));
icon.forEach((ico) => {
  ico.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(ico);
    ico.style.d = "M4.5 15.75l7.5-7.5 7.5 7.5";
    const cur = e.target.dataset.content * 1;
    if (con[cur - 1].classList.contains("open")) {
      con[cur - 1].classList.remove("open");
    } else {
      con.forEach((content) => {
        content.classList.remove("open");
      });
      con[cur - 1].classList.add("open");
    }
  });
});

const btn = Array.from(btns);
const slides = Array.from(slide);

let curSlide = 0;
const maxSlide = slides.length;

//button
slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${100 * index}%)`;
});
// slider.style.transform = "scale(0.5) translateX(-85%)";
// slider.style.overflow = "visible";

function gotoSlide(part) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - part)}%)`;
  });
}
function next() {
  if (curSlide == maxSlide - 1) curSlide = 0;
  else curSlide++;
  gotoSlide(curSlide);
  active(curSlide);
}
function pre() {
  if (curSlide == 0) curSlide = maxSlide - 1;
  else curSlide--;
  gotoSlide(curSlide);
  active(curSlide);
}

function active(slide) {
  const dots = document.getElementsByClassName("dots__dot");
  const dot = Array.from(dots);
  dot.forEach((ele) => {
    ele.classList.remove("dots__dot--active");
  });
  const cur = document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
}

btn[1].addEventListener("click", next);
btn[0].addEventListener("click", pre);

//

slides.forEach((slide, index) => {
  const dot = dotsContainer.insertAdjacentHTML(
    "beforeend",
    `<button class="dots__dot" data-slide="${index}"></button>`
  );
});
dotsContainer.addEventListener("click", function (e) {
  const dot = e.target.dataset.slide;
  gotoSlide(dot * 1);
  active(dot * 1);
});
