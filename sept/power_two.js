// check if is power of two

const powerOfTwo1 = (n) => {
    if (n == 1) return true;

    for (let i = 1; i < n; i++) {
        if (Math.pow(2, i) == n) return true;
    }

    return false;
}

const powerOfTwo2 = (n) => {
    if (n == 1) return true;

    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }

        n = n / 2;
    }

    return true;
}

const powerOfTwo = (n) => {
    if (n < 1) return false;

    return (n & (n - 1)) === 0;
}

console.log(powerOfTwo(1)) // true
console.log(powerOfTwo(2)) // true
console.log(powerOfTwo(3))// false
console.log(powerOfTwo(4)) // true
console.log(powerOfTwo(5))// false
console.log(powerOfTwo(6))// false
console.log(powerOfTwo(7))// false
console.log(powerOfTwo(8)) // true
console.log(powerOfTwo(9))// False
console.log(powerOfTwo(10))// false