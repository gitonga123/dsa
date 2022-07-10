const arrayProduct = (array) => {
    let output = [];
    output[0] = 1;

    for (let i = 1; i < array.length; i++) {
        output[i] = array[i - 1] * output[i - 1];
    }
    let R = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        output[i] = output[i] * R;
        R = R * array[i];
    }
    return output;

}

const arrayProductBruteForce = (array) => {
    let output = [];
    let L = array.length;
    output[0] = 1;

    for (let i = 1; i < L; i++) {
        output[i] = array[i - 1] * output[i - 1];
    }
    let R = 1;
    for (let i = L - 1; i >= 0; i--) {
        output[i] = output[i] * R;
        R = R * array[i]
    }


    return output;
}

console.log(arrayProduct([1, 2, 3, 4]));