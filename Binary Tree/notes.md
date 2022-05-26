# Binary Tree

- is a tree where a parent has at most 2 children
- It can have 0, 1 or two children, its still a binary tree
- Exactly one root
- Exactly 1 path between the root node and any node

## Root

- A node that has no parent.

## Children

- The element that are directly under an element are called its children

## Parent

- The Element directly above a node is called its parent

## Leaf node

- a Node that has no children

Trees make its easy to manipulate hierarchical data, easy to search, router algorithms and etc.

A node is a binary tree can only have 2 children, that is the left child and the right child.

## Depth First Traversal

Takes the root of the binary, the root points to different nodes in the tree.

Transverses deepest node before switching across

1. Traverse the left subtree (Inorder)
2. Visit the root
3. Traverse the right subtree (inorder)

Check if a child exists before cutting across

The best adt to use is a stack

Exist the stack once the stack is empyty

Time Complexity 0(n)

Space Complexity 0(n)

## Breadth First Traversal

- Travel across before going deeper
- Queue adt to be used to achieve this
