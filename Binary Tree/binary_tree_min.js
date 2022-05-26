const treeMinValue = (root) => {
    let min = root.val;
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val < min) {
            min = current.val
        }
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
    }
    return min;
};