function solution(n) {
    // write your code in JavaScript (Node.js 8.9.4)
    let bin = Number(n).toString(2);
    let left = 0, right = 0, counter = 0;
    let gap = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[left] = 1 && bin[right] == 1) {
            gap = gap > counter ? gap : counter;
            counter = 0;
        }
        if (bin[i] == 1) {
            left = i;
        }
        if (bin[left] == 1 && bin[i] == 0) {
            counter += 1; 
        }
        
        right += 1;
    }

    return gap;
}

console.log(solution(9));
console.log(solution(15));
console.log(solution(32));
console.log(solution(529));
console.log(solution(20));
console.log(solution(6291457));