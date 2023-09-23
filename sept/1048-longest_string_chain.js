/**
 * 
 * You are given an array of words where each word consists of lowercase English letters.
 * wordA is a predecessor of wordB if and only if we can insert exactly one letter anywhere in wordA without changing the order of the other characters to make it equal to wordB.
 * 
 * For example, "abc" is a predecessor of "abac", while "cba" is not a predecessor of "bcad".
 * 
 * A word chain is a sequence of words [word1, word2, ..., wordk] with k >= 1, where word1 is a predecessor of word2, word2 is a predecessor of word3, and so on. A single word is trivially a word chain with k == 1.
 * 
 * Return the length of the longest possible word chain with words chosen from the given list of words
 * 
 * Using Dynamic Programming
 */


/**
 * @param {string[]} words
 * @return {number}
 */

function compare(s1, s2) {
    return s1.length - s2.length;
}

var longestStrChain = function (words) {
    // sorted the words array in increasing length of word in words;
    const sortedWords = words.sort(function (a, b) { return a.length - b.length });

    // store the value of the longest substring
    let longest_s = 0;

    // store memoization for all occurrences of word with length;
    let memo = new Map();

    sortedWords.forEach(word => {
        memo.set(word, 1);

        for (let i = 0; i < word.length; i++) {
            const next = word.slice(0, i).concat(word.slice(i + 1, word.length));

            if (next.length > 0 && memo.has(next)) {
                memo.set(word, Math.max(memo.get(word), memo.get(next) + 1));
            }
        }

        longest_s = Math.max(longest_s, memo.get(word))
    });

    return longest_s;
};

console.log(longestStrChain(["a", "b", "ba", "bca", "bda", "bdca"]));
console.log(longestStrChain(["xbc", "pcxbcf", "xb", "cxbc", "pcxbc"]));