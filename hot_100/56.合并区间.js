/* 
题目：合并区间，打印区间数组
双指针
t记录最大值
t去欺负start比他小的，拿end中比他大的
 区间就是left,t
下一波又从left=right 开始

for ...left~n
right=left+1
 for ( left+1【0】<t)
 {
   t=max(t,【1】)
 }
 left=right
 res.push(left[0],t)
 return res
*/
var merge = function (intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let left = 0, res = []
  while (left < intervals.length) {
    var t = intervals[left][1]
    var right = left + 1
    while (right < intervals.length && intervals[right][0] <= t) {
      t = Math.max(t, intervals[right][1])
      right++;
    }
    res.push([intervals[left][0], t])
    left = right;
  }
  return res
};