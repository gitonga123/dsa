const firstDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] < 0) {
            return Math.abs(nums[i]);
        } else {
            nums[Math.abs(nums[i]) - 1] = -nums[Math.abs(nums[i]) - 1];
        }
    }

    return -1;
}

console.log(firstDuplicate([3,1,3,4,2]));