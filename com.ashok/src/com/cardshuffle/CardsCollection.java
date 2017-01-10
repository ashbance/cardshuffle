package com.cardshuffle;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by ashokbance on 29/11/2016.
 */
public class CardsCollection {

    public List<Card> getCards() {
        return cards;
    }

    private List<Card> cards = new ArrayList<>();

    private List<Card> shuffledCards = new ArrayList<>();


    int NUM_CARDS = 13;
    int NUM_SUITS = 4;

    public CardsCollection() {

        for (int i = 0; i < NUM_SUITS; i++) {
            for (int j = 1; j <= NUM_CARDS; j++) {
                cards.add(new Card(j, Suit.values()[i]));
            }
        }
    }


    public List<Card> getShuffledCards() {

        shuffledCards.addAll(cards);
        Collections.shuffle(shuffledCards);

        return shuffledCards;
    }


}
