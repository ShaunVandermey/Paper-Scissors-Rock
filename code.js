function getComputerChoice(){
    let output;
    let randNum = Math.floor(Math.random() * 3);
    switch(randNum){
        case 0:
            output = "rock";
            break;
        case 1:{
            output = "scissors";
            break;
        }
        case 2:{
            output = "paper";
            break;
        }
    }
    return output;
}
var playerScore = 0;
var computerScore = 0;
//setup buttons
let container = document.querySelector(".container");

let rockButton = document.createElement("button");
rockButton.classList.add("content");
rockButton.textContent = "Rock";
rockButton.addEventListener("click", chooseRock);
container.appendChild(rockButton);


let scissorsButton = document.createElement("button");
scissorsButton.classList.add("content");
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", chooseScissors);
container.appendChild(scissorsButton);


let paperButton = document.createElement("button");
paperButton.classList.add("content");
paperButton.textContent = "Paper";
paperButton.addEventListener("click", choosePaper);
container.appendChild(paperButton);

let resultDiv = document.createElement("div");
resultDiv.classList.add("content");
container.appendChild(resultDiv);

let scoreDiv = document.createElement("div");
scoreDiv.classList.add("content");
container.appendChild(scoreDiv);


function playGame(choice){
        //let playerChoice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
        resultDiv.textContent = compareChoices(choice, getComputerChoice());
        scoreDiv.textContent = "Player: " + playerScore.toString() + " Computer: " + computerScore.toString();
    return;
}

function choosePaper(e){
    playGame("paper");
}

function chooseScissors(e){
    playGame("scissors");
}

function chooseRock(e){
    playGame("rock");
}

function compareChoices(playerChoice, computerChoice){
    let outputString = "";
    if (playerChoice === "rock"){
        if (computerChoice === "rock"){
            outputString = "It's a tie!";
        }
        if (computerChoice === "scissors"){
            outputString = "You win!";
            playerScore++;
        }
        if (computerChoice === "paper"){
            outputString = "You lose!";
            computerScore++;
        }
    }
    if (playerChoice === "scissors"){
        if (computerChoice === "rock"){
            outputString = "You lose!";
            computerScore++;
        }
        if (computerChoice === "scissors"){
            outputString = "It's a tie!";
        }
        if (computerChoice === "paper"){
            outputString = "You win!";
            playerScore++;
        }
    }
    if (playerChoice === "paper"){
        if (computerChoice === "rock"){
            outputString = "You win!";
            playerScore++;
        }
        if (computerChoice === "scissors"){
            outputString = "You lose!";
            computerScore++;
        }
        if (computerChoice === "paper"){
            outputString = "It's a tie!";
        }
    }
    outputString += " The computer chose " + computerChoice + "!";
    return outputString;
}