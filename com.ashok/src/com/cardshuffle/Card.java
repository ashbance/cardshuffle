package com.cardshuffle;

/**
 * Created by ashokbance on 29/11/2016.
 */
public class Card {
    private Suit suit;
    private int value;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Card card = (Card) o;

        if (value != card.value) return false;
        return suit == card.suit;

    }

    @Override
    public int hashCode() {
        int result = suit != null ? suit.hashCode() : 0;
        result = 31 * result + value;
        return result;
    }

    public Suit getSuit() {
        return suit;
    }

    public void setSuit(Suit suit) {
        this.suit = suit;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public Card(int value, Suit suit) {
        this.value = value;
        this.suit = suit;
    }

    public static String getFriendlyCardName(Card card) {
        String suit = card.getSuit().toString();
        String value = String.valueOf(card.getValue());


        if (card.value == 1) {
            value = "ACE";
        }
        else if (card.value == 13 ) {
            value = "KING";
        }
        else if (card.value == 12 ) {
            value = "QUEEN";
        }
        else if (card.value == 11) {
            value = "JACK";
        }

        return value + " " + suit;


    }

}
