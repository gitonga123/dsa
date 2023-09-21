/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function(nums) {
    let slow = 0, fast = 0;

    while(true) {
        slow = nums[slow]
        fast = nums[nums[fast]];


        if (slow === fast) break;
    }


    let slow2 = 0;

    while(true) {
        slow = nums[slow];

        slow2 = nums[slow2];

        if (slow === slow) return slow;
    }
};


console.log(findDuplicate([1,3,4,2,2])) // 2
console.log(findDuplicate([3,1,3,4,2])) // 3
