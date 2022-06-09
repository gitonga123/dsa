const Node = require('./node');

const bfs = (root) => {
    if (root == null) return;
    const queue = [root];
    while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.value);
        if (curr.left) {
            queue.push(curr.left)
        }

        if (curr.right) {
            queue.push(curr.right);
        }
    }
}

const a = new Node(5);
const b = new Node(4);
const c = new Node(8);
const d = new Node(11);
const e = new Node(7);
const f = new Node(2);
const g = new Node(13);
const h = new Node(4);
const i = new Node(1);

a.left = b;
a.right = c;
b.left = d;
d.left = e;
d.right = f;
c.left = g;
c.right = h;
h.right = i;

console.log(bfs(a));

