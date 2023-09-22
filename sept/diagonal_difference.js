/**
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 */

function diagonalDifference(arr) {
    // Write your code here
    let left = 0, right = 0;
    let leftIndex = 0, rightIndex = arr[0].length - 1;
    for(let i = 0; i < arr[0].length; i++ ) {
        let item = arr[i]
        left += item[leftIndex++];
        right += arr[i][rightIndex--];
    }
    
    return Math.abs(left - right);
}

console.log(diagonalDifference([[11,2,4],[4,5,6], [10,8,-12]]));