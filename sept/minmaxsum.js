function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((accumulator, value) => accumulator + value);


    let sums = arr.map(item => {
        return sum - item;
    });

    console.log(Math.min(...sums), Math.max(...sums));
}

const arr = [1, 3, 5, 7, 9]
const sumTotal = arr.reduce((acc, i) => acc + i, 0);
const minNum = Math.min(...arr);
const maxNum = Math.max(...arr);
const countHigger = sumTotal - minNum;
const countLower = sumTotal - maxNum;
console.log(`${ countLower } ${countHigger}`)
// miniMaxSum([1, 3, 5, 7, 9]);
// miniMaxSum([1, 2, 3, 4, 5]);