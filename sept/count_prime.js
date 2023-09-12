// Leetcode 204

// Given an integer n, return the number of prime numbers that are strictly less than n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let count_prime = 0;

    for (let i = 2; i < n; i++) {
        count_prime += checkIsPrime(i) ? 1 : 0;
    }

    return count_prime;
};

const checkIsPrime = function (n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(countPrimes(10)); // 4
console.log(countPrimes(461465)); // 0
console.log(countPrimes(1)); // 0