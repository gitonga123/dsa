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
 var wordBreak = function(s, wordDict) {
    let start = 0;
    let left = 0;
    let right = 0;
    let wordSet = new Set(wordDict);
    let found = [];

    for (let index = 0; index < s.length; index++) {
        let word = s.substring(start, index);
        console.log(word, start, index);
        if (wordSet.has(word)) {
            //console.log(word, start, index);
            start = index;
            found.push(true);
        }

    }

    return found.length == wordDict.length;
};

let s = "catsandog", wordDict = ["cats","dog","sand","and","cat"];

console.log(wordBreak(s, wordDict));