/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// Brute force
const rotate = (array, k) => {
    let split = k % array.length;

    function helper(i, j) {
        while (i < j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            i++;
            j--;
        }
    }

    helper(0, array.length - 1);
    helper(0, split - 1);
    helper(split, array.length - 1);
    return array;
}


let nums = [1, 15, 3, 4, 5, 6, 7], k = 3;

console.log(rotate(nums, k));

const rotate2 = function (nums, k) {
    k %= nums.length // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to remainder shifts
    console.log(k);
    let reverse = function (i, j) {
        while (i < j) {
            let temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
            i++
            j--
        }
    } // suppose  ----->---> 
    reverse(0, nums.length - 1); // reverse   <--<------
    console.log(nums);
    reverse(0, k - 1) // reverse first part ---><----
    reverse(k, nums.length - 1)// reverse second part --->----->

    return nums;
}

nums = [1, 2, 3, 4, 5, 6, 7], k = 3;

console.log(rotate2(nums, k));