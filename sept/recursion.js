function factorial(n) {
    let value = 1;
    if (n == 1) return 1;

    if (n == 2) return 2;

    value = n * factorial(n - 1);

    return value;
}

console.log(factorial(5));