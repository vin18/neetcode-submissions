class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set();
        for (let num of nums) {
            set.add(num);
        }

        let maxSequenceCount = 0;
        for (let num of nums) {
            if (!set.has(num - 1)) {
                let currentSequenceCount = 1;
                let currentNum = num;
                while (set.has(currentNum + 1)) {
                    currentSequenceCount++;
                    currentNum++;
                }
                maxSequenceCount = Math.max(maxSequenceCount, currentSequenceCount);
            }
        }

        return maxSequenceCount;
    }
}
