/**
 * Objective
 * 
 * Write a function, printTree(), which prints a given tree to stdout. Details
 * 
 * The argument of printTree is a stream of Relations: pairs of "parent -> child" relationships.
 * Each parent can have many children
 * The input list may contain Relations in any order, although
 * 
 * The order in which the pairs appear in the input list determines the nodes order with respect to its siblings.
 */
// Example input

class Relation {
    constructor(parent, child) {
        this.parent = parent;
        this.child = child;
    }
}

class TreePrinter {
    list = [];
    set = new Set();
    tree = [];
    parent = "";
    constructor(list) {
        this.list = list;
    }
    buildTree() {
        let adjacency = {};

        this.list.forEach(element => {
            if (!adjacency[element.parent]) {
                adjacency[element.parent] = [];
            }
            adjacency[element.parent].push(element.child);
            this.set.add(element.child);
        });
        this.tree = adjacency;
    }

    getRootNode() {
        let parent = "";
        let keys = Object.keys(this.tree);
        keys.forEach(item => {
            if (!this.set.has(item)) {
                parent = item;
            }
        });

        this.parent = parent;
    }
    printTree() {
        this.buildTree();
        this.getRootNode();

        function dfs(root, level, map) {
            for (let i = 0; i < level; i++) {
                process.stdout.write(" ");
            }

            process.stdout.write(root);
            process.stdout.write("\n");
            let children = [];
            if (map[root]) {
                children = map[root];
            } else {
                return;
            }


            for (let child of children) {
                dfs(child, level + 1, map);
            }
        }

        dfs(this.parent, 0, this.tree);
    }
}
const input = [];

input.push(new Relation('animal', "mammal"));
input.push(new Relation('animal', "bird"));
input.push(new Relation('lifeform', "animal"));
input.push(new Relation('cat', "lion"));
input.push(new Relation('mammal', "cat"));
input.push(new Relation('animal', "fish"));


const obj = new TreePrinter(input);

obj.printTree();
// Print Tree
//1: lifeForm
//2.    animal
//3.        mammal
//4.            cat
//5.                lion
//6         bird
//7.        fish
