function plusMinus(arr) {
    // Write your code here
    const map = {'positive': 0, 'negative': 0, 'zero': 0};
    let index = 0;
    let length_array = arr.length;
    
    while (index < length_array) {
        if (arr[index] === 0) {
            map['zero'] = map['zero'] + 1;
        }
        
        if (arr[index] > 0) {
            map['positive'] = map['positive'] + 1;
        }
        
        if (arr[index] < 0) {
            map['negative'] = map['negative'] + 1;
        }

        index++
    }
    
    console.log((map['positive']/length_array).toFixed(6));
    console.log((map['negative']/length_array).toFixed(6));
    console.log((map['zero']/length_array).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])