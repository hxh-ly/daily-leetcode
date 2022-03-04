/* 
42.接雨水
计算排列柱子，下雨后能接多少雨水。
height:[0,1,0,2,1,0,1,3,2,1,2,1]
*/

//等于的情况限制计算矩形的面积


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //接雨水取决于 左右比当前高 就能计算。
  var n = height.length, ans = 0
  var stack = []
  for (let i = 0; i < n; i++) {
    //减可以拿第一个更大的
    var temp = height[i]
    //期待一个更小的 ，却来了一个更大的 等于号也会限制
    //只要有夹住的就可以计算
    while (stack.length > 0 && height[stack[stack.length - 1]] < temp) {
      var cur = stack[stack.length - 1]
      stack.pop()
      if (stack.length == 0) break;
      var l = stack[stack.length - 1]
      var r = i;
      var h = Math.min(height[l], height[r]) - height[cur]
      ans += h * (r - l - 1)
    }
    stack.push(i)
  }
  //console.log(ans);
  return ans;
}
trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
var dp_trap = function (height) {
  const n = height.length;
  if (n == 0) {
    return 0;
  }

  const leftMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  console.log(leftMax);
  console.log(rightMax);
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};
//dp_trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])