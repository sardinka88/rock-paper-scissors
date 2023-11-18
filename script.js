 // declare an array containing word choices for RPS game
  let words = ['rock', 'paper', 'scissors'];
 
 // initialize a function that returns a random word from an array - rock, paper or scissors 
 function getComputerChoice() {
    return words[Math.floor(Math.random() * words.length)]
 }

 function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        switch (computerSelection) {
            case 'rock' :
                return 'It\'s a tie!';
                break;
            case 'paper' :
                return 'You lose! Paper beats rock!';
                break;
            case 'scissors' :
                return 'You win! Rock beats scissors!';
                break;
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'rock' :
                return 'You win! Paper beats rock!';
                break;
            case 'paper' :
                return 'It\'s a tie!';
                break;
            case 'scissors' :
                return 'You lose! Scissors beat paper!';
                break;
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'rock' :
                return 'You lose! Rock beats scissors!';
                break;
            case 'paper' :
                return 'You win! Scissors beat paper!';
                break;
            case 'scissors' :
                return 'It\'s a tie!';
                break;
        }
    } else {
        return 'Please provide a valid selection!';
    }
 }


const playerSelection = 'ROck';
const computerSelection = getComputerChoice();
console.log(`You chose ${playerSelection.toLowerCase()}, player chose ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));