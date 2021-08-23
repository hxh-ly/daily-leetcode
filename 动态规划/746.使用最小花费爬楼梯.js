/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  //dp的含义  dp[i] 到达第i台阶的最小花费体力值
  //转移       Math.min(dp[i-1]+dp[i-2])+cost[i]
  //dp的初始值  dp[0] dp[1]    ！如果到最后一个 不需要花费体力！
  //顺序    2~n 
  //打印
  let n = cost.length
  let dp = Array(n + 1).fill(0)
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i <= n; i++) {

    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])

  }
  //倒数第一步不需要花
  console.log(dp);
  return dp[n]
};


// @lc code=end

