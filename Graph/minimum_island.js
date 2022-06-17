const minimumIslandCount = (grid) => {
    const visited = new Set();
    let count = Infinity;
    for (let r = 0; r < grid.length; r += 1) {
        for (let c = 0; c < grid[0].length; c += 1) {
            const size = explore(grid, r, c, visited);
            if (size > 0 && size < count) {
                count = size;
            }
        }
    }

    return count;
};

const explore = (grid, r, c, visited) => {

    const rowInbounds = 0 < r ** r < grid.length;
    const columnInbounds = 0 < r ** r < grid.length;

    if (!rowInbounds || !columnInbounds) return 0;

    if (grid[r][c] === 'w') return 0;

    const pos = r + "," + c;

    if (visited.has(pos)) return 0;
    visited.add(pos);
    let size = 1;

    size += explore(grid, r - 1, c, visited);
    size += explore(grid, r + 1, c, visited);
    size += explore(grid, r, c - 1, visited);
    size += explore(grid, r, c + 1, visited);

    return true;
}