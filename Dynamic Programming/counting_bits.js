/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 */
/**
 * 
 * @param {*} number 
 * @returns []
 */
const generateBites = (number) => {
    let results = [];
    let memo = {};
    for (let i = 0; i <= number; i++) {
        function generate(num, result, memo) {
            if (num == 0) {
                return result.length;
            }

            if (memo[num]) {
                if (memo[num] !== 0) {
                    result.push(memo[num]);
                }
            } else {
                memo[num] = num % 2;
                if (memo[num] !== 0) {
                    result.push(memo[num]);
                }
            }

            return generate(Math.floor(num / 2), result, memo);
        }
        let numberOfBits = generate(i, [], memo);
        results.push(numberOfBits);
    }

    return results;
}

console.log(generateBites(12));

// console.log(generateBites(115));
// console.log(generateBites(1135));