const matrix = [[1, 2, 3], [4, 5, 6],[7, 8, 9]];

const rotateMatrix = (matrix) => {
    let L = matrix.length;

    for (let i = 0; i < L;i++) {
        for (let j = i; j < L; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];

            matrix[j][i] = temp;
        }
    }


    for (let i = 0; i < L; i++) {
        for (let j = 0; j < (L/2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][L-1-j];

            matrix[i][L-1-j] = temp;
        }
    }
}

rotateMatrix(matrix);
