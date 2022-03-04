/* 
【题目】
给定一个整数数组 nums，
其中恰好有两个元素只出现一次，其余所有元素均出现两次。
找出只出现一次的那两个元素。你可以按 任意顺序 返回答案。
【例子】
输入：nums [1,2,1,3,2,5]
输出：[3,5]
【限制】
2 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
O(N) O（1） 
*/
/* 
【思路】
1. ^相同为0 会剩下 type1,type2
2.  type1 和 type2 在两个分组
3.  limit = total & (-total) // 最低位1 可以把数字分成2组，type1 type2 各在其中
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  // 相同^ 为 0
  var total;
  for (var num of nums) {
    total ^= num
  }
  var limit = total & (-total)
  var type1 = 0, type2 = 0
  for (var num of nums) {
    if (limit & num) {
      type1 ^= num
    } else {
      type2 ^= num
    }
  }
  return [type1, type2]
};