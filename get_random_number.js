// Give a list of integers, return a random number
// that is present within one of the ranges.
// every number has the same probability

const getRandomNumbers = (llist) => {
    const minVal = llist[0][0];
    const maxVal = llist[llist.length - 1][1];
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
}

let numbers = [[5, 8], [15, 20], [30, 56], [80, 98]];
console.log(getRandomNumbers(numbers));