// we can improve using memoizing 

function factorial(n, mem = {}) {
    if (n == 1) return 1;

    value = n * factorial(n - 1, mem);

    return value;
}

const calculateSum = (n) => {
    if (n.length == 0) return 0;
    const rest = n.slice(1);
    return n[0] + calculateSum(rest);
}

const sum = (n) => {
    return _sum(n, 0);
}

const _sum = (array, index) => {
    if (index == array.length) return 0;

    return array[index] + _sum(array, index + 1);
}

// Time: O(n)
// space: O(n)
console.log(sum([5, 1 - 7, 8]));
