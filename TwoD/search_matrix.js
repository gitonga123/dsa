//Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

//Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let left = 0; right = matrix[0].length - 1;
    let l = 0; r = matrix[0].length;
    let counter = 0;
    while (left <= right && counter < matrix.length) {
        if (target >= matrix[counter][left] && target <= matrix[counter][right] ) {
            let mid = Math.floor((right + left) / 2);
            if (matrix[counter][mid] == target) {
                return true;
            } else if (target > matrix[counter][mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            counter = counter + 1;
        }
    }
    return false;
};
let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
console.log(searchMatrix(matrix, target));
console.log(searchMatrix(matrix, 11));
console.log(searchMatrix(matrix, 30));