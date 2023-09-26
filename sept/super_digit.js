function superDigit(n, k = 0) {
    // Write your code here
    let digit_s = n.toString();
    if (digit_s.length == 1) {
        return n;
    }
    
    digit_s = k > 0 ? digit_s.repeat(k) : digit_s;
    
    let super_digit = 0;

    
    for(let c of digit_s) {
        super_digit = super_digit + parseInt(c);
    }
    
    if (super_digit / 10 > 1) {
        return superDigit(super_digit, 1);
    } else {
        return super_digit;
    }
}

console.log(superDigit(9875, 4));
console.log(superDigit(148, 3));