// 51. N-Queens
/**
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
 * Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
 * Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.
 */

/**
 * @param {number} n
 * @return {string[][]}
 * 
 * Entry function to the program
 */
var solveNQueens = function (n) {
    solutions = [];
    state = [];
    search(state, solutions, n);

    /**
 * 
 * @param {number} state 
 * @returns {boolean}
 * 
 * validates if a state can be used as the final solution
 */
    function is_valid_state(state, n) {

        return state.length == n;
    }

    /**
     * @param {number} state
     * @return {number[]}
     * 
     * generate valid solutions
     */
    function get_candidates(state, n) {
        if (state.length === 0) {
            return [...Array(n).keys()];
        }

        // find the next position in the state to populate
        let position = state.length;
        let temp = [...Array(n).keys()];
        let newS = new Set(temp);
        let candidates = newS;
        console.log(candidates);

        // Prune down candidates that place the queen into attacks
        for (let [row, col] of state.entries()) {
            console.log(row, col);
            // delete the column index, if it's occupied by a queen
            candidates.delete(col);
            let dist = position - row;
            candidates.delete(col + dist);
            candidates.delete(col - dist);
        }
        return candidates;
    }


    function search(state, solutions, n) {
        if (is_valid_state(state, n)) {
            state_string = state_to_string(state, n);
            solutions.push(state_string);;
            return;
        }


        let candidates = get_candidates(state, n);
        console.log("c", candidates);
        for (let i = 0; i < candidates.length; i++) {
            state.push(candidates[i]);
            search(state, solutions, n);
            state.pop();
        }
    }

    function state_to_string(state, n) {
        let res = [];
        for (i in state) {
            let string = '.'.repeat(3) + 'Q' + '.'.repeat(n - i - 1);
            res.append(string);
        }

        return res;
    }
    return solutions;
};

console.log(solveNQueens(4));