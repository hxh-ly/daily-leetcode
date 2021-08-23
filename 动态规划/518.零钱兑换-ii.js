/*
 * @lc app=leetcode.cn id=518 lang=javascript
 *
 * [518] 零钱兑换 II
 */

// @lc code=start
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0)
  //dp【j】表示 装满j的背包有多少种组合  dp[j]+=dp[j-nums[i]] //目标和
  dp[0] = 1
  for (let i = 0; i < coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (j >= coins[i])
        dp[j] += dp[j - coins[i]]
    }

  }
  
  return dp[amount]
};
// @lc code=end

