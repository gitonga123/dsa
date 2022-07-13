class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = data;
    }
}

const findNth = (root, n) => {
    let queue = [root];

    while (queue.length > 0) {
        let current = queue.shift();
        if (current.left == null && current.right == null) {
            return current.data[n];
        }

        if (n < current.left.data) {
            current = current.left;
            if (current.left && n < current.left.data.length) {
                current = current.left;
            } else {
                n = current.data - n;
                current = current.right;
            }
            queue.push(current);
        } else {
            current = current.right
            n = current.data - n;
            queue.push(current);
        }
    }

    return;
}


let root = new Node(11);
let left = new Node(7);
let right = new Node(4);
let leftL = new Node('hell')
let rightL = new Node('_ow');
let leftR = new Node(2);
let rightR = new Node('ld');
let leftRL = new Node('o');
let rightRR = new Node('r');

root.left = left;
root.right = right;

left.left = leftL;
left.right = rightL;

right.left = leftR;
right.right = rightR;

leftR.left = leftRL;
leftR.right = rightRR;

console.log(findNth(root, 0));
console.log(findNth(root, 1));
console.log(findNth(root, 2));
console.log(findNth(root, 3));
console.log(findNth(root, 4));
console.log(findNth(root, 5));
console.log(findNth(root, 6));
console.log(findNth(root, 7));
console.log(findNth(root, 8));