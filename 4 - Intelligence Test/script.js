"use strict";

const noBtn = document.getElementById("no");
const yesBtn = document.querySelector(".yes");
const tryBtn = document.querySelector(".try");
const picture = document.querySelector(".pic");
const question = document.querySelector(".q");

noBtn.style.top = "60%";
noBtn.style.left = "50%";
const randomLocation = function () {
  var curLeft = parseInt(noBtn.style.left.slice(0, 2));
  var curTop = parseInt(noBtn.style.top.slice(0, 2));
  let top = Math.trunc(Math.random() * 90) + 1;
  let left = Math.trunc(Math.random() * 90) + 1;

  // while (curLeft - 10 < left < curLeft + 10) {
  //   left = Math.trunc(Math.random() * 90);
  // }
  // while (curTop - 10 > top < curTop + 10) {}
  // {
  //   top = Math.trunc(Math.random() * 90);
  // }
  noBtn.style.top = `${top}%`;
  noBtn.style.left = `${left}%`;
  // console.log(noBtn.style.left.slice(0, 2));
};

const yesBtnHandler = function () {
  picture.setAttribute("src", "/asset/gossip.jpg");
  question.textContent = "We knew it!!";
  tryBtn.style.display = "block";
  noBtn.style.top = "60%";
  noBtn.style.left = "50%";
  // document.querySelector("body").style.background =
  //   "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red)";
};
const tryBtnHandler = function () {
  picture.setAttribute("src", "/asset/mark.jpg");
  question.textContent = "Are you Stupid?";
  tryBtn.style.display = "none";
  noBtn.style.top = "60%";
  noBtn.style.left = "50%";
  document.querySelector("body").style.backgroundColor = "#89b0ae";
};

noBtn.addEventListener("mouseover", randomLocation);
yesBtn.addEventListener("click", yesBtnHandler);
tryBtn.addEventListener("click", tryBtnHandler);
