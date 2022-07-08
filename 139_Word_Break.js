// 139 Word Break
/**
 * Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 * Note that the same word in the dictionary may be reused multiple times in the segmentation.
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const table = new Array(s.length + 1).fill(false);
    table[0] = true;

    let myDict = new Set(...wordDict);

    for (let i = 0; i < table.length; i++) {
        if (table[i] === false) continue;

        for (let j = i + 1; j < table.length; j++) {
            if (myDict.has(s.slice(i, j))) [
                table[j] = true
            ]
        };
    }

    return table[table.length - 1];
};

let s = "leetcode", wordDict = ["leet", "code"];

console.log(wordBreak(s, wordDict));