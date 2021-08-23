/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  //dp[j] 容量为j的背包的重量最大值 
  //状态转移：dp[j]=Math.max(dp[j],dp[j-stone[i]]+stone[i]) 当限定容量在重量的一半，实则就是在分2组
  //初始化 全为0
  //顺序  先物品后重量
  //打印
  let sum = stones.reduce((pre, cur) => { return pre + cur }, 0)
  let target = Math.floor(sum / 2)
  let dp = Array(target + 1).fill(0)
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return (sum - dp[target]) - dp[target]
};
// @lc code=end

