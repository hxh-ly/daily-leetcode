/* 
输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
*/

var maxSubArray = function (nums) {
  if (nums.length == 1) return nums[0]
  //1.basecase
  //2.转移   dp记录最长子串的值,不一定是最大值    Math.max(dp[i - 1] + nums[i], nums[i])  取与不取
  //3.中间   max 保留最大值 
  //4.顺序
  let dp = Array(nums.length)
  dp[0] = nums[0]
  let max = 0;
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    max = Math.max(dp[i], max)
  }
  return max
}