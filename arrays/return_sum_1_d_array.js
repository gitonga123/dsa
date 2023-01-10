/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    const newArray = nums.map(item => {
        sum = item + sum;
        return sum;
    });

    return newArray
};



console.log(runningSum([1,2,3,4,5])) // [1,3,6,10,15]
