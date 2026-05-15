class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length, cols = board[0].length;

        function dfs(r, c, index) {
            if (index === word.length) return true;
            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[index]) {
                return false;
            }
            const temp = board[r][c];
            board[r][c] = '@';
            const res = (
                dfs(r, c + 1, index + 1) || 
                dfs(r + 1, c, index + 1) || 
                dfs(r, c - 1, index + 1) || 
                dfs(r - 1, c, index + 1)
            );
            board[r][c] = temp;
            return res;      
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (board[i][j] === word[0] && dfs(i, j, 0)) {
                    return true;
                }  
            }
        }

        return false;
    }
}
