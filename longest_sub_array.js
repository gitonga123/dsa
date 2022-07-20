//Given an array arr[] consisting of N integers, the task is to find the largest subarray consisting of unique elements only.
/**
 * 
 * @param {array} a 
 * @param {number} n 
 * @returns 
 */
const longestSubarray = (a, n) => {
    let index = new Map();
    let ans = 0;

    for (let i = 0; j = 0, i < n; i++) {
        j = Math.max(index.has(a[i]) ? index.get(a[i]) : 0, j);

        ans = Math.max(ans, i - j + 1);

        index.set(a[i], i + 1);
    }

    return ans;
}

let a = [1, 2, 3, 4, 5, 1, 2, 3];
let n = a.length

console.log(longestSubarray(a, n));

a = [1, , 2, 4, 4, 5, 6, 7, 8, 3, 4, 5, 3, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];
n = a.length;
console.log(longestSubarray(a, n));