function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)
    let computerChoice = rand === 0 ? "Rock" : rand === 1 ? "Paper" : "Scissors";
    return computerChoice;
}

function getHumanChoice() { 
    return prompt("Rock, paper, or scissors?")
}

// player score variables
let humanScore = 0, computerScore = 0;


/**
 * @param {string} humanChoice
 * @param {string} computerChoice
 */
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.slice(1).toLowerCase();
    if (humanChoice === computerChoice) {console.log("Draw!");}
    else if (humanChoice === `Rock` && computerChoice === `Scissors` ||
            humanChoice === `Paper` && computerChoice === 'Rock' ||
            humanChoice === `Scissors` && computerChoice === `Paper`) 
            {
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
                humanScore++;                        
            }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


/*
    if human equals computer:
        print tie statement
    else If human = rock and computer = paper:
        print lose statement
        increment winner
    else if human = rock and computer = scissors:
        print win statement
        increment winner
    else if human = paper and computer = scissors:
        print lose statement
        increment winner
    else if human = paper and computer = rock:
        print win statement
        increment winner
    else if human = scissors and computer = rock:
        print lose statement
        increment winner
    else if human = scissors and computer = paper:
        print win statement
        increment winner
*/





