function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    let computerChoice = rand === 0 ? "Rock" : rand === 1 ? "Paper" : "Scissors";
    return computerChoice;
}

console.log(getComputerChoice());
