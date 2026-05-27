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

        function backtrack(index, currStr) {
            if (index === digits.length) {
                result.push(currStr);
                return;
            }

            const characters = digitsMap[digits[index]];
            for (const c of characters) {
                backtrack(index + 1, currStr + c);
            }
        }

        backtrack(0, "");
        return result;
    }
}
