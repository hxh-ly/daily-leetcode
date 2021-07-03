/* 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

 

示例 1：

输入：nums = [1,2,2]
输出：[[],[1],[1,2],[1,2,2],[2],[2,2]] 
*/
var subsetWithDup = function (nums) {
  //排序
  nums = nums.sort((a, b) => {
    return a - b
  })
  let res = []
  let path = []
  var backTracking = function (nums, index, path) {
    res.push([...path])
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] == nums[i - 1]) {
        continue;
      }
      path.push(nums[i])
      backTracking(nums, i + 1, path)
      path.pop()
    }
  }
  backTracking(nums, 0, path)
  return res;
}
