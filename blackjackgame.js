let cards = [];
let sum = 0;
let dealerSum = 0;
let blackJack = false;
let playingGame = false;
let messageElement = document.getElementById("message-element");
let resultElement = document.getElementById("result-element");
let sumElement = document.getElementById("sum-element");
let cardsElement = document.getElementById("cards-element");

// Random Number Generator and Converter for Aces and Face Cards
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

// Resets the Results Output and Player Hand
function startGame() {
    playingGame = true
    blackJack = false
    resultElement.textContent = "Hit or Stay to see the Result!"
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// Displays the Player Cards and Displays Options with Game Ending Functionality
function renderGame() {
    cardsElement.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsElement.textContent += cards[i] + " "
    }
    sumElement.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Would you like to Hit or Stay?"
        result = "Hit or Stay to see the Result!"
    } else if (sum === 21) {
        message = "Blackjack! Hit Start Game to Play Again!"
        result = "Blackjack!"
        blackJack = true
        playingGame = false
    } else {
        message = "Bust! Hit Start Game to Play Again!"
        result = "Bust!"
        playingGame = false
    }
    resultElement.textContent = result
    messageElement.textContent = message
};

// Adds a Card to Player Cards
function hitCard() {
    if (playingGame === true && blackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } 
};

// Adds the Dealer Opponent and Very Basic/Casino Standard Dealer rules
function dealerPlay() {
    let dealerFirstCard = getRandomCard()
    let dealerSecondCard = getRandomCard()
    dealerSum = dealerFirstCard + dealerSecondCard
    while (dealerSum < 17) {
        dealerSum += getRandomCard()
    }
};

// Handles the Final Outcome of the Game!
function stayCard() {
    if (playingGame === true) {
        dealerPlay()
        playingGame = false
        if (dealerSum > 21) {
            message = "The Dealer Went Bust! Hit Start Game to Play Again!"
            result = `You Win! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        } else if (dealerSum == sum) {
            message = "It's a Draw! Hit Start Game to Play Again!"
            result = `It's a Push! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        } else if (dealerSum < sum) {
            message = "Congratulations! You Win! Hit Start Game to Play Again!"
            result = `You Win! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        } else {
            message = "Oh No! Better Luck Next Time! Hit Start Game to Play Again!"
            result = `You Lose! The dealer drew ${dealerSum}! Hit Start Game to Play Again!`
        }
    } else {
        message = "Hit Start Game to Play Again!"
        result = "Hit Start Game to Play Again!"
    }
    resultElement.textContent = result
    messageElement.textContent = message
};
