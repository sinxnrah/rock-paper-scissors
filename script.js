function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return rand === 0 ? "Rock" : rand === 1 ? "Paper" : "Scissors"; 
}

let humanScore = 0, computerScore = 0;
const human = document.querySelector("#human-score");
const computer = document.querySelector("#computer-score");
const results = document.querySelector("#results");
const winnerDisplay = document.querySelector("#winner-display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener('click', (e) => playRound(e.target.id,getComputerChoice()));
})

function playRound(humanChoice, computerChoice) {

    const roundResult = document.createElement("p");

    if (humanChoice === computerChoice) {
        roundResult.textContent = "Draw!";
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")) {
        roundResult.textContent =`You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        human.textContent = humanScore;
    } else {
        roundResult.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        computer.textContent = computerScore;
    }
    results.appendChild(roundResult);

    if (humanScore === 5) {
        winnerDisplay.textContent = "You win!";
        endGame();
    } else if (computerScore === 5) {
        winnerDisplay.textContent = "Computer wins!";
        endGame();
    }
}

function endGame() {
        buttons.forEach(button => {
            button.disabled = true;
        })
}


