
class Node {
    constructor(data, left = null, right = null) {
        this.val = data;
        this.left = left;
        this.right = right;
    }
}


const a = new Node(10);
const b = new Node(12);
const c = new Node(5);
const d = new Node(18);
const e = new Node(5);

a.left = c;
a.right = b;
c.left = e;
b.right = d;



//         10
//     5           12
// 5                   18

const maxPathSum = (root) => {
    if (root == null) return -Infinity;

    if (root && root.left === null && root.right == null) {
        return root.val
    }
    const maxPathSumChild = Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )
    //console.log("max child--->", maxPathSumChild);
    return root.val + maxPathSumChild;
}

console.log(maxPathSum(a));
