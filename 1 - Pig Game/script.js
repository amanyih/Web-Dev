"use strict";

const newBtn = document.querySelector(".new");
const rollBtn = document.querySelector(".roll");
const holdBtn = document.querySelector(".hold");
const diceImg = document.querySelector(".dice");
const playerOne = document.querySelector(".left");
const playerOneScore = document.querySelector(".left-score");
const playerOneCur = document.querySelector(".left-cur-score");
const playerTwo = document.querySelector(".right");
const playerTwoScore = document.querySelector(".right-score");
const playerTwoCur = document.querySelector(".right-cur-score");
const active = document.querySelector(".active");

let runningSum = 0;

const checkWinner = function (numb) {
  if (numb == 1 && Number(playerOneScore.textContent) >= 100) {
    playerOne.classList.add("winner");
    rollBtn.removeEventListener("click", rollFunc);
    return true;
  } else if (numb == 2 && Number(playerTwoScore.textContent) >= 100) {
    playerTwo.classList.add("winner");
    rollBtn.removeEventListener("click", rollFunc);
    return true;
  }
};
const exchangePlayers = function () {
  if (playerOne.classList.contains("active")) {
    playerOneScore.textContent = String(
      Number(playerOneScore.textContent) + runningSum
    );
    runningSum = 0;
    playerOneCur.textContent = String(runningSum);
    if (!checkWinner(1)) {
      playerOne.classList.remove("active");
      playerTwo.classList.add("active");
    }
  } else {
    playerTwoScore.textContent = String(
      Number(playerTwoScore.textContent) + runningSum
    );
    runningSum = 0;
    playerTwoCur.textContent = String(runningSum);
    if (!checkWinner(2)) {
      playerTwo.classList.remove("active");
      playerOne.classList.add("active");
    }
  }
};

const rollFunc = function () {
  let random = Math.trunc(Math.random() * 6) + 1;
  diceImg.setAttribute("src", `/Assets/dice-${String(random)}.png`);
  diceImg.classList.remove("hidden");

  if (random != 1) {
    runningSum += random;
    if (playerOne.classList.contains("active")) {
      playerOneCur.textContent = String(runningSum);
    } else {
      playerTwoCur.textContent = String(runningSum);
    }
  } else {
    runningSum = 0;
    exchangePlayers();
  }
};

const newFunc = function () {
  diceImg.classList.add("hidden");
  playerOne.classList.add("active");
  playerOne.classList.remove("winner");
  playerOneScore.textContent = String(0);
  playerOneCur.textContent = String(0);

  playerTwo.classList.remove("active");
  playerTwo.classList.remove("winner");
  playerTwoScore.textContent = String(0);
  playerTwoCur.textContent = String(0);
  holdBtn.addEventListener("click", exchangePlayers);
  rollBtn.addEventListener("click", rollFunc);
};

rollBtn.addEventListener("click", rollFunc);
newBtn.addEventListener("click", newFunc);
holdBtn.addEventListener("click", exchangePlayers);
