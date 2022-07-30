/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let visited = new Set();
    let numsArr = Array.from(String(n), Number);

    function dfs(n, key, visited) {
        if (visited.has(key)) {
            return false;
        }

        let sum = n.reduce((a, b) => a ** 2 + b ** 2);
        key = String(sum);
        visited.add(key);

        if (sum == 1) {
            return true;
        }

        const numsArr = Array.from(String(sum), Number);


        return dfs(numsArr, key, visited);
    }

    return dfs(numsArr, "", visited);
};
let n = 19;
console.log(isHappy(n));