const item = document.querySelector('#Number-of-games');
const start = document.querySelector('#start-signal');
const result = document.querySelector('#result');
const user_interface = document.querySelector('#user-interface');

user_interface.setAttribute("style","color:red;")

const playerScore_span = document.querySelector('#player-score');
const computerScore_span = document.querySelector('#comp-score');



let games = 0;
let playerScore = 0;
let compScore = 0;
let gameState = false;
let currentRound = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return "rock";
    } else if (num === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function handlePlayerChoice(e) {
    let playerChoice = e.currentTarget.id;
    

    let computerChoice = getComputerChoice();

    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice === computerChoice) {
        user_interface.textContent = "You both dodged each other's attacks!";
    } else if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        user_interface.textContent = "You landed an attack! Demogorgan is tweaking... " + playerChoice + " beats " + computerChoice;
        playerScore++;
    } else {
        let array = ["you just lost a leg!", "you just lost an arm!", "you just lost an eye!", "you just lost a finger!", "you just lost a toe!"];
        let num = Math.floor(Math.random() * array.length);
        user_interface.textContent = array[num] +" "+ computerChoice + " beats " + playerChoice;
        compScore++;
    }

    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = compScore;

    currentRound++;

    if (currentRound >= games) {
        endGame();
    }
}


function game_start() {
    gameState = true;

    start.textContent = "START!";
    user_interface.textContent = "";
    result.textContent = "Choose your weapon!";

    

    const choiceButtons = document.querySelectorAll('.choice button');


    choiceButtons.forEach(button => {
        button.addEventListener('click', handlePlayerChoice);
    });
}

function endGame() {
    if (playerScore > compScore) {
        user_interface.textContent = "THE END! You just jumped the demogorgan! Score ratio " + playerScore + " to " + compScore;
    } else if (compScore > playerScore) {
        user_interface.textContent = "You have been pulvarized.. Score ratio  " + playerScore + " to " + compScore;
    } else {
        user_interface.textContent = "Um Awakward.. You both are staring at eachother... Score ratio(tie) " + playerScore + " to " + compScore;
    }
    gameState = false;
    user_interface.textContent += " You can go again if you want!";
    start.textContent = "RESTART?";
    games = 0;
    playerScore = 0;
    compScore = 0;
    currentRound = 0;
    playerScore_span.textContent = playerScore;
    computerScore_span.textContent = compScore;

    const choiceButtons = document.querySelectorAll('.choice button');
    choiceButtons.forEach(button => button.removeEventListener('click', handlePlayerChoice));
}




item.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        
        if(!gameState){
            start.textContent = "START!"

        
        games = parseInt(item.value);
        item.value = "";
        result.textContent = "Choose your weapon!";

        if (games <= 0 || isNaN(games)) {
            user_interface.textContent = "Please enter a valid number of games.";
            return;
        } else {

            game_start(games);
        }
        }else{
            start.textContent = "GAME IS ALREADY RUNNING!";
        }

    }
});
