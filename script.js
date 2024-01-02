// declare an array containing word choices for RPS game
const actionWords = ["rock", "paper", "scissors"];

// initialize a function that returns a random word from an array - rock, paper or scissors
function getComputerChoice() {
  return actionWords[Math.floor(Math.random() * actionWords.length)];
}

const playButton = document.querySelector(".button.rounds");
let playerSelection = "";

playButton.addEventListener("click", () => {
  playRound(playerSelection, getComputerChoice());
});

const getSelection = (event) => {
  playerSelection = event.target.textContent;
};

let actionButtons = document.querySelectorAll(".actionButton");
actionButtons.forEach((button) => {
  button.addEventListener("click", getSelection);
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
        break;
      case "paper":
        console.log("You win");
        break;
      case "scissors":
        console.log("You lose");
        break;
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    switch (computerSelection) {
      case "rock":
        console.log("You win");
        break;
      case "paper":
        console.log("tie");
        break;
      case "scissors":
        console.log("You lose");
        break;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    switch (computerSelection) {
      case "rock":
        console.log("You lose");
        break;
      case "paper":
        console.log("You win");
        break;
      case "scissors":
        console.log("tie");
        break;
    }
  } else {
    console.log("Please provide a valid selection!");
  }
}

// check for winner, assuming score1 is player's score and score2 computer's
// returns appropriate message
function checkWinner(score1, score2) {
  if (score1 > score2) {
    return "Player wins!";
  } else if (score2 > score1) {
    return "Computer wins!";
  } else {
    return "It's a tie!";
  }
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
