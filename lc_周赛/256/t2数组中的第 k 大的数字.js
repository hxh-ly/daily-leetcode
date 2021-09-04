/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  //如果字符串的长度明显不一样 ,直接比较长度就好了
  let a = nums.sort((a, b) => {
    return a.length - b.length || (a < b ? -1 : 1)
  })
  console.log(a);

};
findKthLargest([3, 2, 1, 5, 6, 4], 2)
