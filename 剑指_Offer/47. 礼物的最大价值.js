/* 输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 */

 /* 
 dp表示到达 【i】[j]的最大价值
 原地修改gird  O （1)
 i=0的情况
 j=0的情况
 */
var maxValue = function (grid) {
  //dp[i][j] 表示到表格[i][j]的最大价值
  //dp[i][j]=gird[i][j]+max(dp[i-1][j],dp[i][j-1])
  let n = grid.length, m = grid[0].length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) continue;
      if (i == 0) {
        grid[i][j] += grid[i][j - 1]
      }
      else if (j == 0) {
        grid[i][j] += grid[i - 1][j]
      }
      else {
        grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1])
      }
    }
  }
  return grid[n - 1][m - 1]

};