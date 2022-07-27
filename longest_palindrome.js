// 409. Longest Palindrome
/**
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let hashMap = {};

    for (let i = 0; i < s.length; i++) {
        if (hashMap[s[i]] != undefined) {
            hashMap[s[i]] = hashMap[s[i]] + 1;
        } else {
            hashMap[s[i]] = 1;
        }
    }

    let result = 0;

    for (let item in hashMap) {
        console.log(result);
        result += Math.floor(hashMap[item] / 2) * 2;
        console.log(item, hashMap[item], Math.floor(hashMap[item] / 2), Math.floor(hashMap[item] / 2) * 2, result % 2, hashMap[item] % 2);
        if (result % 2 == 0 && hashMap[item] % 2 == 1) {
            result += 1;
        }
    }



    return result;
};

console.log(longestPalindrome('abccccdd'));