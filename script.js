// declare an array containing word choices for RPS game
const actionWords = ["rock", "paper", "scissors"];

// initialize a function that returns a random word from an array - rock, paper or scissors
function getComputerChoice() {
  return actionWords[Math.floor(Math.random() * actionWords.length)];
}

const playButton = document.querySelector(".button.rounds");
let playerSelection = "";
let roundOutcome = "";
let playerScore = 0;
let computerScore = 0;
let winner = "";
let roundCounter = 0;

playButton.addEventListener("click", () => {
  if (checkWinner(playerScore, computerScore)) {
    document.querySelector(".round-outcome").textContent = "";
    document.querySelector(
      ".round-outcome"
    ).textContent = `${winner} wins the game after ${roundCounter} rounds!!!`;
  } else {
    playRound(playerSelection, getComputerChoice());
    roundCounter++;
    document.querySelector(".round-outcome").textContent = "";
    document.querySelector(".round-outcome").textContent = roundOutcome;
  }
});

const getSelection = (event) => {
  playerSelection = event.target.textContent;
};

let actionButtons = document.querySelectorAll(".actionButton");
actionButtons.forEach((button) => {
  button.addEventListener("click", getSelection);
  button.addEventListener("click", () => {
    actionButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.classList.remove("clicked");
      }
    });
    button.classList.toggle("clicked");
  });
});

// function that plays one round of RPS game
// returns true if player wins, false if computer wins
// in case of a tie, it returns a string "tie"
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection.toLowerCase() === "rock") {
    switch (computerSelection) {
      case "rock":
        console.log("tie");
        roundOutcome = "It's a tie!";
        break;
      case "paper":
        console.log("You win");
        roundOutcome = "You win!";
        playerScore++;
        break;
      case "scissors":
        console.log("You lose");
        roundOutcome = "You lose";
        computerScore++;
        break;
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    switch (computerSelection) {
      case "rock":
        roundOutcome = "You win!";
        playerScore++;
        break;
      case "paper":
        console.log("tie");
        roundOutcome = "It's a tie!";
        break;
      case "scissors":
        console.log("You lose");
        roundOutcome = "You lose";
        computerScore++;
        break;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    switch (computerSelection) {
      case "rock":
        console.log("You lose");
        roundOutcome = "You lose";
        computerScore++;
        break;
      case "paper":
        console.log("You win");
        roundOutcome = "You win!";
        playerScore++;
        break;
      case "scissors":
        console.log("tie");
        roundOutcome = "It's a tie!";
        break;
    }
  } else {
    console.log("Please provide a valid selection!");
  }
}

// check for winner, assuming score1 is player's score and score2 computer's
// returns appropriate message
function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    winner = "player";
    return true;
  } else if (computerScore === 5) {
    winner = "computer";
    return true;
  }
  return false;
}

// asks for a number of rounds and plays that many rounds of RPS game
// if user submits an invalid word, the round is repeated
// logs score for each round, and final score
// for testing purposes, will log result of reach round
// should improve with logic that handles non-compliant inputs of number of rounds
// function game(numberOfRounds) {
//   let playerScore = 0;
//   let computerScore = 0;
//   let currentRound = 0;
//   let result;
//   let playerSelection;
//   let computerSelection;
//   for (let i = 1; i <= numberOfRounds; i++) {
//     playerSelection = getSelection;
//     computerSelection = getComputerChoice();
//     currentRound = i;
//     console.log(
//       `You chose ${playerSelection}, the computer chose ${computerSelection}`
//     );
//     result = playRound(playerSelection, computerSelection);
//     console.log(result);
//     if (result === true) {
//       playerScore++;
//     } else if (result === false) {
//       computerScore++;
//     } else if (result === "Please provide a valid selection!") {
//       i--;
//     }

//     console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
//   }
//   console.log(checkWinner(playerScore, computerScore));
//   return `Final score is: Player ${playerScore} - Computer ${computerScore}`;
// }
