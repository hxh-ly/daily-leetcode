/* 大餐 是指 恰好包含两道不同餐品 的一餐，其美味程度之和等于 2 的幂。

你可以搭配 任意 两道餐品做一顿大餐。

给你一个整数数组 deliciousness ，其中 deliciousness[i] 是第 i​​​​​​​​​​​​​​ 道餐品的美味程度，返回你可以用数组中的餐品做出的不同 大餐 的数量。结果需要对 109 + 7 取余。

注意，只要餐品下标不同，就可以认为是不同的餐品，即便它们的美味程度相同。

输入：deliciousness = [1,3,5,7,9]
输出：4
解释：大餐的美味程度组合为 (1,3) 、(1,7) 、(3,5) 和 (7,9) 。
它们各自的美味程度之和分别为 4 、8 、8 和 16 ，都是 2 的幂。
 */
var countPairs = function (deliciousness) {
  //两数问题 ，边找边存
  //Map 存 
  //map 比deliciousness的item落后 不会重复   
  // 在 sum-val 找到 map  说明可以组成一队 pair++；值多少就是几队
  let n = deliciousness.length;
  let pair = 0
  let MOD = 100000007
  let myMap = new Map()
  let max = 0
  for (let i of deliciousness) {
    max = Math.max(max, i)
  }
  let maxL = max * 2;
  for (let i = 0; i < n; i++) {
    const item = deliciousness[i]
    for (let sum = 1; sum <= maxL; sum <<= 1) {
      const count = myMap.get(sum - item) || 0
      pair = (pair + count) % MOD
    }
    myMap.set(item, (myMap.get(sum - item) || 0) + 1)
  }
  return pair;
}