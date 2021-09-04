/*
 * @lc app=leetcode.cn id=377 lang=javascript
 *
 * [377] 组合总和 Ⅳ
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  //排列!!!!!!!!!!
  //外层背包
  for (let i = 0; i <= target; i++) {
    //数字
    for (let j = 0; j < nums.length; j++) {
      // 1 2 3 
      // 0 遍历 123  
      // 1          dp[0]              1
      // 2          dp[1] dp[0]        2
      // 3          dp[2] dp[1] dp[0]    4
      //4           dp[3] dp[2] dp[1]   4 2 1
      if (i - nums[j] >= 0) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }
  return dp[target]
};
// @lc code=end

