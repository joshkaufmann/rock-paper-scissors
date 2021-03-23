//randomly return rock, paper, or scissors
// 0,1,2 = rock, paper, scissors
function computerPlay(){
    let n = Math.floor(Math.random() * 3);

    if (n === 0) {
        return "rock";
    }
    else if (n === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }

}

// plays a single round of rock papper scissors and returns a string declaring the winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Paper";
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper";
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beat Paper";
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Paper";
    }

    if (playerSelection === computerSelection) {
        return "Draw!";
    }

}

// play a 5 round game that keeps score and reports winner/loser at the end
function game() {
    let userScore = 0;
    let compScore = 0;
    let rounds = 0;
    while (userScore < 3 && compScore < 3) {
        let playerSelection = window.prompt("Choose rock, paper, or scissors","rock");
        let result = playRound(playerSelection, computerPlay());
        console.log(result);
        if (result.includes("Win")){
            userScore++;
            rounds++;
        }
        else if (result.includes("Lose")){
            compScore++;
            rounds++;
        }
        console.log(`The score is ${userScore} to ${compScore}`);
    }

    if (userScore >= 3){
        console.log("You are the Winner!");
    }
    else {
        console.log("You are a Big Fat Loser!");
    }

}

game();