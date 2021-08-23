/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  //dp[i][j]表示到达 (i,j)的路径数
  //状态
  //dp初始化
  //顺序
  //打印
  /* let dp = []
  for (let i = 0; i < m; i++) {
    dp[i] = Array(n).fill(0)
    for (let j = 0; j < n; j++) {
      if (i == 0) {
        dp[i][j] = 1;
      }
      if (j == 0) {
        dp[i][j] = 1;
      }
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {  
       dp[i][j] = dp[i - 1][j] + dp[i][j - 1]   
    }
  }
  return dp[m - 1][n - 1] */
  let dp = Array(n).fill(1)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1]
    }
  }
  return dp[n - 1]
};
// @lc code=end

