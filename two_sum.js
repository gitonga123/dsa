/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const sum = {};

    for (let i in nums) {
        if (sum[nums[i]] >= 0) {
            return [sum[nums[i]], parseInt(i)];
        }
        sum[target - nums[i]] = parseInt(i);
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));