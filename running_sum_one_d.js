// 1480. Running Sum of 1d Array
/**
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * Return the running sum of nums.
 */

// big O (n);
// space complexity O(n);
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let sums = [];
    sums[0] = nums[0];
    for(let i = 1; i < nums.length; i++) {
        sums[i] = sums[i-1] + nums[i];
    }
    
    return sums;
};


// without using extra space

var runningSum2 = function(nums) {
    let r = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + r;
        r = nums[i];
    }

    return nums;
}

console.log(runningSum([1,2,3,4]));
console.log(runningSum2([1,2,3,4]));