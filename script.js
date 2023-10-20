const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");
const drawScore = document.querySelector("#draw-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;
let drawScoreNumber = 0;

console.log(machineScore)

const playHuman = (humanChoise) => {
  playTheGame(humanChoise, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

const playTheGame = (human, machine) => {
  if (human === machine) {
    drawScoreNumber++
    drawScore.innerHTML = drawScoreNumber;
    result.innerHTML = "Empate!";
  } else if (
    (human === "rock" && machine === "scissors") ||
    (human === "paper" && machine === "rock") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "Você Venceu!";
  } else {
    machineScoreNumber++
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "Você Perdeu!";
  }
};
