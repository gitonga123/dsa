class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(data) {
        var newNode = new Node(data);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    removeNode(node, key) {
        if (node == null) {
            return null;
        }
        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            } else {
                // deleting node with two children
                // find the minimum node of the right subtree
                // is sorted in aux

                var aux = this.findMinNode(node.right);
                node.data = aux.data;
                node.right = this.removeNode(node.right, aux.data);
                return node;
            }
        }
    }
    // finds the minimum node in tree
    // searching starts from given node
    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }


    print() {
        if (this.root == null) {
            return [];
        }
        const nodes = [];
        const stack = [this.root];
        while (stack.length > 0) {
            const curr = stack.pop();
            nodes.push(curr.data);
            if (curr.right) {
                stack.push(curr.right);
            }
            if (curr.left) {
                stack.push(curr.left);
            }
        }

        return nodes;
    }

    inorder(node) {
        if (node != null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    preorder() {
        if (node != null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }

    postorder() {
        if (node != null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    search(node, data) {
        if (node == null) {
            return null;
        }

        if (data > node.data) {
            return this.search(node.right, data);
        } else if (data < node.data) {
            return this.search(node.left, data);
        } else {
            return node;
        }
    }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(5);
bst.insert(11);
bst.insert(20);
bst.insert(22);
bst.insert(17);
bst.insert(1);

console.log(bst.print());