/* 输入：nums = [1,0,1,0,1], goal = 2
输出：4
解释：
如下面黑体所示，有 4 个满足题目要求的子数组：
[1,0,1,]
[1,0,1,0]
[ ,0,1,0,1]
[ , ,1,0,1] */

//做法 前缀和 +哈希
var numSubarraysWithSum = function (nums, goal) {
  //前缀和 和 哈希
  let sum = [0]
  //前缀和数组 比nums长一个
  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1]
  }
  let ans = 0
  //存前缀和数组
  let myMap = new Map()
  myMap.set(0, 1)
  for (let i = 0; i < nums.length; i++) {
    let r = sum[i + 1], l = r - goal;
    //存在 子数组之间差值为goal的 
    ans += myMap.get(l) || 0
    // myMap添加前缀和数组
    myMap.set(r, (myMap.get(r) || 0) + 1)

  }
  return ans
};