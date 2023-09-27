function processData(input) {
    let even_string = '', odd_string = '';
    for (let index in input) {
        if (index % 2 == 0) {
            even_string += input[index];
        } else {
            odd_string += input[index];
        }
    }

    console.log(even_string.concat(" ", odd_string));
} 

processData("Hacker");
processData("Rank");

function reverseArray(arr) {
    
    let nS = "";
    
    for(let i = arr.length - 1; i >= 0; i--) {
        if ( i == 0) {
            nS += arr[i].toString();
        } else {
            nS += arr[i].toString().concat(" ");
        }
    }
    
    console.log(nS);
}

reverseArray([4,3,2,1]);