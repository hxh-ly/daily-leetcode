/*
【题目】
输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof
【题解】
动态规划
*/
var maxProfit = function (prices) {
  //1.basecase
  //2.状态方程  dp[i] =(dp[i-1],price[i]-最小的花费)
  //3.中间状态 dp[i]  表示前i天的最大收益
  //4.顺序
  if (prices.length == 0) return 0;
  let dp = Array(prices.length + 1).fill(0), cost = Number.MAX_VALUE
  dp[0] = 0
  for (let i = 1; i <= prices.length; i++) {
    cost = Math.min(cost, prices[i - 1])
    dp[i] = Math.max(dp[i - 1], prices[i - 1] - cost)
  }
  return dp[prices.length]

  //优化 dp变成sell
  /* 
  for (let i = 0; i < prices.length; i++) {
   cost = Math.min(cost, prices[i])
  sell = Math.max(sell, prices[i]-cost)
 }
 return sell
  
  */
  //
}