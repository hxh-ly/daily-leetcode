/* 备忘录 */
var trap = function (height) {
  /* 2个数组 l_list right_list  含义第i个元素的left最长  right最长 */
  var n = height.length
  var res = 0
  var l_list = new Array(n).fill(0)
  var r_list = new Array(n).fill(0)
  l_list[0] = height[0]
  r_list[0] = height[n - 1]
  for (let i = 1; i < n; i++) {
    l_list[i] = Math.max(height[i - 1], height[i])
  }
  for (let j = n - 2; j >= 0; j--) {
    l_list[j] = Math.max(height[j + 1], height[j])
  }
  for (let i = 1; i < n - 1; i++) {
    res += Math.min(l_list[i], r_list[i]) - height[i]
  }
  return res;
}
/*
双指针
*/
var trap = function (height) {
  /* 
    leftMax 和 rightMax
    left 和 right、
    height【left】<height【right】
    说明 leftMax<rightMax
  */
  var left = 0, right = height.length - 1
  var leftMax = 0, rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])
    if (height[left] < height[right]) {
      res += leftMax - height[left]
      left++;
    } else {
      res += rightMax - height[right]
      right--;
    }
  }
  return res;
}