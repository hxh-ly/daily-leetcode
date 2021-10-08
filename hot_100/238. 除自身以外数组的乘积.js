/* 
【题目】:给你一个长度为n的整数数组nums,返回输出数组output，其中output[i]等于nums中除了
nums[i]之外其余各元素的乘积。
 【1，2，3，4】
 【24，12，8，6】

【思路】：统计左边
         统计右边
         相乘
            1 2 3 4
     left   1 1 2 6
    right  24 12 4 1
           24 12 8  6
*/
var productExceptSelf = function (nums) {
  var left = 1, right = 1
  var res = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) {
    left *= nums[i - 1]
    res[i] = left
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    right *= nums[i + 1]
    res[i] *= right
  }
  return res
}
