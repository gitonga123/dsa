const spiralMatrix = (matrix) => {
    let nums = [];
    if (matrix.length == 0) return nums;

    let top = 0, left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let lengthM = matrix.length * matrix[0].length;
    while (nums.length < lengthM) {
        for (let i = 0; left <= right && nums.length < lengthM; i++) {
            nums.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom && nums.length < lengthM; i++) {
            nums.push(matrix[i][right]);
        }
        right--;
        for (let i = right; i>=left && nums.length < lengthM; i--) {
            nums.push(matrix[bottom][i]);
        }
        bottom--;
        for (let i = bottom; i>= top && nums.length < lengthM; i++) {
            nums.push(matrix[i][left]);
        }
        left++;
    }
    return nums;
}

console.log(spiralMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));