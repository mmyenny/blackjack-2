// This is our list of 52 cards
let deck = [
  { face: '2', value: 2, suit: 'spades' },
  { face: '3', value: 3, suit: 'spades' },
  { face: '4', value: 4, suit: 'spades' },
  { face: '5', value: 5, suit: 'spades' },
  { face: '6', value: 6, suit: 'spades' },
  { face: '7', value: 7, suit: 'spades' },
  { face: '8', value: 8, suit: 'spades' },
  { face: '9', value: 9, suit: 'spades' },
  { face: '10', value: 10, suit: 'spades' },
  { face: 'jack', value: 10, suit: 'spades' },
  { face: 'queen', value: 10, suit: 'spades' },
  { face: 'king', value: 10, suit: 'spades' },
  { face: 'ace', value: 11, suit: 'spades' },
  { face: '2', value: 2, suit: 'hearts' },
  { face: '3', value: 3, suit: 'hearts' },
  { face: '4', value: 4, suit: 'hearts' },
  { face: '5', value: 5, suit: 'hearts' },
  { face: '6', value: 6, suit: 'hearts' },
  { face: '7', value: 7, suit: 'hearts' },
  { face: '8', value: 8, suit: 'hearts' },
  { face: '9', value: 9, suit: 'hearts' },
  { face: '10', value: 10, suit: 'hearts' },
  { face: 'jack', value: 10, suit: 'hearts' },
  { face: 'queen', value: 10, suit: 'hearts' },
  { face: 'king', value: 10, suit: 'hearts' },
  { face: 'ace', value: 11, suit: 'hearts' },
  { face: '2', value: 2, suit: 'clubs' },
  { face: '3', value: 3, suit: 'clubs' },
  { face: '4', value: 4, suit: 'clubs' },
  { face: '5', value: 5, suit: 'clubs' },
  { face: '6', value: 6, suit: 'clubs' },
  { face: '7', value: 7, suit: 'clubs' },
  { face: '8', value: 8, suit: 'clubs' },
  { face: '9', value: 9, suit: 'clubs' },
  { face: '10', value: 10, suit: 'clubs' },
  { face: 'jack', value: 10, suit: 'clubs' },
  { face: 'queen', value: 10, suit: 'clubs' },
  { face: 'king', value: 10, suit: 'clubs' },
  { face: 'ace', value: 11, suit: 'clubs' },
  { face: '2', value: 2, suit: 'diamonds' },
  { face: '3', value: 3, suit: 'diamonds' },
  { face: '4', value: 4, suit: 'diamonds' },
  { face: '5', value: 5, suit: 'diamonds' },
  { face: '6', value: 6, suit: 'diamonds' },
  { face: '7', value: 7, suit: 'diamonds' },
  { face: '8', value: 8, suit: 'diamonds' },
  { face: '9', value: 9, suit: 'diamonds' },
  { face: '10', value: 10, suit: 'diamonds' },
  { face: 'jack', value: 10, suit: 'diamonds' },
  { face: 'queen', value: 10, suit: 'diamonds' },
  { face: 'king', value: 10, suit: 'diamonds' },
  { face: 'ace', value: 11, suit: 'diamonds' }
]

let playerHand = []
let dealerHand = []

let valueOfDealersHand = 0

const dealCardToPlayer = () => {
  //-pop another card
  //-push it to the hand
  //add the card to the UI
  let playerHandList = document.querySelector('.player-hand')
  let card = deck.pop()

  playerHand.push(card)

  let valueOfPlayersHand = 0
  playerHand.forEach(card => {
    valueOfPlayersHand += card.value
  })

  let playerHandTotal = document.querySelector('.player-hand-total')
  playerHandTotal.textContent = valueOfPlayersHand

  if (valueOfPlayersHand > 21) {
    let gameStatus = document.querySelector('.game-status')
    gameStatus.textContent = 'Player BUSTED!'
  }

  //Add this card to the UI

  //create a new LI
  let newCardItem = document.createElement('li')
  //make the text of the LI be the description of the card
  newCardItem.textContent = `The ${card.face} of ${card.suit}`
  //append that lI to the UL
  playerHandList.appendChild(newCardItem)
}

const dealCardToDealer = () => {
  let dealerHandList = document.querySelector('.dealer-hand')
  let card = deck.pop()

  dealerHand.push(card)
  let newCardItem = document.createElement('li')
  newCardItem.textContent = `The ${card.face} of ${card.suit}`
  dealerHandList.appendChild(newCardItem)
}

const main = () => {
  //Shuffle the deck into a random order
  for (let index = 52 - 1; index > 1; index -= 1) {
    let otherIndex = Math.floor(Math.random() * index)

    let firstCard = deck[index]
    let secondCard = deck[otherIndex]

    deck[index] = secondCard
    deck[otherIndex] = firstCard
  }

  for (let count = 0; count < 2; count++) {
    dealCardToPlayer()
    dealCardToDealer()
  }

  let hitButton = document
    .querySelector('.hit')
    .addEventListener('click', dealCardToPlayer)
  let stayButton = document
    .querySelector('.stay')
    .addEventListener('click', dealCardToDealer)
}

document.addEventListener('DOMContentLoaded', main)
