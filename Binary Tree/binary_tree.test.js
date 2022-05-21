const binaryTree = require('./depth_first_traversal');
const Node = require('./node');

describe('Binary Tree', () => {
    describe('Tree Traversal', () => {
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
            });

            test('Should Traverse tree depth first - left to right', () => {
                expect(binaryTree.depthFirstTraversal(null)).toEqual(
                    expect.arrayContaining([])
                )
            });
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