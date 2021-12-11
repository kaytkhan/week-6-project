export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }
    get cardLength() {
        return this.cards.cards.length;
    }
    get cardsFromCards() {
        return this.cards.cards
    }
    shuffleCard() {
        for(let i = this.cardLength -1; i> 0; i--) {
            const newIndex = Math.floor(Math.random() *(i+1));
            let temp = this.cardsFromCards[newIndex];
            this.cardsFromCards[newIndex] = this.cardsFromCards[i];
            this.cardsFromCards[i] = temp;

            
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

function freshDeck() {
    const suits = ['♥', '♦', '♠', '♣'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const cards = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            cards.push(new Card(suits[i], values[j]));
        }
    }
    return new Deck(cards);
}

    // for (let i = cards.length - 1; i > 0; i--) {
        // let j = Math.floor(Math.random() * (i + 1));
