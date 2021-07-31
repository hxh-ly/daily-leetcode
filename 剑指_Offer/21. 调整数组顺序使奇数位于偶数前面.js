/* 
[1,2,3,4]
先奇数后偶数
[1,3,2,4]

*/
/* 
【首尾指针】
*/
var exchange = function (nums) {
  let left = 0, right = nums.length - 1
  while (left < right) {
      if ((nums[left] & 1) != 0) {
          left++;
          continue;
      }
      if ((nums[right] & 1) == 0) {
          right--;
          continue;
      }
      swap(nums, left++, right--)
  }
  return nums
};