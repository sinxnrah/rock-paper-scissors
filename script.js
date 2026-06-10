function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return rand === 0 ? "Rock" : rand === 1 ? "Paper" : "Scissors"; 
}

function getHumanChoice() { 
    return prompt("Rock, paper, or scissors?");
}






function playGame() {
    // player score variables
    let humanScore = 0, computerScore = 0;


    // single round functionality
    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("Draw!");
        } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
                (humanChoice === "Paper" && computerChoice === "Rock") ||
                (humanChoice === "Scissors" && computerChoice === "Paper")) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;                       
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
    }

    // game of 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Player: ${humanScore} wins.\nComputer: ${computerScore} wins.`);
    }

    // declare winner
    if (humanScore > computerScore) {
        console.log("You win the series!");
    } else if (humanScore < computerScore) {
        console.log("You lost the series.");    
    } else {
        console.log("The series was a tie.");
    }

}

playGame();







