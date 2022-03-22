/* 
【题目】
给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
【例子】
[0,1,0]
2  
解释： 【0，1】 【1，0】

【思路】
1.把0变为-1
2.前缀和
3.求0的地方[:i]  [:j] 的最长子组长度
*/
var findMaxLength = function (nums) {
  //最长连续子数组 1.可能多个 2.要求是(1和0的数量相同)
  let ans = new Array(nums.length + 1).fill(0)
  let map = new Map([[0, 0]]), res = Number.MIN_SAFE_INTEGER
  for (let i = 1; i < ans.length; i++) {
      let t = (nums[i - 1] == 1 ? 1 : -1)
      ans[i] = ans[i - 1] + t
  }
  //console.log(ans)
  for (let i = 1; i < ans.length; i++) {
      if (map.has(ans[i])) {
          res = Math.max(res, i - map.get(ans[i]))
      } else
          map.set(ans[i], i)
  }
  return res == Number.MIN_SAFE_INTEGER ? 0 : res
};