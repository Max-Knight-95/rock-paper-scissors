//Project: Rock, Paper, Scissors
//Based on the game. Create a tool that plays rounds of the game. Take a user answer, generate a computer resonse, and calculate the winner of each round.


//Create first function. This will get the computer answer

function getComputerChoice() {
    let value = Math.floor(Math.random() * 3)
    if(value === 0) {
        return "rock"
    } else if(value === 1) {
        return "paper"
    } else if(value === 2) {
        return "scissors"
    }
}

//Create next function. This will take the human answer.

function getHumanChoice() {
    let human = prompt("Please give an answer");
    human = human.toLowerCase().trim();
    if((human === 'rock') || (human === 'scissors') || (human === 'paper')) {
        return human
    } else {
        return "Invalid answer. Please try again."
    }
}

//Create global variables to record the score

let humanScore = 0;
let computerScore = 0;

//Create function tp play a single round

function playRound(humanChoice, computerChoice) {
    if(((humanChoice === 'rock') && (computerChoice === "scissors")) || 
       ((humanChoice === 'scissors') && (computerChoice === 'paper')) ||
       ((humanChoice === 'paper') && (computerChoice === 'rock'))
    ) {
        humanScore += 1;
        return "You win!"
    } else if(((computerChoice === 'rock') && (humanChoice === "scissors")) || 
       ((computerChoice === 'scissors') && (humanChoice === 'paper')) ||
       ((computerChoice === 'paper') && (humanChoice === 'rock'))
    ) {
        computerScore += 1;
        return "Computer wins!"
    } else if(humanChoice === computerChoice) {
        return "Game was a tie!"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


console.log(playRound(humanSelection, computerSelection))



