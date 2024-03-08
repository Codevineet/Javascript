let randomNumber = parseInt(Math.random() * 100 + 1);

let userInput = document.querySelector("#guess-num");
let btn = document.querySelector(".button");
let lastGuess = document.querySelector("#previous-guess");
let guessRemaining = document.querySelector("#guess-remaining");
let lowHigh = document.querySelector("#low-or-high");
const resultParas = document.querySelector(".result-paras");
let p = document.createElement("p");

let arr = [];
let guessNum = 1;
let playGame = true;

if (playGame) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 0) {
    alert("Please Enter a value in the range");
  } else if (guess > 100) {
    alert("Please Enter a Value in range");
  } else {
    arr.push(guess);
    if (guessNum === 11) {
      displayGuess(guess);
      displayMsg(`Game Over, The random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You won the match`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Value is too low`);
  } else {
    displayMsg(`Value is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  lastGuess.innerHTML += `${guess}, `;
  guessNum++;
  guessRemaining.innerHTML = `Guess remaining : ${11 - guessNum}`;
}

function displayMsg(msg) {
  lowHigh.innerHTML = `<h1> ${msg} <h1/>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h1 id="new-game" style="cursor:pointer"> Start new Game <h1/> `;
  resultParas.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  document.querySelector("#new-game").addEventListener("click", () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    arr = [];
    guessNum = 1;
    lastGuess.innerHTML = `Previous Guesses: `;
    lowHigh.innerHTML = "";
    guessRemaining.innerHTML = ` Guess Remaining: ${11 - guessNum}`;
    userInput.removeAttribute("disabled");
    resultParas.removeChild(p);
    playGame = true;
  });
}
