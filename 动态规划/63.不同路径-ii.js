/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let n = obstacleGrid.length, m = obstacleGrid[0].length
  let dp = Array.from(new Array(n), () => new Array(m).fill(0))
  //列
  for (let i = 0; i < m && obstacleGrid[0][i] == 0; i++) {
    dp[0][i] = 1;
  }
  //行
  for (let j = 0; j < n && obstacleGrid[j][0] == 0; j++) {
    dp[j][0] = 1;
  }
  //console.log(dp);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (obstacleGrid[i][j] != 1) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]

      }
    
    }
  }
  return dp[n - 1][m - 1]
};
// @lc code=end

