/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  //dp[i] 表示数字i的拆分最大值
  //动态规划  Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j))
  let dp = Array(n + 1).fill(0)
  dp[2] = 1
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j))
    }
  }
  return dp[n]
};
// @lc code=end

