class Solution {
    isDigitSumPalindrome(N){
        let num_s = N.toString();
        let n_s = num_s.split("");
        
        let sum = n_s.reduce((a, b) => parseInt(a) + parseInt(b)); // (n)
        
        return this.isPalindrome(sum.toString()) ? 1 : 0; // (n)
        
        
    }
    
    isPalindrome(s) {
        for(let i = 0; i < Math.floor(s.length/2); i++) {
            if (s[i] !== s[s.length - i - 1]) {
                return false;
            }
        }
        
        return true
    }
}

const res = new Solution();

console.log(res.isDigitSumPalindrome(56));
console.log(res.isDigitSumPalindrome(98));