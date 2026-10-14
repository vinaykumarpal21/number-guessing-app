const MIN = 1;
const MAX = 100;

let targetNumber = randomNumber();
let attempts = 0;

const userGuessInput = document.getElementById('userGuess');
const guessBtn = document.getElementById('guessBtn');
const messageBox = document.getElementById('messageBox');
const attemptsSpan = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

function randomNumber() {
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
}

function checkGuess() {
    const userGuess = Number(userGuessInput.value);

    if (!Number.isInteger(userGuess) || userGuess < MIN || userGuess > MAX) {
        messageBox.innerText = `Please enter a valid whole number between ${MIN} and ${MAX}.`;
        return;
    }

    attempts++;
    attemptsSpan.innerText = attempts;

    if (userGuess > targetNumber) {
        messageBox.innerText = "Too high! Try a smaller number. 📉";
    } else if (userGuess < targetNumber) {
        messageBox.innerText = "Too low! Try a bigger number. 📈";
    } else {
        const word = attempts === 1 ? "attempt" : "attempts";
        messageBox.innerText = `🎉 Congratulations! You guessed the number in ${attempts} ${word}!`;
        userGuessInput.disabled = true;
        guessBtn.disabled = true;
        resetBtn.hidden = false;
    }

    userGuessInput.value = "";
    userGuessInput.focus();
}

function resetGame() {
    targetNumber = randomNumber();
    attempts = 0;
    attemptsSpan.innerText = attempts;
    messageBox.innerText = "The game has been restarted! Guess the new number.";
    userGuessInput.disabled = false;
    guessBtn.disabled = false;
    userGuessInput.value = "";
    resetBtn.hidden = true;
    userGuessInput.focus();
}

guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
userGuessInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') checkGuess();
});
