// 34. Find First and Last Position of Element in Sorted Array
/**Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var searchRange = function (nums, target) {
//     let left = BinarySearch(nums, target, true)
//     let right = BinarySearch(nums, target, false)
//     return [left, right];
// }

// function BinarySearch(nums, target, leftBias) {
//     let left = 0;
//     let right = nums.length - 1;
//     let i = - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] > target) right = mid - 1;
//         if (nums[mid] < target) left = mid + 1
//         if (nums[mid] === target) {
//             i = mid;
//             if (leftBias) {
//                 right = mid - 1;
//             } else {
//                 left = mid + 1;
//             }
//         }
//     }
//     return i;
// };

var searchRange = (nums, target) => {
    let left = binarySearch(nums, target, true);
    let right = binarySearch(nums, target, false);
    return [left, right];
}

const binarySearch = (nums, target, searchLeft) => {
    let left = 0;
    let right = nums.length -1;
    let index = -1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
        else if (nums[mid] == target) {
            index = mid;
            if (searchLeft) {
                right = mid - 1;
                
            } else {
                left = mid + 1;
            }
        }
        
    }
    return index;
}
let nums = [5, 7, 7, 8, 8, 10], target = 8;

// console.log(searchRange(nums, target));
// nums = [5, 7, 7, 8, 8, 10], target = 6;
// console.log(searchRange(nums, target));

// nums = [], target = 0;
// console.log(searchRange(nums, target));

//nums = [3, 3, 3], target = 3;
nums = [3,3,3], target = 3;
console.log(searchRange(nums, target)); // 2, 5