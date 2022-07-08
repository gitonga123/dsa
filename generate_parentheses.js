
/**
 * Only add open parenthesis if open < n
 * Only add a closing parentheses if closed < open
 * Valid if open==closed==n
 */
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    let result = []; // stores all possible combinations. 

    // recursive function that generates parenthesis when open == 0 and closed == 0 and open <= closed;
    function generate(open, closed, s = '') {
        if (open > closed) {
            return;
        }

        if (open === 0 && closed === 0) {
            result.push(s);
            return;
        }

        if (open > 0) {
            generate(open - 1, closed, s + "(");
        }

        if (closed > 0) {
            generate(open, closed - 1, s + ")");
        }
    }

    generate(n, n);

    return result;

};

console.log(generateParenthesis(2));