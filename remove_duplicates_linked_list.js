var Node = function (val, next) {
    this.val = val == undefined ? 0 : val;
    this.next = next == undefined ? null : next;
}
function replaceDuplicateNodes(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let current = head; //current node
    let next = head.next //next node
    while (next != null) {
        if (current.val == next.val) {
            current.next = next.next;
            next = next.next;
        } else {
            current = next;
            next = next.next;
        }
    }

    return head;
}
