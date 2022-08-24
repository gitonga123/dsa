/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let visited = new Set();
    let numsArr = (n + '').split('').map((i) => { return Number(i); });

    function dfs(n, key, visited) {

        let sum = sumOfItems(n);

        key = String(sum);

        if (visited.has(key)) {
            return false;
        }
        if (sum == 1) {
            return true;
        }

        n = sum;


        visited.add(key);
        
        const numsArr = (n + '').split('').map((i) => { return Number(i); });


        return dfs(numsArr, key, visited);
    }

    function sumOfItems(arr) {
        let sum = 0;
        arr.map(i => {
            sum += i ** 2;
        });
        return sum;
    }
    return dfs(numsArr, "", visited);
};
let n = 19;
n = 1  //true
console.log(1, isHappy(n));
n = 2  //false
console.log(2, isHappy(n));
n = 3  //false
console.log(3, isHappy(n));
n = 4  //false
console.log(4, isHappy(n));
n = 5  //false
console.log(5, isHappy(n));
n = 6  //false
console.log(6,isHappy(n));
n = 7  //true
console.log(7,isHappy(n));
n = 8  //false
console.log(8,isHappy(n));
n = 9  //false
console.log(9, isHappy(n));
n = 10 // true
console.log(10, isHappy(n));
n = 11 // false
console.log(11, isHappy(n));
n = 12 // false
console.log(12, isHappy(n));
n = 13 // true
console.log(13, isHappy(n));
n = 14 // false
console.log(14, isHappy(n));
n = 15 // false
console.log(15, isHappy(n));
n = 16 // false
console.log(16, isHappy(n));
n = 17 // false
console.log(17, isHappy(n));
n = 18 // false
console.log(18, isHappy(n));
n = 19 // true
console.log(19, isHappy(n));
n = 20 // false
console.log(20, isHappy(n));
n = 21 // false
console.log(21, isHappy(n));
n = 22 // false
console.log(22, isHappy(n));
n = 23 // true
console.log(23, isHappy(n));