/**
 * Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
 * For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24.
 * For the test cases, the range will be between 1 and 18 and the input will always be an integer.
 */
// interative solution
/**
 * 
 * @param {number} num 
 * @returns 
 */
 function FirstFactorial(num) { 
    let dp = [];
    dp[0] = 1;
    for (let i = 1; i <= num; i++) {
      dp[i] = dp[i-1] * i;
    }
    // code goes here
    return dp[num];
  
  }

// recursive function
function FirstFactorialRe(num) {
    if (num == 1) {
        return 1;
    }

    num *= FirstFactorial(num - 1);

    return num;
}
     
  // keep this function call here 
  console.log(FirstFactorial(4));
  console.log(FirstFactorialRe(4));