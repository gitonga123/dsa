/**Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 * Do not modify the linked list.**/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

    if (head == null || head.next == null) return null;
    
    let slow = head;
    let fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;
    };
    
    if (fast == null || fast.next == null) return null;
    
    slow = head;
    
    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    return slow;
};

const a = new ListNode(3);
// const b = new ListNode(2);
// const c = new ListNode(0);
// const d = new ListNode(4);

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = b;

console.log(detectCycle(a));