let userScore = 0;
let compScore = 0;
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#you");
const compScorepara = document.querySelector("#camp");

const genComputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomidx = Math.floor(Math.random() * 3);
  return option[randomidx];
};
const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.background = "#081b31";
};

const showWinner = (userWin, userChoice, campChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    msg.innerText = `You win!.${userChoice} beat your ${campChoice}`;
    msg.style.backgroundcolor = "green";
  } else {
    compScore++;
    compScorepara.innerText = campScore;
    msg.innerText = `you lose.${campChoice} beat you ${userChoice}`;
    msg.style.backgroundcolor = "red";
  }
};

const playGame = (you) => {
  const campChoice = genComputerChoice();
  if (userChoice === campChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = campChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = campChoice === "scissor" ? false : true;
    } else {
      userWin = campChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, campChoice);
  }
};
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
