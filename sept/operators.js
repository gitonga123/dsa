// meal cost = 100
// tip = 15
// tax = 8

function lonelyinteger1(a) {
    let map = {};
    for (let i = 0; i < a.length; i++) {
        let key = a[i].toString();
        if (key in map) {
            map[key] = map[key] + 1;
        } else {
            map[key] = 1;
        }
    }


    for(let key in map) {
        if (map[key] === 1) {
            return key;
        }
    }

    return 0;
}

function lonelyinteger(a) {
    let set = new Set();

    a.forEach(element => {
        if (set.has(element)) {
            set.delete(element);
        } else {
            set.add(element)
        }
    });

    console.log(set);

    return Array.from(set)[0];
}

console.log(lonelyinteger([1]));
console.log(lonelyinteger([1,1,2]));
console.log(lonelyinteger([0,0,1,2,1]));