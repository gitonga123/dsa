// https://www.educative.io/blog/data-structures-tutorial-advanced
// Every node in a trie represents an alphabet

// A node in a trie consists of three data members

// character (char): This stores the character that the node is supposed to contain.

// children[]: An array that consists of pointers to children nodes.
// The size of this array depends on the number of alphabets. All are set to null.

// isEndWord: A flag to indicate the end of a word. It is set to false by default and is only update when words end during insertion.

// Implementing a TrieNode class, each node would have at most 26 children if we are storing English Words.

// The root node (usually placed on top) contains 26 pointers, each representing a letter in the english alphabet.
// the pointers hold either null or another trieNode

// The children pointers have a zero index and all words are stored in top-to-bottom manner.
// Remember to always set the isEndWord flag to true on the last character to indicate the end of the word.

// Trie Node.
class TrieNode {
    constructor(char) {
        this.children = [];
        for (let i = 0; i < 26; i++) {
            this.children[i] = null;
        }
        this.isEndWord = false;
        this.char = char;
    }

    markAsLeaf() {
        this.isEndWord = true;
    }

    unMarkAsLeaf() {
        this.isEndWord = false;
    }
}

// Trie Tree
// Operations
// 1. Insertion in a trie.


/**
 * To insert a key(word) into a trie, you first check if the character in the key exists at the index you need it to be.
 * If it does, you set the isEndWord on the last character to true;
 * 
 * If a prefix is present, the new key world be added as an extension of the last prefix key.
 * The last case would be if there is no common prefix, the children nodes would be added to the root node
 * which is always null.
 * 
 * The key length determines the trie depth. Note that null keys are not allowed in a trie
 */

class Trie {
    constructor() {
        this.root = new TrieNode('');
    };

    getIndex(t) {
        return t.charCodeAt(0) - "a".charCodeAt(0);
    }
    insert(key) {
        if (key == null) {
            return;
        };

        key = key.toLowerCase();
        let currentNode = this.root;
        let index = 0;

        //Store the character index 
        //Iterate the trie with the given character index,
        //If the index points to null
        //simply create a TrieNode and go down a level 
        for (let level = 0; level < key.length; level++) {
            index = this.getIndex(key[level]);

            if (currentNode.children[index] == null) {
                currentNode.children[index] = new TrieNode(key[level]);
                console.log(String(key[level]) + " inserted");
            }
            currentNode = currentNode.children[index];
        }

        //Mark the end character as leaf node
        currentNode.markAsLeaf();
        console.log("'" + key + "' inserted");
    };

    //Function to search a given key in Trie
    search(key) {

        if (key == null) {
            return false; //null key
        }

        key = key.toLowerCase();
        let currentNode = this.root;
        let index = 0;

        //Iterate the Trie with given character index,
        //If it is null at any point then we stop and return false
        //We will return true only if we reach leafNode and have traversed the
        //Trie based on the length of the key

        for (var level = 0; level < key.length; level++) {
            index = this.getIndex(key[level]);
            if (currentNode.children[index] == null) {
                return false;
            }
            currentNode = currentNode.children[index];
        }
        if (currentNode != null && currentNode.isEndWord) {
            return true;
        }
        return false;
    };

    //Helper Function 
    hasNoChildren(currentNode) {
        for (let i = 0; i < currentNode.children.length; i++) {
            if (currentNode.children[i] != null)
                return false;
        }
        return true;
    }

    //Recursive function
    deleteHelper(key, currentNode, length, level) {
        let deletedSelf = false;

        if (currentNode == null) {
            console.log("Key does not exist");
            return deletedSelf;
        }

        //Base Case: If we have reached the node which points to the alphabet at the end of the key.
        if (level == length) {
            //If there are no nodes ahead of this node in this path
            //Then we can delete this node
            if (this.hasNoChildren(currentNode)) {
                currentNode = null;
                deletedSelf = true;
            }

            //If there are nodes ahead of currentNode in this path
            //Then we cannot delete currentNode. We simply unmark this as leaf
            else {
                currentNode.unMarkAsLeaf();
                deletedSelf = false;
            }
        }
        else {
            let childNode = currentNode.children[this.getIndex(key[level])];
            let childDeleted = this.deleteHelper(key, childNode, length, level + 1);
            if (childDeleted) {
                //Making children pointer also None: since child is deleted
                currentNode.children[this.getIndex(key[level])] = null;
                //If currentNode is leaf node that means currentNode is part of another key
                //and hence we can not delete this node and it's parent path nodes
                if (currentNode.isEndWord)
                    deletedSelf = false;

                //If childNode is deleted but if currentNode has more children then currentNode must be part of another key
                //So, we cannot delete currentNode
                else if (this.hasNoChildren(currentNode) == false)
                    deletedSelf = false;

                //Else we can delete currentNode
                else {
                    currentNode = null;
                    deletedSelf = true;
                }
            }
            else
                deletedSelf = false;
        }
        return deletedSelf
    }
}

let trie = new Trie('a');
console.log(trie);