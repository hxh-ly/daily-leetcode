/*
题目：
要求找到下一个字典序更大的序列
123
132  要找这个 
213
231
312
321 这种情况题目要求要变成最小
思路：
1 从后面开始找到非递增的第一个数i  【i+1 ~ n-1】是递减的
2 再从后面找比i大的j    交换 i和j  使得较小的尽可能往右排
双指针翻转
*/
function nextPermutation(nums) {
  let n = nums.length
  let i = n - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = n - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--
    }
    swap(nums, j, i)
  }
  reverse(nums, i + 1)
}