class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {

            if (node[c] == null) {
                node[c] = {}
            };
            node = node[c];
        }

        console.log(this.root);
        node.isWord = true;
    }

    traverse(word) {
        let node = this.root;
        for (let c of word) {
            node = node[c];
            if (node == null) return null;
        }
        return node;
    }

    search(word) {
        const node = this.traverse(word);
        return node != null && node.isWord === true;
    }

    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
}

myTrie = new Trie()
myTrie.insert('ball');

/**
 * Initialize your data structure here.
 */
var Trie = function () {
    this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    word.split('').forEach((char) => {
        if (!node[char]) node[char] = {};
        node = node[char];
    })
    node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.searchNode(word);
    return node != null ? node.isEnd == true : false;
};

/** javaScript
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.searchNode(prefix);
    return node != null;
};

Trie.prototype.searchNode = function (word) {
    let node = this.root;
    for (let char of word.split('')) {
        if (node[char]) {
            node = node[char]
        } else {
            return null;
        }
    }
    return node;
}