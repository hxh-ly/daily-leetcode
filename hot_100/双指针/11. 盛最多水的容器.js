/* 
找出盛水最多的区域
*/
var maxArea = function (height) {
  // 双指针+    
  // area= Max ( Math.min(height[i],height[j]) * (i-j)  )
  // left right  哪个小哪个往内移动。
  let left = 0, right = height.length - 1, res = 0
  let n = height.length
  if (n <= 1) return -1
  while (left < right) {
    var minHeight = Math.min(height[left], height[right])
    res = Math.max(res, (right - left) * minHeight)
    if (height[left] < height[right]) {
      left++;
    }
    else right--;
  }
  return res;
};