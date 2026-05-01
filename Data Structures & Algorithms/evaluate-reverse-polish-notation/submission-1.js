class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (let token of tokens) {
            if (token === '+') {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(num1 + num2);
            }
            else if (token === '-') {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(num2 - num1);
            }
            else if (token === '*') {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(num1 * num2);
            }
            else if (token === '/') {
                const num1 = stack.pop();
                const num2 = stack.pop();
                stack.push(Math.trunc(num2 / num1));
            }
            else stack.push(Number(token));
        }
        return stack.pop();
    }
}
