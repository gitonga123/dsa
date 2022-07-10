// Binary Search

const binarySearch = (arr, t) => {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((right + left)/2);
        if (arr[mid] == t) {
            return mid;
        }
        else if (t > arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

let searchArr = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(searchArr, 1));
console.log(binarySearch(searchArr, 2));
console.log(binarySearch(searchArr, 3));
console.log(binarySearch(searchArr, 4));
console.log(binarySearch(searchArr, 5));
console.log(binarySearch(searchArr, 6));
console.log(binarySearch(searchArr, 7));