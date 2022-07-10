// merge sort
// Big O O(n log n)

const merge = (left, right) => {
    let sortedArr = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}

const mergeSort = (array) => {
    const half = array.length / 2;
    if (array.length <= 1) {
        return array;
    }

    const left = array.splice(0, half);
    const right = array;
    return merge(mergeSort(left), mergeSort(right));
}


console.log(mergeSort([1, 8, 2, 9, 5]));
