const Node = require('./node');

var preorderTraversalR = (root) => {
    if (root == null) { return; }
    const stack = [root];
    while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.value);
        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }


    }
}

var preorderTraversal = (root) => {
    if (root == null) { return; }
    const number = [];
    number.push(root.value);
    preorderTraversal(root.left); preorderTraversal(root.right);
    return number;
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(preorderTraversal(a));

