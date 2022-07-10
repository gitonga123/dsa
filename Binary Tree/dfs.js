const Node = require('./node');

var dfs = (root) => {
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

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');
const i = new Node('i');

a.left = b;
a.right = c;
b.left = d;
d.left = e;
d.right = f;
c.left = g;
c.right = h;
h.right = i;

dfs(a);

