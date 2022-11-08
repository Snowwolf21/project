let cards = []
let sum = 0
let message = ""
let hasBlackjack = false
let isAlive = false
let player = {
         name:"wolfCode",
         chips:145,
         sayHello: function () {
            console.log("Hello world")
         }
}

let messageEl = document.getElementById("message-el");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
   playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
   let randomCard = Math.floor(Math.random() * 10);
   if (randomCard > 10) {
      return 10;
   } else if (randomCard === 1) {
      return 11;
   } else {
      return randomCard
   }
}

function startGame() {
   isAlive = true;
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   sum = firstCard + secondCard
   cards = [firstCard, secondCard]
   renderGame()
}

function renderGame() {
   cardEl.textContent = "Cards:"
   for (let i = 0; i < cards.length; i++) {
      cardEl.textContent += cards[i] + " - "
   }
   sumEl.textContent = "Sum: " + sum;


   if (sum < 21) {
      message = "Do you want to draw a new card?"
   } else if (sum === 21) {
      hasBlackjack = true;
      message = "Wohoo!! You've got a blackJack"
   } else {
      isAlive = false;
      message = "You are out of the game"
   } 
   messageEl.textContent = message;
}

function newCard() {
   if (isAlive === true && hasBlackjack === false) {
      let card = getRandomCard()
      cards.push(card);
      sum += card
      renderGame()
   }
}


let fruit = ["apple", "orange", "apple", "apple", "orange"]
 let appleBox = []
 let orangeBox = []

for (let i =0 ; i < fruit.length; i++) {
   if (fruit[i] === "apple") {
      appleBox.push(fruit[i])
   } else {
      orangeBox.push(fruit[i])
   }
}

console.log (appleBox);
console.log(orangeBox);
 console.log(fruitBox)