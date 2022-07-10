/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * An input string is valid if:
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            stack.push(s[i]);
        } else {
            let temp = stack.pop();
            if (s[i] == ')' && temp != '(') {
                return false;
            } else if (s[i] == '}' && temp != '{') {
                return false;
            } else if (s[i] == ']' && temp != '[') {
                return false;
            }
        }
    }
    return stack.length == 0;
};

let s = "(()[]{})";
console.log(isValid(s));