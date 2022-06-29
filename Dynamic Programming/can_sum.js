/**
 * Write a function `canSum(targetSum, numbers)` that takes in a
 * target sum and an array of numbers as arguments
 * 
 * The function should return a boolean indicating whether or not
 * it is possible to generate the targetSum using numbers from the array.
 * 
 * You may use an element of the array as many times as needed.
 * 
 * You may assume that all input numbers are nonnegative.
 */
const canSum = (numbers, targetSum, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    };
    if (targetSum === 0) { return true; };

    if (targetSum < 0) { return false; }
    for (let num = 0; num < numbers.length; num++) {
        const rem = targetSum - numbers[num];
        if (canSum(numbers, rem, memo) === true) {
            memo[targetSum] = false;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSum([2, 3], 7)); // false
console.log(canSum([2, 3, 5, 4, 7], 7)); // true
console.log(canSum([2, 3, 5], 5)); //true
console.log(canSum([2, 4], 7)); // false
console.log(canSum([7, 14], 7)); // true
console.log(canSum([7, 14, 14,14,14,15,15,15,15,15,15,15,15,14,14,14], 300)); // false

