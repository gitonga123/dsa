const maxPathSum = (root) => {
    if (root == null) return -Infinity;
    if (root && root.left === null && root.right == null) return root.val
    const maxPathSumChild = Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )

    return root.val + maxPathSumChild;
}