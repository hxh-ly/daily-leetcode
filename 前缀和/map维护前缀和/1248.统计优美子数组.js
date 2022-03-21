/* 
【题目】：
给你一个整数数组nums和一个整数k，如果某个连续子数组恰好有k个奇数数字，我们就认为这个子数组和【优美子数组】

【重点】：
只关注奇偶性，

【例子】
 [1,1,2,1,1]  ---> k=3   [1,1,2,1]  [1,2,1,1]
 [2,4,6]      ---->k=1
*/

var numberOfSubarrays = function (nums, k) {
  //1 前缀和统计奇偶的个数
  //2 map的差值==k 就能找到奇偶的区间 [i:j]
  let ans = new Array(nums.length).fill(0)
  let count = 0
  let myMap = new Map([[0,1]])
  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[i] % 2
}
ans.unshift(0)
//前缀和
for (let i = 1; i < ans.length; i++) {
  ans[i] = ans[i - 1] + ans[i]
}
//从1开始
for (let i = 1; i < ans.length; i++) {
  if (myMap.has(ans[i] - k)) {
      //console.log(ans[i],i)
      count += myMap.get(ans[i] - k)
  }
  myMap.set(ans[i], myMap.get(ans[i]) + 1 || 1)
}
return count
}
