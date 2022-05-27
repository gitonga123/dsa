/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length <= 1) return false;
    
    let uniqueN = new Set(nums);
    console.log(uniqueN);
    return uniqueN.size === nums.length;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))