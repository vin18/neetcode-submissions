class Solution {
public:
    int findMin(vector<int> &nums) {
        int low = 0, high = nums.size() - 1, result = nums[0];
        while (low <= high) {
            if (nums[low] < nums[high]) {
                result = min(result, nums[low]);
                break;
            }
            int mid = (low + high) / 2;
            result = min(result, nums[mid]);
            if (nums[mid] >= nums[low]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return result;
    }
};
