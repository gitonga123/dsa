// 733. Flood Fill
/**
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 * You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 * Return the modified image after performing the flood fill.
 */
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, color) {
    if (color == image[sr][sc]) {
        return image;
    }

    let rows = image.length;
    let cols = image[0].length;
    let source = image[sr][sc];
    dfs(image, sr, sc, color, rows, cols, source);
    return image;
}

const dfs = function (image, sr, sc, color, rows, cols, source) {
    if (sr < 0 || sr >= rows || sc < 0 || sc >= cols) {
        return;
    } else if (image[sr][sc] !== source) {
        return;
    }

    image[sr][sc] = color;


    dfs(image, sr - 1, sc, color, rows, cols, source);
    dfs(image, sr + 1, sc, color, rows, cols, source);
    dfs(image, sr, sc - 1, color, rows, cols, source);
    dfs(image, sr, sc + 1, color, rows, cols, source);
}

let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2;

console.log(floodFill(image, sr, sc, color));