//Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and
// all the elements on the secondary diagonal that are not part of the primary diagonal.
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let sets = new Set();
    let row = 0; column = 0;
    let primary_diagonal_sum = 0;
    let matrix_length = mat.length;
    for (let i = 0; i < matrix_length; i++) {
        let key = row + "," + column;
        primary_diagonal_sum += mat[row++][column++];
        sets.add(key);
    }
    column = column - 1;
    row = 0;
    while (row < matrix_length) {
        let key = row + "," + column;
        if (!sets.has(key)) {
            primary_diagonal_sum += mat[row][column];
            sets.add(key);
        }
        row++;
        column--;
    }

    return primary_diagonal_sum;
};
let mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(diagonalSum(mat));

mat = [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]];
console.log(diagonalSum(mat));

mat = [[5]];
console.log(diagonalSum(mat));