class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea = 0;
        if (!grid && grid.length === 0) return maxArea;
        const rows = grid.length, cols = grid[0].length;

        function dfs(grid, i, j) {
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 0) {
                return 0;
            }
            grid[i][j] = 0;
            return (1  
                + dfs(grid, i+1, j) + dfs(grid, i-1, j)
                + dfs(grid, i, j+1) + dfs(grid, i, j-1)
            );
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 1) {
                    maxArea = Math.max(maxArea, dfs(grid, i, j));
                }
            }
        }
        return maxArea;
    }
}
