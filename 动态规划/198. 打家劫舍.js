//动态规划
// 大规模 -----------> 小规模  
// 中间结果的记录

// 可由递归进行转换

//模板
//1.baseCae
//2.状态转移方程 
//3.缓存中间结果  前二个
//4.顺序  0 --> n-1

var rob = function (nums) {
  let n = nums.length;
  if (n == 0) return 0;
  if (n == 1) return nums[0]
  /*  let dp = [nums[0], Math.max(nums[0], nums[1])]
   for (let i = 2; i < n; i++) {
       dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
   }
   return dp[n - 1] */
  let pre1 = nums[0]
  let pre2 = Math.max(nums[0], nums[1])
  let res = pre2
  for (let i = 2; i < n; i++) {
    //选与不选
    res = Math.max(pre2, pre1 + nums[i])
    pre1 = pre2
    pre2 = res
  }
  return pre2
};