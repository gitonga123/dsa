/**
 * @param {number[]} nums
 * @param {number} x
Nihil qui quasi ipsu
 */
const minOperations = function(nums, x) {
    let ans = solve(nums, x, 0, nums.length - 1, 0);

    return ans >= Number.MAX_SAFE_INTEGER ? -1 : ans;
};

const mem = {};
const solve = (nums, x, left, right, count) => {
    if (x === 0) {
        return count;
    }

    if (x < 0 || left > right) {
        return Number.MAX_SAFE_INTEGER;
    }

    let key = left.toString()+":"+right.toString()+":"+x.toString();

    if ((key in mem)) {
        return mem[key];
    }
    let L = solve(nums, x - nums[left], left+1, right, count + 1);
    let R = solve(nums, x - nums[right], left, right - 1, count + 1);


    return mem[key] = Math.min(L, R);
}


console.log(minOperations([1,1,4,2,3], 5));

console.log(minOperations([5,1,2,1,5], 2));

console.log(minOperations([3,2,20,1,1,3], 10));