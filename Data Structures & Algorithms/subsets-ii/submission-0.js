class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const result = [];
        nums.sort();
        function backtracking(index, path) {
            if (index === nums.length) {
                result.push([...path]);
                return;
            }

            path.push(nums[index]);
            backtracking(index + 1, path);

            let next = index + 1;
            while (next < nums.length && nums[index] === nums[next]) next++; 

            path.pop();
            backtracking(next, path);
        }   

        backtracking(0, []);
        return result;
    }
}
