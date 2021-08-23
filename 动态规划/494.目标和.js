/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  // left-right=target
  //left +right=sum
  //left= (target+sum)/2  
//dp[j] 填满j容量的背包有几种方法
//dp[j]=dp[j]+dp[j-nums[i]]
//初始化dp[0]=1
//顺序 物品 背包（大到小）
//打印
  let sum = nums.reduce((pre, cur) => { return pre + cur }, 0)
  //总和比部分和小 不可能
  if (target > sum) { return 0 };
  //加起来不能使小数
  if ((target + sum) < 0 || (target + sum) % 2 == 1) { return 0; }

  let left = (target + sum) / 2
  let dp = Array(1 + left).fill(0)
  dp[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = left; j >= nums[i]; j--) {
      dp[j] = dp[j] + dp[j - nums[i]]
    }
  }
  return dp[left]

};
// @lc code=end

