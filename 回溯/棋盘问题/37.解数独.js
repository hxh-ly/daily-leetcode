/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  var newTwoArray = function (n) {
      var arr = new Array();             //声明一维数组        
      for (var x = 0; x < n; x++) {
          arr[x] = new Array();        //声明二维数组
          for (var y = 0; y < n; y++) {
              arr[x][y] = 0;          //数组初始化为0
          }
      }
      return arr
  }
  let rows = newTwoArray(9)
  let cols = newTwoArray(9)
  let boxes = newTwoArray(9)
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        //已填的标记
          if (board[i][j] != '.') {
              // 1~9  但是 9 对应 8
              let n = Number(board[i][j] - 1)
              rows[i][n] = 1;
              cols[j][n] = 1;
              boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)][n] = 1;
          }
      }
  }

  var dfs = function (board, x, y) {
      // 向下走
      if (y == 9) {
          return true;
      }
      // 横
      let nx = (x + 1) % 9;
      // 竖
      let ny = (nx == 0) ? y + 1 : y
      // 已填跳过
      if (board[y][x] != '.') {
          return dfs(board, nx, ny)
      }
      //为填
      for (let i = 0; i < board.length; i++) {
          let bx = Math.floor(x / 3);
          let by = Math.floor(y / 3)
          let box_key = by * 3 + bx;
          //空的才能填
          if (!rows[y][i] && !cols[x][i] && !boxes[box_key][i]) {
            //记录 + 修改board
              rows[y][i] = 1;
              cols[x][i] = 1;
              boxes[box_key][i] = 1;
              board[y][x] = String(i + 1)
              //  
              if (dfs(board, nx, ny)) return true;
              //递归回退
              board[y][x] = '.'
              boxes[box_key][i] = 0;
              cols[x][i] = 0;
              rows[y][i] = 0;
          }
      }
      return false;
  }

  dfs(board, 0, 0)
};



