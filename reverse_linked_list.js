// Write a function, reverseList, that accepts the Head
// of a linked List as an argument

// The function should reverse the order of the node of
// the linked list in-place

// The function should return the new head of
// the linked list

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

const print2 = (head) => {
    if (head == null) return;
    console.log(head.val);
    print2(head.next);
}
const print = (head) => {
    if (head == null) return;
    let current = head;

    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}
const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

const reverseListRecurse = (curr, prev = null) => {
    if (curr == null) return prev;
    let temp = curr.next;
    curr.next = prev;
    curr = temp

    reverseListRecurse(curr.next, curr);
}

var swapPairs = function (head) {
    let dummy = '';
    dummy.val = null;
    dummy.next = head;
    let current = dummy;

    while (current.next !== null && current.next !== undefined && current.next.next !== null) {
        let first = current.next;
        // Second node of the pair
        let second = current.next.next;
        // Point the next of first node to the node after second node
        first.next = second.next;
        // Now the current node's next should be the second node
        current.next = second;
        // Linking the original second node to the first node
        current.next.next = first;
        // Move the pointer two nodes ahead
        current = current.next.next;
    }

    return dummy;

    // let prev = head;
    // prev.next = head;
    // let current = prev;
    // while (current.next !== null && current.next !== undefined && current.next.next !== null) {
    //     let first = current.next;
    //     let second = current.next.next;
    //     first.next = second.next;
    //     current.next = second;
    //     current.next.next = first;
    //     current = current.next.next;
    // }

    // return prev.next;
};
const newHead = reverseList(a);
console.log("Swap Pairs --->");
print(newHead);