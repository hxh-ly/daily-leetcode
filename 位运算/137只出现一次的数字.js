/* 
【题目】:
给你一个整数数组nums 
除某个元素仅出现一次，其他出现三次。返回只出现一次的。
输入：nums = [2,2,3,2]
输出  3;
*/
/* 
【思路】
限制： -2^31 < nums[i] < 2^31 -1

 每个元素第i位的和 % 3 就是 【答案】第i位
 全部位加起来。ans |= ( i<<i )
*/
var singeNumber = function (nums) {
  //方法一：Map 略
  var ans = 0
  for (let i = 0; i < 32; i++) {
    let total = 0
    for (num of nums) {
      total += (num >> i) & 1
    }
    console.log(total);
    //值不为空 说明该位有，不然就进位了。肯定不会丢了
    if (total % 3) {
      ans |= (1 << i)
    }
  }
  return ans;
}

singeNumber([0,1,0,1,0,1,99])