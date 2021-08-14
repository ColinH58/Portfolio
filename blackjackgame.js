let cards = [];
let sum = 0;
let dealerSum = 0;
let blackJack = false;
let playingGame = false;
let message = "";
let result = "";
let messageElement = document.getElementById("message-element");
let resultElement = document.getElementById("result-element");
let sumElement = document.getElementById("sum-element");
let cardsElement = document.getElementById("cards-element");

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
};

function startGame() {
    resultElement.textContent = "Result:"
    playingGame = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }
    sumElement.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Would you like to Hit or Stay?"
    } else if (sum === 21) {
        message = "Blackjack! Hit Start Game to Play Again!"
        blackJack = true
        playingGame = false
    } else {
        message = "Bust! Hit Start Game to Play Again!"
        playingGame = false
    }
    messageElement.textContent = message
};

function hitCard() {
    if (playingGame === true || blackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } 
};

function dealerPlay() {
    let dealerFirstCard = getRandomCard()
    let dealerSecondCard = getRandomCard()
    dealerSum = dealerFirstCard + dealerSecondCard
    while (dealerSum < 17) {
        dealerSum += getRandomCard()
    }
};

function stayCard() {
    if (playingGame === true) {
        dealerPlay()
        playingGame = false
        if (dealerSum > 21) {
            result = `You Win! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        } else if (dealerSum == sum) {
            result = `It's a Push! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        } else if (dealerSum < sum) {
            result = `You Win! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        } else {
            result = `You Lose! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        }
        resultElement.textContent = result
    } else {
        resultElement.textContent = "Start a new game to try again!"
    }
};
