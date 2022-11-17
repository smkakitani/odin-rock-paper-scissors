const gameChoice = ["ROCK", "PAPER", "SCISSORS"];
        let playerPoint = 0;
        let compPoint = 0;
        // computerChoice will set the three alternatives

        //let randomInt = Math.floor(Math.random() * (3 - 0) + 0);
        // randomInt will get a number between 0-2

        //let player = (prompt("Let's play a game!!! Rock, Paper or Scissors?").toLowerCase());
        //let computerSelection;


        function getComputerChoice(num) {
            if (num === 0) {
                return computerSelection = gameChoice[0];
            } else if (num === 1) {
                return computerSelection = gameChoice[1];
            } else {
                return computerSelection = gameChoice[2];
            }
        }

        //computerSelection = getComputerChoice(randomInt);
        //console.log(`Computer's choice is ${computerSelection}`);

        
        function getPlayerSelection(playerInput) {
            if (playerInput === "rock") {
                return playerSelection = gameChoice[0];
            } else if (playerInput === "paper") {
                return playerSelection = gameChoice[1];
            } else if (playerInput === "scissors") {
                return playerSelection = gameChoice[2];
            } else {
                return "This isn't a valid choice!";
            }
        }


        //playerSelection = getPlayerSelection(player);
        //console.log(`You choose ${playerSelection}`);
        
        function gameRound(playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
                return "Draw!!!";
            } else if ((playerSelection === "ROCK") && (computerSelection === "PAPER")) {
                compPoint++;
                return "Paper beats rock, YOU LOSE!";

            } else if ((playerSelection === "ROCK") && (computerSelection === "SCISSORS")) {
                playerPoint++;
                return "Rock beats scissors, YOU WIN!";

            } else if ((playerSelection === "PAPER") && (computerSelection === "ROCK")) {
                playerPoint++;
                return "Paper beats rock, YOU WIN!";

            } else if ((playerSelection === "PAPER") && (computerSelection === "SCISSORS")) {
                compPoint++;
                return "Scissors beats paper, YOU LOSE!";

            } else if ((playerSelection === "SCISSORS") && (computerSelection === "ROCK")) {
                compPoint++;
                return "Rock beats scissors, YOU LOSE!";

            } else if ((playerSelection === "SCISSORS") && (computerSelection === "PAPER")) {
                playerPoint++;
                return "Scissors beats paper, YOU WIN!";
            }
        }
        //let message = gameRound(playerSelection, computerSelection);
        //console.log(message);




        function game() {
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
            }

        game();
        //console.log(jogo);