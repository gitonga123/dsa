//You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

//Return the length of the longest substring containing the same letter you can get after performing the above operations.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    let count = {}, res = 0, l = 0;

    for (let r = 0; r < s.length; r++) {
        count[s[r]] = 1 + count[s[r], 0]
        while ((r - l + 1) - Math.max(Object.values(count)) > k) {
            count[s[l]] -= 1
            l += 1
        }

        res = Math.max(res, r - l + 1)
    }

    return res;
};

console.log(characterReplacement('abab'));