class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map();
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }
        const heap = new MinPriorityQueue(x => x[1]);
        for (const [num, freq] of Object.entries(count)) {
            heap.enqueue([num, freq]);
            if (heap.size() > k) heap.dequeue();
        }
        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, freq] = heap.dequeue();
            res.push(num);
        }
        return res;
    }
}
