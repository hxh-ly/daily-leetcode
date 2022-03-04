

/* 
【思路】
1 异或性质
2 前缀
10000000000
11000000000
11100000000
11110000000

3 res是收集的数
每层保留数组的前缀
set 找到由（最大）和 （set中的数） = （set的数）
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaximumXOR = function (nums) {
  //理想最大值 需要每一层累加
  var res = 0
  //
  var mask = 0
  for (let i = 30; i >= 0; i--) {
      var set = new Set()
      mask = mask | (1 << i)
      //每一个数字的前缀
      for (const num of nums) {
          set.add(num & mask)
      }
      targetMax  = res | (1 << i)
      for (const prefix of set) {
          var temp = prefix ^ targetMax 
          if (set.has(temp)) {
              res = targetMax
              break;
          }
      }
  }
  return res
};