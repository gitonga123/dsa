/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    const alphabtetArr = "abcdefghijklmnopqrstuvwxyz";
    const tempArr = s.split("")
    let result = []
    tempArr.forEach(element => {
        if (!alphabtetArr.includes(element.toLowerCase())) {
            result.push(element)
            return
        }
        const isUpperCase = element === element.toUpperCase();
        const tempIndex = alphabtetArr.indexOf(element.toLowerCase());
        const value = alphabtetArr.charAt((tempIndex + k) % 26)
        result.push(isUpperCase ? value.toUpperCase() : value)
    })
    return result.join("")
}

console.log(caesarCipher('abcd-z', 3));