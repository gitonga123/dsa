/**
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
 */
/**
 * Input: s = "abc",
 * t = "ahbgdc"
 * Output: true
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let pointS = 0;
    let pointT = 0;

    while (pointS < s.length && pointT < t.length) {
        if (s[pointS] === t[pointT]) {
            pointS++
            if (pointS == s.length) {
                return true;
            }
        }
        pointT++;
    }

    return false;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));