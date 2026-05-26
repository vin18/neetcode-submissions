class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const result = [];
        if (digits.length === 0) return result;

        const digitsMap = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "pqrs",
            "8": "tuv",
            "9": "wxyz"
        };

        function backtrack(index, currChar) {
            if (index === digits.length) {
                result.push(currChar);
                return;
            }
            const characters = digitsMap[digits[index]];
            for (let c of characters) {
                backtrack(index + 1, currChar + c);
            }
        };

        backtrack(0, "");
        return result;
    }
}
