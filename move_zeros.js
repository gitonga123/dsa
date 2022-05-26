const moveZeros = (nums) => {
    let s = nums.length; //size or array;

    let count = 0; // keep track of non zeros
    for (let i = 0; i < s; i++) {
        if (nums[i] != 0) {
            nums[count++] = nums[i];
        }
    }

    while (count < s) {
        nums[count++] = 0;
    }
}

let arr = [1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
moveZeros(arr);