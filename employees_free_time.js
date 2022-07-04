const _ = require('lodash')

function findFreeTime(employeeHours) {
    // flatten the employee hours;
    const flattened = _.flatten(employeeHours);
    const sorted = _.sortBy(flattened, interval => interval[0]);

    const mergeIntervals = [sorted.shift()];
    while (sorted.length) {
        const a = mergeIntervals.pop();
        const b = sorted.shift();


        const [aStart, aEnd] = a;
        const [bStart, bEnd] = b;

        // if they don't overlap
        if (bStart > aEnd) {
            mergeIntervals.push(a);
            mergeIntervals.push(b);
        } else {
            // they overlap
            const c = [aStart, Math.max(aEnd, bEnd)];
            mergeIntervals.push(c);
        }

    }

    const freeTime = [];

    _.forEach(mergeIntervals, (interval, idx) => {
        // if we haven't reached the end of our intervals
        if (mergeIntervals[idx + 1]) {
            // end of the first interval
            let endOfInterval1 = interval[1];
            let startOfInterval2 = mergeIntervals[idx + 1][0];
            freeTime.push(endOfInterval1, startOfInterval2);
        }
    })
    return freeTime;
}

console.log(findFreeTime([[[1, 3], [5, 6]], [[2, 3], [6, 8]]])); // [3-5]
console.log(findFreeTime([[[1, 3], [9, 12]], [[2, 4], [6, 8]]])); // [[4,6], [8-9]]
console.log(findFreeTime([[[1, 3]], [[2, 4]], [[3, 5]], [[7, 9]]])); // [[5-7]]
