const reverseString = (str) => {
    let final = "";
    for (let i = str.length-1; i >= 0; i--) {
        final += str[i];
    }
    
    return final;
}

console.log(reverseString('hello'));