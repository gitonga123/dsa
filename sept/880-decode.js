/**
 * 
 * You are given an encoded string s. To decode the string to a tape, the encoded string is read one character at a time and the following steps are taken:
 * If the character read is a letter, that letter is written onto the tape.
 * If the character read is a digit d, the entire current tape is repeatedly written d - 1 more times in total.
 * Given an integer k, return the kth letter (1-indexed) in the decoded string.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function (s, k) {
    let length = 0;
    let i = 0;

    while (length < k) {
        if (!isNaN(s[i])) {
            length *= Number(s[i]);
        } else {
            length++;
        }
        i++;
    }

    for (let j = i - 1; j >= 0; j--) {
        if (!isNaN(s[j])) {
            length /= Number(s[j]);
            k %= length;
        } else {
            if (k === 0 || k === length) {
                return s[j];
            }
            length--;
        }
    }

    return "";
};

console.log(decodeAtIndex('leet2code3', 10));
console.log(decodeAtIndex('ha22', 5));
console.log(decodeAtIndex('a2345678999999999999999', 1));
console.log(decodeAtIndex('y959q969u3hb22odq595', 222280369));
// leetleetcodeleetleetcodeleetleetcode
// leetleetcodeleetleetcodeleetleetcode