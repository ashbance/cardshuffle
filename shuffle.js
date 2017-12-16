
var count = -1;

var cars = [
"ace_of_clubs.png",
"audi",
"bmw",
"merc",
"nissan"]

var cards = [
  "ace_of_clubs.png",
  "2_of_clubs.png",
  "3_of_clubs.png",
  "4_of_clubs.png",
  "5_of_clubs.png",
  "6_of_clubs.png",
  "7_of_clubs.png",
  "8_of_clubs.png",
  "9_of_clubs.png",
  "10_of_clubs.png",
  "jack_of_clubs2.png",
  "queen_of_clubs2.png",
  "king_of_clubs2.png",
  "ace_of_hearts.png",
  "2_of_hearts.png",
  "3_of_hearts.png",
  "4_of_hearts.png",
  "5_of_hearts.png",
  "6_of_hearts.png",
  "7_of_hearts.png",
  "8_of_hearts.png",
  "9_of_hearts.png",
  "10_of_hearts.png",
  "jack_of_hearts2.png",
  "queen_of_hearts2.png",
  "king_of_hearts2.png",
  "ace_of_spades.png",
  "2_of_spades.png",
  "3_of_spades.png",
  "4_of_spades.png",
  "5_of_spades.png",
  "6_of_spades.png",
  "7_of_spades.png",
  "8_of_spades.png",
  "9_of_spades.png",
  "10_of_spades.png",
  "jack_of_spades2.png",
  "queen_of_spades2.png",
  "king_of_spades2.png",
  "ace_of_diamonds.png",
  "2_of_diamonds.png",
  "3_of_diamonds.png",
  "4_of_diamonds.png",
  "5_of_diamonds.png",
  "6_of_diamonds.png",
  "7_of_diamonds.png",
  "8_of_diamonds.png",
  "9_of_diamonds.png",
  "10_of_diamonds.png",
  "jack_of_diamonds2.png",
  "queen_of_diamonds2.png",
  "king_of_diamonds2.png"
 ];

var randomDeck = cards.slice(0);


function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function buildDeck() {
    for (i = 0; i < 52; i++) {
       console.log(cards[i]);
    }
}

function incrementNumbers() {
    count = count + 1;
    document.getElementById("number").innerHTML = count;
}

function nextCard() {

    if (count < 51) {
        count = count + 1;
        document.getElementById("imageRight").src = "images/cards/PNG/" + randomDeck[count];
        document.getElementById("number").innerHTML = count;

        if (count == 51) {
            document.getElementById("imageLeft").src = "images/cards/PNG/blank.png";
        }
    }
}

function previousCard() {
    if (count > 0) {
        count = count - 1;
        document.getElementById("imageRight").src = "images/cards/PNG/" + randomDeck[count];
        document.getElementById("number").innerHTML = count;

        document.getElementById("imageLeft").src = "images/cards/PNG/background.jpg";
    }
    else if (count == 0) {
        start();
    }
}



function shuffleDeck() {
    randomDeck = cards.slice(0);

    let counter = randomDeck.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = randomDeck[counter];
        randomDeck[counter] = randomDeck[index];
        randomDeck[index] = temp;
    }

   start();
}

function resetDeck() {
    randomDeck = cards.slice(0);
    start();
}

function start() {
    count = -1;
    document.getElementById("imageLeft").src = "images/cards/PNG/background.jpg";
    document.getElementById("imageRight").src = "images/cards/PNG/blank.png";

    document.getElementById("imageDog").src = "images/cards/pics/cockapoo.jpeg";
    document.getElementById("number").innerHTML = count;
}



