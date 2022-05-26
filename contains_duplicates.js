/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let countD = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (countD[element]) {
            countD[element] = countD[element] + 1;
            return true;
        }
        countD[element] = 1;

    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))