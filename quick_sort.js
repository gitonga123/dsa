// Quick Sort 0(n log n)

var quickSort = (items, left, right) => {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);

        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }

        if (index < right) {
            quickSort(items, index, right);
        }
    }

    return items;
}

const swap = (items, leftIndex, rightIndex) => {
    const temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}

const partition = (items, left, right) => {
    let pivot = items[Math.floor((right + left) / 2)];

    while (left <= right) {
        while (items[left] < pivot) {
            left++;
        }
        while (items[right] > pivot) {
            right--;
        }

        if (left <= right) {
            swap(items, left, right);
            left++;
            right++;
        }
    }

    return left;
}

const items = [1,9,2,5,8,7];
const sortedArray = quickSort(items, 0, items.length - 1);

console.log(sortedArray);