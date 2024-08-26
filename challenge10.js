const againButton = document.querySelector(".again");
const messageElement = document.querySelector(".message");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

againButton.addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    messageElement.textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});

// Add this function to handle guessing
const checkGuess = function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        messageElement.textContent = "No number entered!";
    } else if (guess === secretNumber) {
        messageElement.textContent = "Correct Number!";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b238";
        document.querySelector(".number").style.width = "30rem";
    } else if (score > 1) {
        messageElement.textContent =
            guess > secretNumber ? "Too high!" : "Too low!";
        score--;
        document.querySelector(".score").textContent = score;
    } else {
        messageElement.textContent =
            "You lost! The secret number was " + secretNumber;
    }
};

// Attach the checkGuess function to the check button
document.querySelector(".check").addEventListener("click", checkGuess);
