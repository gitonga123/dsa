/***
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (!nums) return -1

    let left_sum = 0;
    let right_sum  = nums.reduce((a, b) => a + b, 0);

    for (let i = 0; i < nums.length; i++) {
        right_sum -= nums[i];
        if (left_sum == right_sum) {
            return i;
        }

        left_sum += nums[i];
    }

    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6])); // 3
console.log(pivotIndex([1,2,3])); // -1
