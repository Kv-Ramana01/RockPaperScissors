
// function getComputerChoice(string) {
//     let num = Math.floor(Math.random() * 3);

//     if(num === 0) {
//         return "rock";
//     } else if(num === 1) {
//         return "paper";
//     } else {
//         return "scissors";
//     }    
// }

// let playerScore = 0; 
// let computerScore = 0;
// let rounds = parseInt(prompt("How many rounds do you want to play?"));

// let i = 1;


// while(i <= rounds){
//     let playerChoice = prompt("rock, paper, or scissors?").toLowerCase();
//     let computerChoice = getComputerChoice();

//     if(playerChoice === computerChoice){
//         alert("It's a tie! Both chose " + playerChoice);
//     }else if((playerChoice === "rock" && computerChoice === "scissors") || 
//              (playerChoice === "paper" && computerChoice === "rock") || 
//              (playerChoice === "scissors" && computerChoice === "paper")){
//         alert("You win! " + playerChoice + " beats " + computerChoice);
//         playerScore++;
//     }else {
//         alert("You lose! " + computerChoice + " beats " + playerChoice);
//         computerScore++;
//     }

    
//     console.log(`Round: ${i}, Player Score: ${playerScore}, Computer Score: ${computerScore}`);
//     i++;// choice = prompt("Do you want to play again? (yes/no)").toLowerCase();
// }

// if(playerScore > computerScore){
//     alert("Game over! You win with a score of " + playerScore + " to " + computerScore);
// }else if(computerScore > playerScore){
//     alert("Game over! You lose with a score of " + playerScore + " to " + computerScore);
// }else{
//     alert("Game over! It's a tie with a score of " + playerScore + " to " + computerScore);
// }

