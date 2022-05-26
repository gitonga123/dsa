const binaryTree = require('./depth_first_traversal');
const binary = require('./breadth_first_traversal');
const search = require('./binary_tree_search');
const Node = require('./node');

describe('Binary Tree', () => {
    describe('Tree Traversal', () => {
        describe('Depth First Traversal', () => {
            describe('Depth First Traversal iterative', () => {
                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const f = new Node('f');

                    a.left = b;
                    a.right = c;
                    b.left = d;
                    b.right = e;
                    c.left = f;
                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'd', 'e', 'c', 'f'])
                    )
                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        ['a', 'b', 'd', 'e', 'c', 'f']
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const f = new Node('f');
                    const g = new Node('g');

                    a.left = b;
                    a.right = c;
                    b.left = d;
                    b.right = e;
                    c.right = f;
                    e.left = g;

                    //      a
                    //    /   \
                    //   b     c
                    //  / \     \
                    // d   e     f
                    //    /
                    //   g

                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'd', 'e', 'g', 'c', 'f'])
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a'])
                    )
                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        ['a']
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');

                    a.right = b;
                    b.left = c;
                    c.right = d;
                    d.right = e;
                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'c', 'd', 'e'])
                    )
                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        ['a', 'b', 'c', 'd', 'e']
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    expect(binaryTree.depthFirstTraversal(null)).toEqual(
                        expect.arrayContaining([])
                    )
                    expect(binaryTree.depthFirstTraversal(null)).toEqual(
                        []
                    )
                });
            });
            describe('Depth First Traversal recursive', () => {
                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const f = new Node('f');

                    a.left = b;
                    a.right = c;
                    b.left = d;
                    b.right = e;
                    c.left = f;
                    expect(binaryTree.depthFirstTraversalRecursive(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'd', 'e', 'c', 'f'])
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const f = new Node('f');
                    const g = new Node('g');

                    a.left = b;
                    a.right = c;
                    b.left = d;
                    b.right = e;
                    c.right = f;
                    e.left = g;

                    //      a
                    //    /   \
                    //   b     c
                    //  / \     \
                    // d   e     f
                    //    /
                    //   g

                    expect(binaryTree.depthFirstTraversalRecursive(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'd', 'e', 'g', 'c', 'f'])
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    expect(binaryTree.depthFirstTraversalRecursive(a)).toEqual(
                        expect.arrayContaining(['a'])
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');

                    a.right = b;
                    b.left = c;
                    c.right = d;
                    d.right = e;
                    expect(binaryTree.depthFirstTraversalRecursive(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'c', 'd', 'e'])
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    expect(binaryTree.depthFirstTraversalRecursive(null)).toEqual(
                        expect.arrayContaining([])
                    )
                });
            });
        });
        describe('Breadth First Traversal', () => {
            describe('Breadth First Traversal iterative', () => {
                test('Should Traverse tree Breadth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const f = new Node('f');

                    a.left = b;
                    a.right = c;
                    b.left = d;
                    b.right = e;
                    c.right = f;
                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'c', 'd', 'e', 'f'])
                    )
                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        ['a', 'b', 'c', 'd', 'e', 'f']
                    )
                });

                test('Should Traverse tree Breadth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const f = new Node('f');
                    const g = new Node('g');
                    const h = new Node('h');

                    a.left = b;
                    a.right = c;
                    b.left = d;
                    b.right = e;
                    c.right = f;
                    e.left = g;
                    f.right = h;

                    //      a
                    //    /   \
                    //   b     c
                    //  / \     \
                    // d   e     f
                    //    /       \
                    //   g         h


                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'])
                    );
                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
                    )
                });

                test('Should Traverse tree depth first - left to right', () => {
                    const a = new Node('a');
                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a'])
                    )
                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        ['a']
                    )
                });

                test('Should Traverse tree Breadth first - left to right', () => {
                    const a = new Node('a');
                    const b = new Node('b');
                    const c = new Node('c');
                    const d = new Node('d');
                    const e = new Node('e');
                    const x = new Node('x');

                    a.right = b;
                    b.left = c;
                    c.left = x;
                    c.right = d;
                    d.right = e;

                    //      a
                    //       \
                    //        b
                    //       /
                    //      c
                    //    /  \
                    //   x    d
                    //         \
                    expect(binary.breadthFirstTraversal(a)).toEqual(
                        expect.arrayContaining(['a', 'b', 'c', 'x', 'd', 'e'])
                    )

                    expect(binaryTree.depthFirstTraversal(a)).toEqual(
                        ['a', 'b', 'c', 'x', 'd', 'e']
                    )
                });

                test('Should Traverse tree Breadth first - left to right and check values contains', () => {
                    expect(binary.breadthFirstTraversal(null)).toEqual(
                        expect.arrayContaining([])
                    )
                });
                test('Should Traverse tree Breadth first - left to right and check values are equal', () => {
                    expect(binary.breadthFirstTraversal(null)).toEqual(
                        []
                    )
                });
            });
        });

        describe('Test if value exist in tree', () => {
            test('should return true ', () => {
                const a = new Node('a');
                const b = new Node('b');
                const c = new Node('c');
                const d = new Node('d');
                const e = new Node('e');
                const f = new Node('f');

                a.left = b;
                a.right = c;
                b.left = d;
                b.right = e;
                c.left = f;
                expect(search.searchTree(a, 'c')).toBeTruthy();
            });
            test('should return false ', () => {
                const a = new Node('a');
                const b = new Node('b');
                const c = new Node('c');
                const d = new Node('d');
                const e = new Node('e');
                const f = new Node('f');

                a.left = b;
                a.right = c;
                b.left = d;
                b.right = e;
                c.left = f;
                expect(search.searchTree(a, 'h')).toBeFalsy();
            });
            test('should return false ', () => {
                expect(search.searchTree(null, 'h')).toBeFalsy();
            });
        });
    });
});