// declare an array containing word choices for RPS game
const actionWords = ["rock", "paper", "scissors"];

// initialize DOM elements
const playButton = document.querySelector(".button.play");
const resetButton = document.querySelector(".button.reset");
const playerResultSpan = document.querySelector("#player");
const computerResultSpan = document.querySelector("#computer");
const mainContainer = document.querySelector(".main.container");
const actionButtons = document.querySelectorAll(".actionButton");
const roundOutcomeElement = document.querySelector(".round-outcome");

// initialize game variables
let playerSelection = "";
let roundOutcome = "";
let playerScore = 0;
let computerScore = 0;
let winner = "";
let roundCounter = 0;

// Event handler functions:

// initialize a function that returns a random word from an array - rock, paper or scissors
function getComputerChoice() {
  return actionWords[Math.floor(Math.random() * actionWords.length)];
}
/*
 * Generates and displays the end-of-game message in the UI.
 * Updates the round outcome element with the winner and the total number of rounds played.
 * Adjusts the display of the play and reset buttons accordingly.
 */
const generateRoundEnd = () => {
  roundOutcomeElement.textContent = "";
  roundOutcomeElement.textContent = `${winner} wins the game after ${roundCounter} rounds!!!`;
  playButton.style.display = "none";
  resetButton.style.display = "inline-block";
};

/*
 * Event handler for the click event on action buttons.
 * Retrieves the player's selection based on the clicked button's text content.
 * Updates the playerSelection variable for the current round.
 */
const getSelection = (event) => {
  playerSelection = event.target.textContent;
};

// Event listeners:
/*
 * Event listener for the click event on the play button.
 * Plays a round of the game, increments the round counter, and updates the UI with the results.
 * Checks for a winner after playing the round and generates the end-of-game message if applicable.
 */
playButton.addEventListener("click", () => {
  playRound(playerSelection, getComputerChoice());
  roundCounter++;
  roundOutcomeElement.textContent = "";
  roundOutcomeElement.textContent = roundOutcome;
  playerResultSpan.textContent = playerScore;
  computerResultSpan.textContent = computerScore;

  if (checkWinner(playerScore, computerScore)) {
    generateRoundEnd();
  }
});

/*
 * Event listener for the click event on the reset button.
 * Resets game-related variables, clears UI elements, and adjusts button visibility.
 * Sets the game state for a new round.
 */
resetButton.addEventListener("click", () => {
  roundCounter = 0;
  roundOutcome = "";
  playerScore = 0;
  computerScore = 0;
  winner = "";
  playerResultSpan.textContent = "";
  computerResultSpan.textContent = "";
  playerSelection = "";
  roundOutcomeElement.textContent = "";
  resetButton.style.display = "none";
  playButton.style.display = "inline-block";
  actionButtons.forEach((button) => button.classList.remove("clicked"));
});

/*
 * Adds event listeners to each action button.
 * The first listener captures the player's selection when the button is clicked.
 * The second listener ensures only the clicked button is visually marked as 'clicked.'
 * It removes the 'clicked' class from other buttons and toggles the class on the clicked button.
 */
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

// Game logic functions:
/*
 * Plays a round of the Rock, Paper, Scissors game and updates game variables.
 * Logs player and computer selections to the console for debugging.
 * Determines the round outcome based on the choices and updates scores accordingly.
 * @param {string} playerSelection - The player's choice (rock, paper, or scissors).
 * @param {string} computerSelection - The computer's randomly generated choice.
 */
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
    roundOutcome = "Please select your weapon";
  }
}

/*
 * Checks if either the player or the computer has reached the winning score (5) in the Rock, Paper, Scissors game.
 * Updates the winner variable accordingly and returns true if a winner is found, otherwise returns false.
 * @param {number} playerScore - The current score of the player.
 * @param {number} computerScore - The current score of the computer.
 * @returns {boolean} - True if there is a winner, false otherwise.
 */
function checkWinner(playerScore, computerScore) {
  if (playerScore === 5) {
    winner = "player";
    return true;
  } else if (computerScore === 5) {
    winner = "computer";
    return true;
  } else return false;
}
