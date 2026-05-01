class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = {};
        function climbStairsHelper(n) {
            if (n <= 1) return 1;
            if (n in memo) {
                return memo[n];
            }
            memo[n] = climbStairsHelper(n - 1) + climbStairsHelper(n - 2);
            return memo[n];
        }
        return climbStairsHelper(n);
    }
}
