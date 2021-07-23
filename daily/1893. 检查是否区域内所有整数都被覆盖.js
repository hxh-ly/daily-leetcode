
//每个元素统计自身在区间的次数，不需要真的统计 用差分就行
//如果在【left，right】里    
//前缀和怎么解释？ 
var isCovered = function (ranges, left, right) {
  let diff = Array(52).fill(0)
  //在 ranges的表示  可以反过来通过遍历i知道是不是在range里 
  for (const [l, r] of ranges) {
    //差分表示元素同时增加一个数
    diff[l]++;
    diff[r + 1]--;
  }
  let cur = 0  //>0 表示开始出现在某个范围里 
  for (let i = 1; i < 51; i++) {
    cur += diff[i]
    if (left <= i && i <= right && cur <= 0) {
      return false
    }
  }
  return true;
}

//时间复杂度 O（l+n)
//空间复杂度 O (l)