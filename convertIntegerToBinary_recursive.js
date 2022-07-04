const convertToBinary = (number, result) => {
    if (number === 0) {
        return result;
    }
    result += number % 2;

    return convertToBinary(Math.floor(number / 2), result);
}

console.log(convertToBinary(15, ''));