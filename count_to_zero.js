// using recursion to count to zero
// big O Notation O(n);

const countToZero = (n) => {
    if (n < 0) { return; } else {
        console.log(n);
        countToZero(n - 1);
    }
}

countToZero(9);