const SUITS = ['♥','♦','♠','♣']
const VALUES = ['A', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'Q']

class Deck {
    constructor(cards) {
        this.cards = cards
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}