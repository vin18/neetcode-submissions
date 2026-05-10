class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;
        const memo = new Array(n + 1).fill(-1);

        function robHelper(nums, index) {
            if (index === 0) return nums[index];
            if (index < 0) return 0;
            if (memo[index] !== -1) return memo[index];
            const picked = nums[index] + robHelper(nums, index - 2);
            const notPicked = robHelper(nums, index - 1);
            return memo[index] = Math.max(picked, notPicked);
        }

        return robHelper(nums, n - 1);
    }
}
