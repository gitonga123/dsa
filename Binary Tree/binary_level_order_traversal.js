/** Given the root of a binary tree, return the level order traversal of its nodes'
 *  values. (i.e., from left to right, level by level). **/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const Node = require('./node');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderTraversal = (root) => {
    const queue = [root];
    let nodes = [];

    while (queue.length > 0) {
        let queue_length = queue.length;
        let temp_nodes = [];

        for (let i = 0; i < queue_length; i++) {
            const curr = queue.shift();
            if (curr) {
                temp_nodes.push(curr.val);
                if (curr.left) {
                    queue.push(curr.left);
                }

                if (curr.right) {
                    queue.push(curr.right);
                }
            }
        }

        if (temp_nodes.length > 0) {
            nodes.push(temp_nodes);
        }
    }

    return nodes;
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

console.log(levelOrderTraversal(a));