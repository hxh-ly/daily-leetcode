//在矩形里找 'ABCCDE'

/* 遍历二维数组 + 
  【dfs】 
顺序下上右左 
【回溯】 
找到置 '\0' 
回溯置word[k] 
*/

var exist = function (board, word) {
  console.log(word)
  word = word.slice('')
  var dfs = function (board, word, i, j, k) {
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || word[k] != board[i][j]) { return false }
    if (k == word.length - 1) return true
    board[i][j] = '-'
    /* 少了关键一行 */

    //下上右左
    let res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i, j - 1, k + 1)
    board[i][j] = word[k]
    return res;
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, i, j, 0)) return true;
    }
  }
  return false;
};
