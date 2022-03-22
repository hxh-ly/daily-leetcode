/* 
【题目】:
给定一个数组nums和一个目标值k,找到 和等于k的最长子数组长度，如果不存在任意一个符合要求的子数组，则返回0；
【例子】：
输入：nums = [ 1,-1,5,-2,3 ],k=3
输出：[1,-1,5,-2]

【思路】：
1.前缀和
2.map保存第一个索引
3.max统计【i:j】的最大长度
*/
function maxSubArrayLen(nums, k) {
  let ans = Array(nums.length + 1).fill(0)
  let map = new Map([[0,0]])
  for (let i = 1; i <= ans.length; i++) {
    ans[i] = ans[i - 1] + nums[i - 1]
  }
  for (let i = 1; i <= ans.length; i++) {
    if (map.has(ans[i] - k)) {
      // [i:j] 能找到
      res = Math.max(res, i - (map.get(ans[i] - k) + 1))
    }else {

      map.set(ans[i], i)
    }
  }
  return res;
}
