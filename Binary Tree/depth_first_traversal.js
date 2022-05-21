const depthFirstTraversal = (root) => {
    if (root == null) return [];
    const stack = [root];
    let nodes_list = [];
    while (stack.length > 0) {
        const current = stack.pop();

        if (current) {
            nodes_list.push(current.value);
        }
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);

    }

    return nodes_list;
}

const depthFirstTraversalRecursive = (root) => {
    if (root === null) return [];

    const left = depthFirstTraversalRecursive(root.left);
    const right = depthFirstTraversalRecursive(root.right);
    return [root.value, ...left, ...right];
}

module.exports = {
    depthFirstTraversal,
    depthFirstTraversalRecursive
}
