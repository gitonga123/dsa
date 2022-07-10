// 56. Merge Intervals
/**
 * Given an array of intervals where intervals[i] = [starti, endi],
 * merge all overlapping intervals, and
 * return an array of the non-overlapping intervals that cover all the intervals in the input.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let output = [intervals[0]];

    while (intervals.length > 0) {
        const arr1 = intervals.shift();
        if (output[output.length - 1][1] >= arr1[0]) {
            let newArray = [Math.min(output[output.length - 1][0], arr1[0]), Math.max(output[output.length - 1][1], arr1[1])];
            output[output.length - 1] = newArray;
        } else {
            output.push(arr1);
        }
    }

    return output;
};

let intervals = [[1,4], [0,0]];
console.log(merge(intervals));