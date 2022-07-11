/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 */

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let dp = [];

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <=n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
};

console.log(climbStairs(2));
console.log(climbStairs(3));