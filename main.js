"use strict";

const btnNewGame = document.querySelector(".retry");
const btnRollDice = document.querySelector(".roll");
const btnHold = document.querySelector(".hold");
const dice = document.querySelector(".dice"); // png

const scores = document.querySelectorAll(".score");
const currentScores = document.querySelectorAll(".current-score--info");

let activePlayer;
let activePlayerCurrentScore;
let player1Score, player2Score;
initGame();

btnRollDice.addEventListener("click", rollDice);
btnNewGame.addEventListener("click", initGame);

function rollDice() {
  const currentDice = Math.trunc(Math.random() * 6) + 1;

  dice.classList.remove("hidden");
  dice.src = `img/dice-${currentDice}.png`;

  if (currentDice === 1) {
    updateCurrentScore(activePlayer);
    switchActivePlayer();

    return;
  }

  updateCurrentScore(activePlayer, currentDice);
}

function initGame() {
  dice.classList.add("hidden");
  activePlayer = 1;
  activePlayerCurrentScore = 0;
  [player1Score, player2Score] = [0, 0];

  [...scores, ...currentScores].forEach((score) => {
    score.textContent = 0;
  });
}

function updateScore(activePlayer, score) {
  document.querySelector(`.score--${activePlayer}`).textContent = score;
}

function updateCurrentScore(activePlayer, score) {
  const activePlayerCurrentScoreLabel = document.querySelector(
    `.current-score--${activePlayer}`,
  );
  if (!score) {
    activePlayerCurrentScoreLabel.textContent = 0;
  } else {
    activePlayerCurrentScoreLabel.textContent =
      +activePlayerCurrentScoreLabel.textContent + score;
  }
}

function switchActivePlayer() {
  document.querySelector(".active").classList.remove("active");
  activePlayer = activePlayer === 1 ? 2 : 1;
  document.querySelector(`.player--${activePlayer}`).classList.add("active");
}
