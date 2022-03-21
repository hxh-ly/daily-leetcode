/* 
【题目】:
给你一个整数数组nums 和一个整数k,请统计并返回改数组中和为k的连续子数组的个数
【例子】：
nums = [1,1,1] , k = 2
【思路】：
前缀和 + hash（两数之和）
[i:j] -->假设和为k，  现在右[:j]-[:i] 如果和为 sum-k == (在map里) 就说明能找到这样的i
【当时解题】
问题在 ： count只统计了1次 初始化
          map要初始化     0---1
*/
var subarraySum = function (nums, k) {
  let myMap = new Map([[0, 1]])
  let count = 0
  let preSum = new Array(nums.length + 1).fill(0)
  //统计前缀和
  for (let i = 1; i <= nums.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1]
  }
  //找区间
  for (let i = 1; i <= preSum.length; i++) {
    //[i:j]
    if (myMap.has(preSum[i] - k)) {
      count += myMap.get(preSum[i] - k)
    }
    myMap.set(ans[i], myMap.get(ans[i]) + 1 || 1)
  }
  return count
}