// 378. Kth Smallest Element in a Sorted Matrix
/**
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * You must find a solution with a memory complexity better than O(n2).
 */

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    if (matrix.length === 0) {
        return;
    }
    let temp_array = [];
    let matrix_length = (matrix.length * matrix[0].length);

    while (temp_array.length < matrix_length) {
        const item = matrix.shift();

        temp_array = [...temp_array, ...item];
    }
    console.log(temp_array);

    temp_array.sort((a, b) => a - b);

    console.log(temp_array);
    return temp_array[k - 1];
};


let matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8;

console.log(kthSmallest(matrix, k));

// matrix = [[-5]], k = 1;

// console.log(kthSmallest(matrix, k));
// matrix = [[1, 2], [1, 3]], k = 2;

// console.log(kthSmallest(matrix, k));