/**
 * Write a function `howSum(targetSum, numbers)`
 * that takes in targetSum and an array of numbers as arguments.
 * 
 * The function should return an array containing any combination of elements
 * that add up to exactly the targetSum.
 * 
 * If there is no combination that adds up to the targetSum, then return null
 * 
 * 
 * if there are multiple combinations possible, you may return any single one.
 */

const twoSum = (numbers, targetSum, memo = {}) => {
    if (targetSum in memo) {
        return memo[targetSum];
    }
    if (targetSum === 0) {
        return [];
    }
    if (targetSum < 0) {
        return null;
    }

    for (let i = 0; i < numbers.length; i++) {
        const rem = targetSum - numbers[i];
        const result = twoSum(numbers, rem, memo);
        if (result != null) {
            memo[targetSum] = [...result, numbers[i]];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(twoSum([2, 3], 7)); // false
console.log(twoSum([2, 3, 5, 4, 7], 7)); // true
console.log(twoSum([2, 3, 5], 5)); //true
console.log(twoSum([2, 4], 7)); // false
console.log(twoSum([7, 14], 7)); // true
console.log(twoSum([7, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 14, 14, 14], 3000)); // false
