const isPrime = (n) => {
    if (n < 2) return false;
    let div = 0;

    for (let index = 2; index < n; index++) {
        if (n%index === 0) {
            return false
        }
    }

    return true;
}


console.log(1, isPrime(1));
console.log(2, isPrime(2));
console.log(3, isPrime(3));
console.log(4, isPrime(4));
console.log(5, isPrime(5));
console.log(23, isPrime(23));
console.log(13, isPrime(13));
console.log(7, isPrime(7));

// O(n)