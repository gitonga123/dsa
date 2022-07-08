class Node {
    constructor(val) {
        this.right = null;
        this.left = null;
        this.val = val;
    }
}


const deleteNodes = (root, to_delete) => {
    let remaining = [];

    let toDelete = new Set(...to_delete);

    removeNodes(root, toDelete, remaining);

    if (!toDelete.has(root.val)) {
        remaining.add(root);
    }

    return remaining;


    function removeNodes(root, toDelete, remaining) {
        if (root == null) {
            return null;
        }

        root.left = removeNodes(root.left, toDelete, remaining);
        root.right = removeNodes(root.right, toDelete, remaining);

        if (toDelete.has(root.val)) {
            if (root.left != null) {
                remaining.push(root.left);
            }

            if (root.right != null) {
                remaining.push(root.right);
            }

            return null;
        }

        return root;
    }
}


