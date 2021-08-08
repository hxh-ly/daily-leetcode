/*
【题目】
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
输入：nums = [9,1,7,9,7,9,7]
输出：1

*/
var singleNumber = function (nums) {
  /* 
  ABBBCCC
  AAABBBCDDD
  AAABBBCCCD
  */
 /* 
    3 = 0 0 1 1
    3 = 0 0 1 1
    3=  0 0 1 1
    5=  0 1 0 1

        0 1 3 4
        求余
        0 1 0 1 ---->5
 */
  let k = Array(32).fill(0)
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < 32; j++) {
      //某个数第一位有1 ？第二位有1？第三位有1？
      k[j] += (nums[i] >> j & 1) == 1 ? 1 : 0
    }
  }
  let res = 0;
  for (let i = 0; i < 32; i++) {
    res |= (k[i] % 3) << i
  }
  return res
}
console.log(4 << 0);
