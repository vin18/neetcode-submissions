class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        if (!grid || grid.length === 0) return count;
        const rows = grid.length, cols = grid[0].length;

        function dfs(grid, i, j) {
            grid[i][j] = "0";
            if (i+1 < rows && grid[i+1][j] === '1') {
                dfs(grid, i+1, j);
            }
            if (i > 0 && grid[i-1][j] === '1') {
                dfs(grid, i-1, j);
            }
            if (j+1 < cols && grid[i][j+1] === '1') {
                dfs(grid, i, j+1);
            }
            if (j > 0 && grid[i][j-1] === '1') {
                dfs(grid, i, j-1);
            }
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === "1") {
                    dfs(grid, i, j);
                    count++;
                }
            }
        }
    
        return count;
    }
}
