//const gameChoice = ["ROCK", "PAPER", "SCISSORS"]; // computerChoice will set the three alternatives

// let randomInt = Math.floor(Math.random() * (3 - 0) + 0); // randomInt will get a number between 0-2
//let player = (prompt("Let's play a game!!! Rock, Paper or Scissors?").toLowerCase());

/* function getPlayerSelection(playerInput) {
    if (playerInput === "rock") {
        return playerSelection = gameChoice[0];
    } else if (playerInput === "paper") {
        return playerSelection = gameChoice[1];
    } else if (playerInput === "scissors") {
        return playerSelection = gameChoice[2];
    } else {
        return "This isn't a valid choice!";
    }
} */

function getComputerChoice() {
    const gameChoice = ["ROCK", "PAPER", "SCISSORS"];
    let randomInt = Math.floor(Math.random() * (3 - 0) + 0);

    if (randomInt === 0) {
        return computer = gameChoice[0];
    } else if (randomInt === 1) {
        return computer = gameChoice[1];
    } else if (randomInt === 2) {
        return computer = gameChoice[2];
    }
}


let playerPoint = 0;
let compPoint = 0;

function gameRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return finalGame.textContent = "Draw!!!";
    } else if ((playerSelection === "ROCK") && (computerSelection === "PAPER")) {
        compPoint++;        
        return finalGame.textContent = "Paper beats rock, YOU LOSE!";

    } else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
        playerPoint++;
        return finalGame.textContent = "Rock beats scissors, YOU WIN!";

    } else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {
        playerPoint++;
        return finalGame.textContent = "Paper beats rock, YOU WIN!";

    } else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {
        compPoint++;
        return finalGame.textContent = "Scissors beats paper, YOU LOSE!";

    } else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {
        compPoint++;
        return finalGame.textContent = "Rock beats scissors, YOU LOSE!";

    } else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
        playerPoint++;
        return finalGame.textContent = "Scissors beats paper, YOU WIN!";
    }
}

// to finish the game

function endGame() {
    if (playerPoint === 5 && compPoint < 5) {     
        finalMessage.textContent = "Congratulations, you won!";
        playerPoint = 0;
        compPoint = 0;      
    } else if (playerPoint < 5 && compPoint === 5) {
        finalMessage.textContent = "You lost...";
        playerPoint = 0;
        compPoint = 0;
    } else {
        finalMessage.textContent = "";
    }
}



//Game buttons and clicks

function rockB() {
    player = "ROCK";
    computer = getComputerChoice();
    playRound = gameRound(player, computer);
    compScore.textContent = `COMPUTER: ${compPoint}`;
    playerScore.textContent = `YOU: ${playerPoint}`;
    endGame();

    console.log(playRound);
    console.log(computer);
}

function paperB() {
    player = "PAPER";
    computer = getComputerChoice();
    playRound = gameRound(player, computer);
    compScore.textContent = `COMPUTER: ${compPoint}`;
    playerScore.textContent = `YOU: ${playerPoint}`;
    endGame();

    console.log(playRound);
    console.log(computer);
}

function scissorsB() {
    player = "SCISSORS";
    computer = getComputerChoice();
    playRound = gameRound(player, computer);
    compScore.textContent = `COMPUTER: ${compPoint}`;
    playerScore.textContent = `YOU: ${playerPoint}`;
    endGame();

    console.log(playRound);
    console.log(computer);
}

let finalGame = document.querySelector('.text');
const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.comp-score');
const rockButton = document.querySelector('#button-rock');
const paperButton = document.querySelector('#button-paper');
const scissorsButton = document.querySelector('#button-scissors');
const scores = document.querySelector('#scores');
const finalMessage = document.querySelector('.final-message');


// button events
rockButton.addEventListener('click', rockB);
paperButton.addEventListener('click', paperB);
scissorsButton.addEventListener('click', scissorsB);






















/* function game() {
    for (let i = 0; i < 6; i++) {
        let randomInt = Math.floor(Math.random() * (3 - 0) + 0);
        let player = (prompt("Let's play a game!!! Rock, Paper or Scissors?").toLowerCase());

        computerSelection = getComputerChoice(randomInt);
        console.log(`Computer's choice is ${computerSelection}`);

        playerSelection = getPlayerSelection(player);
        console.log(`You choose ${playerSelection}`);


        message = gameRound(playerSelection, computerSelection) + `your point is ${playerPoint}`;
        console.log(message);

        // let finalPlayerPoint = playerPoint;
        // let finalCompPoint = compPoint;
    }

    if (playerPoint > compPoint) {
            console.log("CCongratulations!!!");
            //return "Congratulations!!!";
        } else {
            console.log("Poor soul...");
            //return "Poor soul...";
        }
    //console.log(playerPoint);
    } */

// game();