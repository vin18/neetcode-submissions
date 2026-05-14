class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        function dfs(index, path) {
            if (index === nums.length) {
                result.push([...path]);
                return;
            }

            path.push(nums[index]);
            dfs(index + 1, path);

            path.pop();
            dfs(index + 1, path);
        }

        const result = [];
        dfs(0, []);
        return result;
    }
}
