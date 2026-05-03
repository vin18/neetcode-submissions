class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        if (!grid || grid.length === 0) return -1;
        const rows = grid.length, cols = grid[0].length;
        const queue = [];
        let freshOranges = 0;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 2) {
                    queue.push([i, j]);
                } else if (grid[i][j] === 1) {
                    freshOranges++;
                }
            }
        }

        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let minutes = 0;
        while (queue.length > 0 && freshOranges > 0) {
            minutes++;
            const levelSize = queue.length;
            for (let i = 0; i < levelSize; i++) {
                const [x, y] = queue.shift();
                for (const [dx, dy] of directions) {
                    const nx = dx + x;
                    const ny = dy + y;
                    if (
                        nx >= 0 && nx < rows && ny >= 0 && ny < cols && 
                        grid[nx][ny] === 1
                    ) {
                        grid[nx][ny] = 2;
                        queue.push([nx, ny]);
                        freshOranges--;
                    }
                }
            }
        }

        return freshOranges === 0 ? minutes : -1;
    }
}
