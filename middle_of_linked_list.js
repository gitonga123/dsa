// 876. Middle of the Linked List
/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 */
/**
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
    let slow_pointer = head;
    let fast_pointer = head;

    while (fast_pointer != null && fast_pointer.next !== null) {
        slow_pointer = slow_pointer.next;
        fast_pointer = fast_pointer.next.next;
    }

    return fast_pointer;
}