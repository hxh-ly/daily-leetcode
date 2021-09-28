/* 
给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。
若可行，输出任意可行的结果。若不可行，返回空字符串。
使得相邻不相同
"aeaeabcdcf"

"aeaeabcdcf"
*/
var reorganizeString = function (s) {
  //map总计频数  最大值 （max*2-1)>s.length 就 “ ”
  //排序
  //for ... map  
  // while 插完奇数插偶数
  var myMap = new Map(), max = Number.MIN_VALUE, res = []
  for (let i of s) {
    if (!myMap.has(i)) {
      myMap.set(i, 1)
    } else {
      myMap.set(i, myMap.get(i) + 1)
    }
    max = Math.max(max, myMap.get(i))
  }
  if (2 * max - 1 > s.length) return ""
  for (let item of myMap) {
    res.push(item)
  }

  var last = new Array(s.length).fill(0)
  res.sort((a, b) => b[1] - a[1])
  var index = 0;
  for (let i = 0; i < res.length; i++) {
    while (res[i][1]--) {
      last[index] = res[i][0]
      index += 2
      if (index >= s.length) index = 1;
    }

  }
  return last.join('')
}