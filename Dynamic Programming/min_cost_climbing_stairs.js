// 746. Min Cost Climbing Stairs
/**
 * You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
 * You can either start from the step with index 0, or the step with index 1.
 * Return the minimum cost to reach the top of the floor.
 */
/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
    let step1 = 0;
    let step2 = 0;

    for (let i = cost.length-1; i >= 0; i--) {
        let current_step = cost[i] + Math.min(step1, step2);
        step1 = step2;
        step2 = current_step;
    }

    return Math.min(step1, step2);
};

console.log(minCostClimbingStairs([10, 15, 20]));