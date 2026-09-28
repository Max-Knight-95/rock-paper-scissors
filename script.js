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
