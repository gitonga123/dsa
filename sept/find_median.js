function findMedian(arr) {
    // Write your code here
    let length_arr = arr.length;
    let mid = Math.floor(length_arr/2);
    
    const sorted_array = arr.sort((a, b) => a - b);
    
    if (length_arr % 2 == 0) {
        return (sorted_array[mid - 1] + sorted_array[mid])/ 2
    } else {
        return sorted_array[mid];
    }
}

array = [0, 1,2, 4,6,5, 3]

console.log(findMedian(array));