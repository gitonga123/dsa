/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = [];
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            maxSum.push(nums[i]);
        } else {
            maxSum.push(Math.max(nums[i], (nums[i] + maxSum[i - 1])));
        }
    }
    return Math.max(...maxSum);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));