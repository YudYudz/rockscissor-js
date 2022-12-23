const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
let resText = document.getElementById("resultText")
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player: ${player}`;
  computerText.textContent = `Computer: ${computer}`;
  resultText.textContent = checkWinner();

}));

function computerTurn(){
  const randNum = Math.floor(Math.random() * 3) + 1;
  // switch(randNum){
  //   case 1:
  //     computer = "ROCK";
  //   break;
  //   case 2:
  //     computer = "PAPER";
  //   break;
  //   case 3:
  //     computer = "SCISSOR";
  //     break;
//   // }
if(randNum == 1){
  computer = "ROCK"
} else if (randNum == 2){
  computer = "PAPER"
} else {computer = "SCISSOR"}

// randNum == 1 ? computer = "ROCK" : randNum == 2 ? computer = "PAPER" : computer = "SCISSOR"
}


function checkWinner(){
  if(player == computer){
    resText.style.color = "grey"
    return "Draw";
  }
  else if(computer == "ROCK"){
    player== "PAPER" ? resText.style.color = "green" : resText.style.color = "red"
    return (player== "PAPER") ? "You Win!" : "You Lose!"
  }
  else if(computer == "PAPER"){
    player== "SCISSOR" ? resText.style.color = "green" : resText.style.color = "red"
    return (player== "SCISSOR") ? "You Win!" : "You Lose!"
  }
  else if(computer == "SCISSOR"){
    player== "ROCK" ? resText.style.color = "green" : resText.style.color = "red"
    return (player== "ROCK") ? "You Win!" : "You Lose!"
  }
}