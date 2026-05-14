class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [];
        function backtracking(index, path) {
            if (index === nums.length) {
                result.push([...path]);
                return;
            }
            
            path.push(nums[index]);
            backtracking(index + 1, path);

            path.pop();
            backtracking(index + 1, path);
        }   

        backtracking(0, []);
        return result;
    }
}
