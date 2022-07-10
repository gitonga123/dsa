/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as */
var Node = function (data) {
    this.data = data;
    this.next = null;
}

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    let currentA = headA;
    let currentB = headB;

    while (currentA != currentB) {
        //If you reached the end of one list start at the beginning of the other one
        //currentA
        if (currentA.next == null) {
            currentA = headB;
        } else {
            currentA = currentA.next;
        }
        //currentB
        if (currentB.next == null) {
            currentB = headA;
        } else {
            currentB = currentB.next;
        }
    }
    return currentB.data;
}

const headA = new Node(1);
const head2 = new Node(2);
const head3 = new Node(3);
const head4 = new Node(4);
const head5 = new Node(5);
headA.next = head2;
head2.next = head3;
head3.next = head4;
head4.next = head5;

const headB = new Node(2);
const head6 = new Node(5);
const head7 = new Node(7);
const head8 = new Node(8);
const head9 = new Node(9);
headB.next = head6;
head6.next = head4;
head7.next = head8;
head8.next = head9;

console.log(findMergeNode(headA, headB));