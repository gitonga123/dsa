var merge = function (nums1, m, nums2, n) {
    let i = m + n - 1;
    m -= 1;
    n -= 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[i] = nums1[m];
            m -= 1;
        } else {
            nums1[i] = nums1[n];
            n -= 1
        }
        i -= 1;
    }
};
console.log(mergeArrays(
    [1, 3, 4, 7],
    [2, 4, 6, 8],
    4,
    4,
));