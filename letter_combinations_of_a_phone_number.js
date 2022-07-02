// 17. Letter Combinations of a Phone Number
/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
 * Return the answer in any order.
 * A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === "") return [];
    let results = [];
    let combo = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    };

    function helper(i, perm = []) {
        if (i === digits.length) {
            results.push(perm.join(''));
            return;
        }

        let letters = combo[digits[i]];

        for (let letter of letters) {
            perm.push(letter);
            helper(i + 1, perm);
            perm.pop();
        }
    }

    helper(0, []);

    return results;

};


let digits = "23";
console.log(letterCombinations(digits));