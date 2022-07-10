// 995. Minimum Number of K Consecutive Bit Flips
//You are given a binary array nums and an integer k.

//A k-bit flip is choosing a subarray of length k from nums and simultaneously changing every 0 in the subarray to 1, and every 1 in the subarray to 0.

//Return the minimum number of k-bit flips required so that there is no 0 in the array. If it is not possible, return -1.

// A subarray is a contiguous part of an array.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
    let counter = 0;
    while (counter <= k) {
        if (nums[k] == 0) {
            nums[k] == 1;
        }

        if (nums[k] != 0) {
            k = k + 1;
        }

        counter = counter + 1;
    }

    return k;
};

console.log(minKBitFlips([0, 1, 0], 1))