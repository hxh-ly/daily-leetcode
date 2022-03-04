/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  //dp[i] 表示 i个结点的二叉树排列
  //状态   dp[3]=dp[0]*dp[2]+dp[1]*dp[1]+dp[2]*dp[0]
  //初始值  dp[0] dp[1] dp[2]
  //顺序  for(i个结点  for(根是 1 2 3... i))
  //打印
  let dp = Array(n + 1).fill(0)
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // 3 = 以3为头节点的情况 + 以2为头节点的情况 + 以1为头节点的情况
      dp[i] += dp[j - 1] * dp[i - j]
    }
  }
  return dp[n]
};
// @lc code=end

