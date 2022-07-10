// Count BST nodes that lie in a given range 



//Function to count number of nodes in BST that lie in the given range.
function getCount(root, low, high) {
    const queue = [root];
    let count = 0;


    while (queue.length) {
        const current = queue.shift();
        if (current.left !== null && current.left.data >= low) {
            queue.push(current.left);
        }

        if (current.right !== null && current.right.data <= high) {
            queue.push(current.right);
        }

        if (current.data >= low && current.data <= high) {
            count++;
        }
    }



    return count;
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(8);
const b = new Node("");
const c = new Node(5);
const d = new Node(4);
const e = new Node("");
// const f = new Node(2);
// const g = new Node(13);
// const h = new Node(4);
// const i = new Node(1);

a.left = b;
a.right = c;
c.left = d;
c.right = e;
// d.right = f;
// c.left = g;
// c.right = h;
// h.right = i;


console.log(getCount(a, 7, 9));


