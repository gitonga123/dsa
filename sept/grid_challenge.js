function gridChallenge(grid) {
    // sort the grid by row
    grid.forEach((row, index) => {
        let sortedRow = row.split("").sort().join("");

        grid[index] = sortedRow;
    });


    for (let i = 0; i < grid.length - 1; i++) {
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] > grid[i + 1][j]) {
                return "NO"
            }
        }
    }
    return "YES";
}

console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));