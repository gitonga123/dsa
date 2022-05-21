const breadthFirstTraversal = (root) => {
    if (root == null) return [];
    const nodes_list = [];

    const queue = [root];

    while (queue.length > 0) {
        const current = queue.shift();
        nodes_list.push(current.value);

        if (current.left !== null) queue.push(current.left);
        if (current.right !== null) queue.push(current.right);
    }

    return nodes_list;
}

module.exports = {
    breadthFirstTraversal
}
