/*
输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。
如果有多对数字的和等于s，则输出任意一对即可。
输入：nums = [2,7,11,15], target = 9
输出：[2,7] 或者 [7,2]
*/
var twoSum = function (nums, target) {
  //1 map
  var MyMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if ((MyMap.has(target - nums[i]))) {
      return [nums[MyMap.get(target - nums[i])], nums[i]]
    }
    else {
      MyMap.set(nums[i], i)
    }
  }
  //二分查找 


  //双指针 （最优解) O(N) 0(1)
  let left = 0, right = nums.length - 1, sum;
  while (left < right) {
    sum = nums[left] + nums[right]
    if (sum == target) {
      return [nums[left], nums[right]]
    }
    if (sum < target) {
      lef++;
    }
    if (sum > target) {
      right++;
    }
  }
}