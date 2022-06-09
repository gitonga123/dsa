var dfs = (root) => {
    if (root == null) { return; }
    const stack = [root];
    while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.value);
        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }
    }
}
