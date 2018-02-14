package com.cardshuffle;

import java.util.List;

/**
 * Created by ashokbance on 29/11/2016.
 */
public class MainCard {

    public static void main(String[] args) {
        CardsCollection cards = new CardsCollection();


        for (Card c : cards.getCards()) {
            System.out.println(Card.getFriendlyCardName(c));
        }

        System.out.println("====================================");

        List<Card> shuffled =  cards.getShuffledCards();
        for (Card sf: shuffled) {
            System.out.println(Card.getFriendlyCardName(sf));

        }

    }
}
