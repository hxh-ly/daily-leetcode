/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function (board, word) {
  let directionX = [-1, 0, 1, 0]
  let directionY = [0, -1, 0, 1]
  function dfs(board, word, i, j, index) {
      if (board[i][j] != word[index]) return false
      if (index == word.length - 1) return true;

      let t = board[i][j];
      board[i][j] = '.';
      for (let z = 0; z < 4; z++) {
          let nx = i + directionX[z], ny = j + directionY[z]
          if (nx < 0 || nx >= board.length || ny < 0 || ny >= board[0].length || board[nx][ny] == '.') {
              continue;
          }
          if (dfs(board, word, nx, ny, index + 1)) return true
      }
      board[i][j] = t;
      return false
  }
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (dfs(board, word, i, j, 0))  return true
      }
  }
  return false;
};
