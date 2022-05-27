const phoneBookCheckup = (phone, strings) => {
    let phoneS = phone.toString();

    const hashMap = { 'a': 2, 'b': 2, 'c': 2, 'd': 3, 'e': 3, 'f': 3, 'g': 4, 'h': 4, 'i': 4, 'j': 5, 'k': 5, 'l': 5, 'm': 6, 'n': 6, 'o': 6, 'p': 7, 'q': 7, 'r': 7, 's': 7, 't': 8, 'u': 8, 'v': 8, 'w': 9, 'x': 9, 'y': 9, 'z': 9 };

    const hashMap2={};

    const phoneNums = strings.map(item => {
        let number = '';
        for (let i = 0; i < item.length; i++) {
            if (hashMap[item[i]]) {
                number += hashMap[item[i]].toString();
            }
        }
        hashMap2[number+""] = item;
        return number;
    });

    const correctStrings = phoneNums.filter(item => {
        if (""+phoneS.indexOf(item) >= 0) {
            return item;
        }
    });

    const fSs = correctStrings.map(item => {
        return hashMap2[item];
    });
   
    return fSs;
}

const phone = "36622777277";
const words = ["foo", "bar"];

console.log(phoneBookCheckup(phone, words));