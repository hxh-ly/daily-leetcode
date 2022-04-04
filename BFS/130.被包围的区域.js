/* 
 将被包围的O改为X
 输入：
[X,X,X,X ]
[X,O,O,X ]
[X,O,X,X ]
[X,O,X,X ]
  输出：
[X,X,X,X ]
[X,X,X,X ]
[X,X,X,X ]
[X,O,X,X ]
*/

function solve(board) {
  //从边界
  let row=board.length,col=board[0].length
  //横首尾
  var dfs=function(board,i,j) {
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] == 'X'||board[i][j]=='-') {
      return
  }
  board[i][j] = '-'
  for (let k = 0; k < 4; k++) {
      let nx = i + direction[k][0]
      let ny = j + direction[k][1]
      dfs(board, nx, ny)
  }
  }
  for(let i=0;i<row;i++) {
    dfs(board,i,0) 
    dfs(board,i,col-1) 
   }
  //竖首尾
  for(let i=0;i<col;i++) {
   dfs(board,0,i) 
   dfs(board,row-1,i) 
  }
  //边界相邻的用 = 标记的 改回来
  //内部的O改为X
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        if (board[i][j] == 'O') {
            board[i][j] = 'X'
        } else if (board[i][j] == '-') {
            board[i][j] = 'O'
        }
    }
}
}
