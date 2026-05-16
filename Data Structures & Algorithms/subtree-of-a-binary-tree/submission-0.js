/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        function isSameTree(root1, root2) {
            if (!root1 && !root2) return true;

            if (
                !root1 ||
                !root2 ||
                root1.val !== root2.val
            ) {
                return false;
            }

            return (
                isSameTree(root1.left, root2.left) &&
                isSameTree(root1.right, root2.right)
            );
        }

        if (!root) return false;

        // current subtree matches
        if (isSameTree(root, subRoot)) {
            return true;
        }

        // search left or right subtree
        return (
            this.isSubtree(root.left, subRoot) ||
            this.isSubtree(root.right, subRoot)
        );
    }
}