/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  //dp[i] 表示 重量在i内的时候的元素和  当元素重量为target,元素和为target说明存在
  let dp = Array(12).fill(0)
  let sum = nums.reduce((pre, cur) => { return pre + cur }, 0)
  // 单数不可以
  if (sum % 2 == 1) { return false }
  let target = sum / 2
  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
  }
  console.log(dp);
  return dp[target] == target;
};
// @lc code=end

