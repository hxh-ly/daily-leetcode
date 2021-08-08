/*
n=3
3个元素
元素在 0~3中
说明有一个要缺失
[0，1，2]  缺失3
[1,2,3]   缺少0
*/
/* 
【思路】
有序 2分查找快
==说明前面没有错位   left后移
！=前面错位了   right前移
return left 就是错位的缺失元素
*/
var missingNumber = function (nums) {
  let n = nums.length
  let left = 0, right = n - 1
  while (left <= right) {
    let mid = ~~(left + (right - left) / 2)
    if (nums[mid] == mid) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return left
};