// ** Given a string s, return the longest palindromic substring in s.
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
    if (str.length <= 0) return 0;

    let longest = -Infinity;

    for (let i = 0; i < str.length; i++) {
        let longestOdd = expandFromCenter(str, i, i);
        let longestEven = expandFromCenter(str, i-1, i);
        longest = Math.max(longest, longestEven, longestOdd);
    }

    return longest;
};

function expandFromCenter(str, left, right) {
    let i = 0;
    while (str[left - i] && str[left - i] === str[right + i]) {
        i++
    }
    i--;
    let string = str.slice(left - 1, right + i + 1);
    return string.length;
}

console.log(longestPalindrome('banana'));