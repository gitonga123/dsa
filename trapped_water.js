/**
 * @param {number[]} height
 * @return {number}
 */
var trap1 = function (height) {
    let T = height.length;

    if (T < 3) return 0;

    let left = 0, right = T - 1;

    let leftMax = height[left], rightMax = height[right];

    let trapped = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);

            trapped += (leftMax - height[left]);
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);

            trapped += (rightMax - height[right]);
        }
    }

    return trapped;


};


const trap = function (height) {
    let L = height.length;
    if (L < 3) {
        return 0;
    }

    let left = 0, right = L - 1;
    let leftMax = height[left], rightMax = height[right];
    let trappedWater = 0;
    while (left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left]);
            trappedWater += (leftMax - height[left]);
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            trappedWater += (rightMax - height[right]);
        }
    }

    return trappedWater;

}
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap1(height));
console.log(trap(height));