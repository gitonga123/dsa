// Fibonacci

const fibonacci = (number) => {
    if (number <= 2) return 1;
    return fibonacci(number - 1) + fibonacci(number - 2);
}
// dynamic programming
// Memoization
// store sub-problems
// retrieve the results;
// using a access a fast look up
//

// we can use a map/object
// key fib(key) -> value - results

const fibonacci2 = (number, memo = {}) => {
    if (number in memo) return memo[number];
    if (number <= 2) return 1;
    memo[number] = fibonacci2(number - 1, memo) + fibonacci2(number - 2, memo);
    return memo[number];

}

console.log(fibonacci2(6));
console.log(fibonacci2(7));
console.log(fibonacci2(8));
console.log(fibonacci2(50));