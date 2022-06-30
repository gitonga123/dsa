/**
 * Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
 * If the tree has more than one mode, return them in any order.
 * Assume a BST is defined as follows:
 * 
 * The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
    const queue = [root];
    let hashMap = {};
    let result = [];

    while (queue.length > 0) {
        let current = queue.shift();

        if (current.val in hashMap) {
            hashMap[current.val] += 1;

        } else {
            hashMap[current.val] = 1;
        }

        if (current.left) {
            queue.push(current.left);
        }

        if (current.right) {
            queue.push(current.right);
        }
    }

    let maxValue = Math.max(...Object.values(hashMap));


    for (let key in hashMap) {
        if (hashMap[key] == maxValue) {
            result.push(parseInt(key));
        }
    }

    return result;
};

// this is a BST. meaning that, items are order.
let count = 1;
let max = 0;
let prev = null;
let modes = [];
const findMode2 = (root) => {
    traverse(root);
    return modes;
}

function traverse(root) {
    if (root == null) return null;
    traverse(root.left, modes);
    if (prev != null) {
        if (prev == root.val) {
            count++
        } else {
            count = 1;
        }
    }
    console.log(count, max);
    if (count > max) {
        max = count;
        modes = [];
        modes.push(root.val);
    } else if (count === max) {
        console.log("2 --", count, max, root.val, modes);
        modes.push(root.val);
    }

    prev = root.val;

    traverse(root.right, modes);
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(1);
const b = new Node(2);
// const c = new Node(2);
a.right = b;
// const d = new Node(4);
// const e = new Node(5);

// a.left = b;
// a.right = c;
// c.left = d;
// c.right = e;

console.log(findMode2(a));