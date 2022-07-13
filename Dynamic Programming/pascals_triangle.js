/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 * In Pascal's triangle, each number is the sum of the two numbers directly above it as shown.
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let triangle = [[]];
    triangle[0] = [1];
    for(let i =1; i < numRows; i++) {
        triangle[i] = [];
        let temp = [0, ...triangle[i-1], 0];
        let nTemp=[];
        let counter = 0;
        let counterB = 1;
        while (counterB < temp.length) {
            nTemp.push(temp[counter] + temp[counterB]);
            counter++;
            counterB++;
        }
        triangle[i] = nTemp;
    }

    return triangle;
};

console.log(generate(7));