/**
 * Given an array of integers nums and a positive integer k, check whether it is possible to divide this array into sets of k consecutive numbers.
 * Return true if it is possible. Otherwise, return false.
 */

/**
 * 
 * @param {Number[]} hand 
 * @param {number} w 
 * @returns {boolean}
 */
const handOfStraight = (hand, w) => {
    if (hand.length % w !== 0) {
        return false;
    }

    let map = new Map();

    for (let index = 0; index < hand.length; index++) {
        if (map.has(hand[index])) {
            let count = map.get(hand[index]);
            map.set(hand[index], count + 1);
        } else {
            map.set(hand[index], 1);
        }

        count = 0;
    }
    while (map.size > 0) {
        let min_val = [...map][0][0];
        for (let card = min_val; card < (min_val + w); card++) {
            let count = map.get(card);
            if (count == 1) {
                map.delete(card);
            } else {
                if (map.has(card)) {
                    map.set(card, count - 1);
                }
            }
        }
    }
    return map.size === 0 ? true : false;
}

//console.log(handOfStraight([3,2,1,2,3,4,3,4,5,9,10,11], 3));
console.log(handOfStraight([3, 3, 2, 2, 1, 1], 3));