// 23. Merge k Sorted Lists
/**
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it.
 * 
 * Approach divide and conquer
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0 || !lists) return null;
    while (lists.length > 1) {
        let l1 = lists.shift();
        let l2 = lists.shift();

        const mergedList = mergeList(l1, l2);
        lists.push(mergedList);

    }

    return lists[0];
};

var print = (l1) => {
    current = l1;
    while (current) {
        console.log(current.val + "->");
        current = current.next;
    }
}
function mergeList(l1, l2) {
    let dummy = new Node(null);
    dummy.next = l1;
    let current = dummy;
    while (l1 && l2) {
        if (l1.val > l2.val) {
            current.next = l2;
            l2 = l2.next
        } else {
            current.next = l1;
            l1 = l1.next;
        }

        current = current.next;
    }

    current.next = l1 || l2;
    return dummy.next;
}

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;

const a1 = new Node(1);
const b1 = new Node(2);
const c1 = new Node(3);
const d1 = new Node(4);
const e1 = new Node(5);

a1.next = b1;
b1.next = c1;
c1.next = d1;
d1.next = e1;
e1.next = null;


const a2 = new Node(1);
const b2 = new Node(4);
const c2 = new Node(5);
const d2 = new Node(7);
const e2 = new Node(9);

a2.next = b2;
b2.next = c2;
c2.next = d2;
d2.next = e2;
e2.next = null;

let results = mergeKLists([
    a, a1, a2
]);

print(results);