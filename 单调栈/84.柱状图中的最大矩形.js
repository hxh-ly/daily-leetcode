/* 
【题目】
数组表示矩形高度

数组 [2,1,5,6,2,3]  【5,6】
求勾勒出最大矩形面积。

【单调栈】
每个元素左右第一个比他小的值。 【left】 【right】 
等于的情况不限制计算矩形
*/
var largestRectangleArea = function (heights) {
  var n = heights.length;
  //从左到右更小的数
  var left = new Array(n).fill(n)
  //从右到左更小的数
  var right = new Array(n).fill(-1)
  var stack = []
  for (let i = 0; i < n; i++) {
    //单增要 cur>stack.pop()
    let cur = heights[i]
    while (stack.length > 0 && cur < heights[stack[stack.length - 1]]) {
      //找到了第一个更小的
      var preIdx = stack.pop()
      //顶的下一个更小是cur对应的idx
      left[preIdx] = i
    }
    stack.push(i)
    //console.log(stack);
  }
  stack = []
  for (let i = n - 1; i >= 0; i--) {
    //
    let cur = heights[i]
    while (stack.length > 0 && cur < heights[stack[stack.length - 1]]) {
      var preIdx = stack.pop()
      right[preIdx] = i
    }
    stack.push(i)
  }
  var ans = 0
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, (left[i] - right[i] - 1) * heights[i])
  }
/*   console.log(left);
  console.log(right);
  console.log(ans); */
    return ans
};
largestRectangleArea([2, 1, 5, 6, 2, 3])