/* 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

 

示例 1：

输入：nums = [1,1,2]
输出：
[[1,1,2],
 [1,2,1],
 [2,1,1]]
示例 2：

输入：nums = [1,2,3]
输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]] 
*/

/* tips:用vis[i]标记已经填过的数
解到这里并没有满足「全排列不重复」 的要求 
设定一个规则，保证在填第 idx 个数的时候重复数字只会被填入一次即可  从左往右第一个未被填过的数字 */
var permuteUnique = function (nums) {
  // 排序
  // vis 标记 1   回溯 vis会变成0
  let res = []
  let path = []
  var vis = new Array(nums.length).fill(false);
  nums.sort((a, b) => { return a - b })
  var backTracking = function (nums, index, path) {
    if (index == nums.length) {
      res.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (vis[i] || (i > 0 && nums[i] == nums[i - 1] && !vis[i - 1])) {
        continue;
      }
      path.push(nums[i])
      vis[i] = true
      console.log(path)

      backTracking(nums, index + 1, path)
      vis[i] = false
      path.pop()

    }
  }
  backTracking(nums, 0, path)
  return res
}