/* 
【题目】：
给你一个包含n个整数的数组nums,判断nums中是否存在三个元素a,b,c,使得a+b+c=0? 
答案不可以包含重复的三元组
【用例】
nums=[-1,0,1,2,-1,-4]
[-1,-1,2]
[-1,0,1]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  //1 排序
  //2 固定i  去重
  //3 left=i+1 right=nums.length-1  搜查 （去重）

  nums.sort((a, b) => a - b)
  var left, right;
  var res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] > 0) {
      return []
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue
    }
    left = i + 1;
    right = nums.length - 1
    while (left < right) {
      if (nums[i] + nums[left] < -nums[right]) {
        left++;
      }
      else if (nums[i] + nums[left] > -nums[right]) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]])
        //去重操作
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        //去重操作
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        left++;
        right--;
      }
    }
  }
  return res;
};