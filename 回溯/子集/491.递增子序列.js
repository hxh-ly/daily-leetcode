
/* 
给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是 2 。

*/
var findSubsequences = function (nums) {
  let res = []
  let path = []

  var backTracking = function (nums, index) {
    if (index >= nums.length) {
      //res.push([...path])
      return
    }
    let set = new Set()
    for (let i = index; i < nums.length; i++) {
      // 如果 先加入的小于 path的尾部 || set有已经存在元素
      if (i > index && nums[i] == nums[i - 1] || nums[i] < path[path.length - 1] || set.has(nums[i])) {
        continue;
      }

      path.push(nums[i])
      set.add(nums[i])
      if (index >= 1) {
        res.push([...path])
      }
      backTracking(nums, i + 1)
      path.pop()
    }

  }
  backTracking(nums, 0)
  return res
};