/**
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
 */
/**
 * Input: s = "egg", t = "add"
 * Output: true
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {

        if ((mapS.has(s[i]) && mapS.get(s[i]) !== t[i]) || (mapT.has(t[i]) && mapT.get(t[i]) !== s[i])) {
            return false;
        }

        mapS.set(s[i], t[i]);
        mapT.set(t[i], s[i]);
    }

    return true;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('badc', 'baba'));