function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let newSet = new Set();
    for (let i of A) {
        newSet.add(i);
    }

    return newSet.size;
}
console.log(solution([1,2,3,4,2]));