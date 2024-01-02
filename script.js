// declare an array containing word choices for RPS game
const actionWords = ["rock", "paper", "scissors"];

// initialize a function that returns a random word from an array - rock, paper or scissors
function getComputerChoice() {
  return actionWords[Math.floor(Math.random() * actionWords.length)];
}

const setRounds = () => {
  let rounds = document.querySelector("#input-rounds").value;
  console.log(rounds);
  let roundsDiv = document.querySelector(".div.rounds");
  const roundsMessage = document.createElement("p");
  roundsMessage.textContent = `You are playing ${rounds} rounds.`;
  roundsDiv.appendChild(roundsMessage);
};

const playButton = document.querySelector(".button.rounds");

playButton.addEventListener("click", setRounds);

// function that plays one round of RPS game
// returns true if player wins, false if computer wins
// in case of a tie, it returns a string "tie"
function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock") {
    switch (computerSelection) {
      case "rock":
        return "tie";
        break;
      case "paper":
        return false;
        break;
      case "scissors":
        return true;
        break;
    }
  } else if (playerSelection.toLowerCase() === "paper") {
    switch (computerSelection) {
      case "rock":
        return true;
        break;
      case "paper":
        return "tie";
        break;
      case "scissors":
        return false;
        break;
    }
  } else if (playerSelection.toLowerCase() === "scissors") {
    switch (computerSelection) {
      case "rock":
        return false;
        break;
      case "paper":
        return true;
        break;
      case "scissors":
        return "tie";
        break;
    }
  } else {
    return "Please provide a valid selection!";
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
function game(numberOfRounds) {
  let playerScore = 0;
  let computerScore = 0;
  let result;
  let playerSelection;
  let computerSelection;
  for (let i = 1; i <= numberOfRounds; i++) {
    playerSelection = prompt("Choose rock, paper or scissors: ", "");
    computerSelection = getComputerChoice();
    console.log(
      `You chose ${playerSelection.toLowerCase()}, the computer chose ${computerSelection}`
    );
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result === true) {
      playerScore++;
    } else if (result === false) {
      computerScore++;
    } else if (result === "Please provide a valid selection!") {
      i--;
    }

    console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
  }
  console.log(checkWinner(playerScore, computerScore));
  return `Final score is: Player ${playerScore} - Computer ${computerScore}`;
}
