const islandCount = (grid) => {
    const visited = new Set();
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let f = explore(grid, r, c, visited);
            if (f == true) {
                count += 1;
            }
        }
    }
    return count;
};

const explore = (grid, r, c, visited) => {

    if (!(r >=0 && r< grid.length) || !(c >= 0 && c < grid[0].length)) {
        return false;
    }

    if (grid[r][c] === "0") return false;

    const pos = r + "," + c;

    if (visited.has(pos)) return false;
    visited.add(pos);
    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);
    return true;
}

let grid = [
    ["1", "1", "0", "0", "0"],
    ["0", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
];

console.log(islandCount(grid));