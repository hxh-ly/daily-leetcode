var intervals = [[1, 4], [5, 6]]

//v2 
var merge2 = function (intervals) {
  //prev 表示上一个
  //next 表示下一个
  //        在排个序
  //思路 ： 如果 prev的end >= next的start  就要扩充(取end的max)
  //        当不满足的时候，就结算 ans.push(prev),用这轮 i 做 prev
  //        结尾在push1次 ans.push(prev)
  intervals.sort((a, b) => a[0] - b[0])
  let prev = intervals[0].slice(), ans = []
  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] >= intervals[i][0]) {
      prev[1] = Math.max(prev[1], intervals[i][1])
    } else {
      ans.push([prev[0], prev[1]])
      prev = intervals[i].slice()
    }
  }
  ans.push(prev)
  return ans
}
















//v1 没有看到前缀和的解法
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let max = intervals[intervals.length - 1][1]
  let arr = Array(max + 1).fill(0) //index 18
  for (let i = 0; i < intervals.length; i++) {
    let item = intervals[i]
    arr[item[0]] += 1
    arr[item[1] + 1] -= 1
  }
  //多出来的一位
  arr[max + 1] = 0
  for (let j = 1; j <= max; j++) {
    arr[j] = arr[j - 1] + arr[j]
  }

  console.log(arr)
  let res = [], path = []
  for (let i = 0; i <= max + 1; i++) {
    if (arr[i] == 0) {
      if (path.length == 1) {
        path.push(i - 1)
        res.push(path)
        path = []
      }
    } else {
      if (path.length == 0) {
        path.push(i)
      }
    }
  }
  return res;
};
merge(intervals)

