var hammingWeight = function (n) {
    let bitS = n.toString(2);
    let count = 0
    for (let i =0; i < bitS.length; i++) {
        if (bitS[i] == 1) count++;
    }
    return count;
};
console.log(hammingWeight(11111111111111111111111111111101));