/**
 * @param {number[]} nums
 * @return {number}
 */

/* 
[2,2,3,4]
[2,2,3]
[2,2,3]
[2,3,4]
3个有效
 
*/
/* 
【思路】
1.排序
2.固定最长边
用left和right是否大于最长边快速判断
是 right--
不是 left--
*/
var triangleNumber = function (nums) {
  if (nums == null || nums.length < 3) return 0;
  nums.sort((a, b) => { return a - b })
  let count = 0
  for (let k = nums.length - 1; k >= 2; k--) {
    let left = 0, right = k - 1;
    //固定最长边  计算
    while (left < right) {
      if (nums[left] + nums[right] > nums[k]) {
        count += right - left
        right--;
      } else {
        left++
      }
    }
  }
  return count;
};
