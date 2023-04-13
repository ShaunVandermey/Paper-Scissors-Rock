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
function playGame(){
    alert("Let's play 5 games of Paper, Scissors, Rock!");
    playerScore = 0;
    computerScore = 0;
    for(let i = 0; i < 5; i++){
        let playerChoice = prompt("Please enter Rock, Paper, or Scissors").toLowerCase();
        alert(compareChoices(playerChoice, getComputerChoice()));
        alert("The current score is: Player " + playerScore + ", Computer " + computerScore);
    }
    alert("The final score is: Player " + playerScore + ", Computer " + computerScore);
    return;
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