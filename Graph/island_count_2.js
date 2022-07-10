const numberOfIslands = function (matrix) {

    if (matrix.length == 0) return 0;
    let count = 0; // island count
    const queue = [];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[i][j] == 1) {
                count++;
            }

            queue.push([row, col]);

            while (queue.length != 0) {
                let current = queue.shift();
                let currentRow = current[0];
                let currentColumn = current[1];

                matrix[currentRow][currentColumn] = 0;

                for (let i = 0; i < d.length;)
            }
        }
    }
}