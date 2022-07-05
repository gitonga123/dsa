// Give a list of integers, return a random number
// that is present within one of the ranges.
// every number has the same probability

const getRandomNumbers = (llist) => {
    let total_nums = 0;

    for (let index = 0; index < llist.length; index++) {
        total_nums += llist[index][1] - llist[index][0] + 1;
    }
    let random = Math.floor(Math.random() * (total_nums));
    
    for (let index = 0; index < llist.length; index++) {
        let current_range = llist[index][1] - llist[index][0];
        if (random <= current_range) {
            return llist[index][0] + random;
        } else {
            random = random - current_range;
        }
    }
    return 0;

}

let numbers = [[5, 8], [15, 20], [32, 34]];
console.log(getRandomNumbers(numbers));