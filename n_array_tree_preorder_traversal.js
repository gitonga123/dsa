/**
 * Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
 * Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value 
 */

/**
 * Input: root = [1,null,3,2,4,null,5,6]
 * Output: [1,3,5,6,2,4]
 */

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    let stack = [root];
    let result = [];
    
    while (stack.length > 0) {
        const current = stack.pop();
        result.push(current.val);
        for(let i = current.children.length - 1; i >= 0; i--) {
            stack.push(current.children[i]);
        }
    }
    
    return result;
};