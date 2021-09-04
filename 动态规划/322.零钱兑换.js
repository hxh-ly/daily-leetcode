/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  //dp[i] 构成最小的硬币数
  //dp[i]= min(dp[i],dp[i-coin[j]]+1)
  //初始化1个硬币满足自己
  //顺序 先背包 后硬币  先硬币后背包都行
  //！完全背包遍历的内循环是正序的 ！
  //打印
  /*  if (amount == 0) return 0;
   let dp = new Array(amount + 1).fill(Number.MAX_VALUE)
   for (let j = 0; j < coins.length; j++) {
     dp[coins[j]] = 1
   }
   for (let i = 1; i <= amount; i++) {
     for (let j = 0; j < coins.length; j++) {
       if (i - coins[j] >= 0 && dp[i - coins[j]] != Number.MAX_VALUE)
         dp[i] = Math.min(dp[i - coins[j]] + 1, dp[i])
     }
   }
   if (dp[amount] == Number.MAX_VALUE) return -1;
   return dp[amount] */
};
// @lc code=end

