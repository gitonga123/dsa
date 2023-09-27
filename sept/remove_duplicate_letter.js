/**
 * 316. Remove Duplicate Letters
 */
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    const newSet = new Set();

    for (let c of s) {
        if (!newSet.has(c)) {
            newSet.add(c);
        }
    }

    return Array.from(newSet).sort().join("");
};

console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));
