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
print(a);
const newHead = reverseList(a);
console.log("Reverse --->");
print(newHead);