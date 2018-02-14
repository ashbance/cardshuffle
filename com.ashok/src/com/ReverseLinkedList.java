package com;

/**
 * Created by ashokbance on 28/11/2016.
 */
public class ReverseLinkedList {

    public static void main(String[] args) {
        Node n1 = new Node(1);
        Node n2 = new Node(2);
        Node n3 = new Node(3);
        Node n4 = new Node(4);
        Node n5 = new Node(5);

        n1.next = n2;
        n2.next = n3;
        n3.next = n4;
        n4.next = n5;

        Node current = n1;

        Node n = reverseList(current);

        while (n != null) {
            System.out.println(n.value);
            n = n.next;
        }
    }


    // p1 -> p2 -> p3 -> p4 -> NULL

    //    1 -> 2 -> 3 -> 4 -> NULL

    public static Node reverseList(Node node) {

        Node current = node;
        Node next = null;
        Node previous = null;

        while (current != null) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        //System.out.println(node);

        return previous;



    }


}
