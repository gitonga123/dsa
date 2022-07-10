const repetitiveCharacter = (input) => {
    let S = new Set();
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
        if (S.has(input[i])) {
            return input[i];
        }
        S.add(input[i]);
    }
    return null;
}

console.log(repetitiveCharacter('abcA'));