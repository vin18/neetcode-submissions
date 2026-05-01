class Solution {
public:
    int count = 0;
    int result = 0;
    int kthSmallest(TreeNode* root, int k) {
        dfs(root, k);
        return result;
    }

    void dfs(TreeNode* root, int k) {
        if (!root) return;
        dfs(root->left, k);
        if (++count == k) {
            result = root->val;
            return;
        }
        dfs(root->right, k);
    }
};