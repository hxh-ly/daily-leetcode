/* 方法一：回溯 */
var exist = function (board, word) {
/* 
1  对每个结点都要遍历 2层for
2  终止条件多  idx范围 || find || visited || board[i][j]==word[pos] 
3  for 剪枝
*/

  if (!board) return false;
  var find = false
  var visited = Array.from(new Array(board.length), () => new Array(board[0].length).fill(0))
  var backtracking = function (board, i, j, pos) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || visited[i][j] || find || board[i][j] != word[pos]) {
      return
    }
    if (pos == word.length - 1) {
      find = true
      return
    }
    visited[i][j] = true
    backtracking(board, i + 1, j, pos + 1)
    backtracking(board, i - 1, j, pos + 1)
    backtracking(board, i, j + 1, pos + 1)
    backtracking(board, i, j - 1, pos + 1)
    visited[i][j] = false
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      backtracking(board, i, j, 0)
    }
  }

  return find;
};
/* 方法二：dfs */
var exist = function (board, word) { 


}