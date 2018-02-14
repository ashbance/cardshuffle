var NUM_SUITS = 4;
var NUM_CARDS = 13;

var cards = [];

function buildDeck() {


    for (int i = 0; i < NUM_SUITS; i++) {
        for (int j = 1; j <= NUM_CARDS; j++) {
            cards.push(i + " " j);
        }
    }

}