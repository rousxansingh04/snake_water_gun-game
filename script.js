let playerScore = 0;
let computerScore = 0;


// Get HTML elements
const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

const resultText = document.getElementById("result-text");
const movesText = document.getElementById("moves");

const snakeButton = document.getElementById("snake");
const waterButton = document.getElementById("water");
const gunButton = document.getElementById("gun");

const resetButton = document.getElementById("reset-btn");


// Computer choices
const choices = ["snake", "water", "gun"];


// Function to get computer choice
function getComputerChoice() {

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


// Function to play the game
function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    // Show moves
    movesText.textContent =
        `You chose ${playerChoice} | Computer chose ${computerChoice}`;


    // Draw
    if (playerChoice === computerChoice) {

        resultText.textContent = "It's a Draw!";

    }

    // Player wins
    else if (
        (playerChoice === "snake" && computerChoice === "water") ||
        (playerChoice === "water" && computerChoice === "gun") ||
        (playerChoice === "gun" && computerChoice === "snake")
    ) {

        resultText.textContent = "🎉 You Win!";

        playerScore++;

        playerScoreElement.textContent = playerScore;

    }

    // Computer wins
    else {

        resultText.textContent = "💻 Computer Wins!";

        computerScore++;

        computerScoreElement.textContent = computerScore;

    }

}


// Button events

snakeButton.addEventListener("click", function () {

    playGame("snake");

});


waterButton.addEventListener("click", function () {

    playGame("water");

});


gunButton.addEventListener("click", function () {

    playGame("gun");

});


// Reset game

resetButton.addEventListener("click", function () {

    playerScore = 0;
    computerScore = 0;

    playerScoreElement.textContent = 0;
    computerScoreElement.textContent = 0;

    resultText.textContent = "Make your move!";

    movesText.textContent = "You vs Computer";

});