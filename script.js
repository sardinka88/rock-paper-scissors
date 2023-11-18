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
                return 'tie';
                break;
            case 'paper' :
                return false;
                break;
            case 'scissors' :
                return true;
                break;
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        switch (computerSelection) {
            case 'rock' :
                return true;
                break;
            case 'paper' :
                return 'tie';
                break;
            case 'scissors' :
                return false;
                break;
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        switch (computerSelection) {
            case 'rock' :
                return false;
                break;
            case 'paper' :
                return true;
                break;
            case 'scissors' :
                return 'tie';
                break;
        }
    } else {
        return 'Please provide a valid selection!';
    }
 }


function checkWinner (score1, score2) {
    if (score1 > score2) {
        return 'Player wins!';
    } else if (score2 > score1) {
        return 'Computer wins!';
    } else {
        return "It's a tie!";
    }
}

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    let result;
    let playerSelection;
    let computerSelection;
    for (let i = 1; i <= rounds; i++ ) {
        playerSelection = prompt('Choose rock, paper or scissors: ', '');
        computerSelection = getComputerChoice();
        console.log(`You chose ${playerSelection.toLowerCase()}, player chose ${computerSelection}`);
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === true) {
            playerScore += 1;
        } else if (result === false) {
            computerScore += 1;
        } 

        console.log(`Player: ${playerScore} - Computer: ${computerScore}`);
    }
    console.log(checkWinner(playerScore, computerScore));
    return `Final score is: Player ${playerScore} - Computer ${computerScore}`;
    
}


let rounds = +prompt('How many rounds do you wish to play?', '');
console.log(game(rounds));