/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
    const table = new Array(amount + 1).fill(Infinity);

    table[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < table.length; i++) {
            if (coin <= i) {
                let idx = i - coin;
                let potentialAmount = table[idx] +1;
                table[i] = Math.min(potentialAmount, table[i])
            }
        }
    }

    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
}


console.log(coinChange([1,2,5], 11));