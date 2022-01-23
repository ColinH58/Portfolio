let result = document.getElementById("results");
let minorHint = document.getElementById("minor-hint");
let guessAttempts = document.getElementById("guess");
let majorHint = document.getElementById("major-hint");
let guesses = [];
let gameIsLive = true;
let hintAllowed = true;

function generateWinningNumber() {
    return Math.floor(Math.random() * 100 + 1)
}

let winningNumber = generateWinningNumber();
console.log(`The Winning Number is: ${winningNumber}`);


document.getElementById("submit").addEventListener("click", function(e) {
    let playerGuess = document.getElementById("player-guess").value
    playerGuess = parseInt(playerGuess)
    if (gameIsLive === true) {
        if (playerGuess < 1 || playerGuess > 100) {
            result.textContent = "Invalid Guess!"
            document.getElementById("player-guess").value = ""
        } else if (guesses.includes(playerGuess)) {
            result.textContent = "You Already Tried That! Try Something Else!"
            document.getElementById("player-guess").value = ""
        } else {
            findDifference(playerGuess)
            guesses.push(playerGuess)
            document.getElementById("guess").textContent = guesses
            document.getElementById("player-guess").value = ""
            checkGuess(guesses)
        }
    }
});

function checkGuess(arr) {
    if (gameIsLive === true) {
        if (arr.length === 5 && arr.includes(winningNumber)) {
            result.textContent = "✨You Win!✨"
            minorHint.textContent = "🎊Congratulations!🎊"
            gameIsLive = false;
        } else if (arr.includes(winningNumber)) {
            result.textContent = "✨You Win!✨"
            minorHint.textContent = "🎊Congratulations!🎊"
            gameIsLive = false;       
        } else if (arr.length > 4) {
            result.textContent = `Game Over! The winning number was ${winningNumber}`
            minorHint.textContent = "Better Luck Next Time!"
            gameIsLive = false;
        } else {
            result.textContent = "Try Again!"
        }
    }
};

function findDifference(num) {
    let difference = Math.abs(num - winningNumber)
    if (num < winningNumber) {
        if (difference >= 50) {
            minorHint.textContent = "You're Way Off! Guess Much Higher!"
        } else if (difference < 50 && difference >= 25) {
            minorHint.textContent = "Guess Much Higher!"
        } else if (difference < 25 && difference >= 10) {
            minorHint.textContent = "Guess Higher!"
        } else if (difference < 10) {
            minorHint.textContent = "So Close! Guess A Bit Higher!"
        }
    } else {
        if (difference >= 50) {
            minorHint.textContent = "You're Way Off! Guess Much Lower!"
        } else if (difference < 50 && difference >= 25) {
            minorHint.textContent = "Guess Much Lower!"
        } else if (difference < 25 && difference >= 10) {
            minorHint.textContent = "Guess Lower!"
        } else if (difference < 10) {
            minorHint.textContent = "So Close! Guess A Bit Lower!"
        }
    }
};

function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr
};

document.getElementById("hint-btn").addEventListener("click", function(e) {
    let hintOptions = [];
    if (hintAllowed === true) {
        hintOptions.push(winningNumber);
        hintOptions.push(generateWinningNumber());
        hintOptions.push(generateWinningNumber());
        shuffle(hintOptions);
        majorHint.textContent = `🤔${hintOptions}🤔`;
        hintAllowed = false;
    }
});

document.getElementById("reset-btn").addEventListener("click", function(e) {
    winningNumber = generateWinningNumber()
    findDifference(0)
    console.log(`The Winning Number is: ${winningNumber}`);
    gameIsLive = true;
    hintAllowed = true;
    guesses = [];
    majorHint.textContent = "Need a Hint?";
    result.textContent = "Take a Guess!"
    minorHint.textContent = "Good Luck!"
    guessAttempts.textContent = "Your Guesses Will Go Here!"
    document.getElementById("player-guess").value = ""
});