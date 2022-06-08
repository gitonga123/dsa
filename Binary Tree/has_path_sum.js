const Node = require('./node');

var hasPathSum = function(root, sum) {
    return dfs(root, 0, sum);
};

var dfs = function(curr, currentSum, targetSum) {
    if (!curr) {
        return false;
    }

    currentSum += curr.value;
    
    if (curr.left === null && curr.right === null) {
        return currentSum === targetSum;
    }
    
    return dfs(curr.left, currentSum, targetSum) || dfs(curr.right, currentSum, targetSum);
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

console.log(hasPathSum(a, 22));