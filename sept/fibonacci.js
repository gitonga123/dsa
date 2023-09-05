/**
 * Given a number 'n', find the first 'n' elements of the fibonacci sequence
 *  the first two numbers in the sequence are o and 1
 */
function fibonacci(n) {
    if (n == 0) return [0];
    if (n == 1) return [0, 1];
    let arr_val = [0, 1];

    while (n > 2) {
        arr_val.push(arr_val[arr_val.length - 2] + arr_val[arr_val.length - 1]);
        n = n - 1;
        sum = 0;
    }

    return arr_val;
}

console.log(fibonacci(7)); // [ 0, 1, 1, 2, 3, 5, 8]
  