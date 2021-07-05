
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*  【思路】
 在每一个格子，判断自身能量和格子提供的能量,取能量多的，自然就能走的远，当i走到终点就成功了 */
var canJump = function (nums) {
  let n = nums.length
  if (n == 0) {
      return true;
  }
  let p = nums[0]
  let i = 1
  for (; p != 0 && i < n; i++) {
      p--;
      if (p < nums[i]) {
          p = nums[i]
      }
  }
  return i == n;
};