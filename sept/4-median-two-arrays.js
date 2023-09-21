/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 * The overall run time complexity should be O(log (m+n)).
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let low = 0;
    let high = nums1.length;
    let n1 = nums1.length, n2 = nums2.length;

    while (low <= high) {
        let partition1 = Math.floor((high - low) / 2) + low;
        let partition2 = Math.floor((n1 + n2) / 2) - partition1;


        let l1 = partition1 == 0 ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
        let l2 = partition2 == 0 ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];


        let r1 = partition1 == n1 ? Number.MAX_SAFE_INTEGER : nums1[partition1];
        let r2 = partition2 == n2 ? Number.MAX_SAFE_INTEGER : nums2[partition2];


        if (l1 > r2) {
            high = partition1 - 1;
        } else if (l2 > r1) {
            low = partition1 + 1;
        } else {
            console.log(n1, n2, l1, l2, r1, r2);
            return (n1 + n2) % 2 == 0 ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2 : Math.min(r1, r2);
        }

    }

    return false;
};

// console.log(findMedianSortedArrays([1, 2], [3]));
// console.log(findMedianSortedArrays([1, 5, 8, 10, 18, 20], [2, 3, 6, 7]));
// console.log(findMedianSortedArrays([2,3,4,5], [1]));
console.log(findMedianSortedArrays([1,2], [3,4]));