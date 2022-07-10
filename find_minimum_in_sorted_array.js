// 153. Find Minimum in Rotated Sorted Array
/**
 * Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let mid = Math.floor((nums.length - 1) / 2);
    let one = nums.splice(0, mid);
    let minLeft = binarySearch(nums.splice(0, mid));
    let minRight = binarySearch(nums);

    return minLeft < minRight ? minLeft : minRight;
};

const binarySearch = (array) => {
    let mid = Math.floor((nums.length - 1) / 2);
    let initial = array[mid];
    let left = 0;
    let right = 0;
    while (left <= right) {
        if (array[mid] < initial) {
            initial = array[mid];
            right = mid - 1;
        }
        if (array[mid] > initial) {
            left = mid + 1;
        }
    }

    return initial;
}

let nums = [3, 4, 5, 1, 2];
console.log(findMin(nums));