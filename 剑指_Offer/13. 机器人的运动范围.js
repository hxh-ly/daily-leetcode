/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let arr = []
  for (let i = 0; i < m; i++) {
    arr[i] = new Array();
    for (let j = 0; j < n; j++) {
      arr[i][j] = false
    }
  }
  //深度 向下和向右0 失败就结束了
  var dfs = function (i, j, arr, k) {
    //出界 || 踩坑
    if (i >= arr.length || j >= arr[0].length || getSum(i) + getSum(j) > k || arr[i][j]) {
      return 0
    }
    arr[i][j] = true
    return 1 + dfs(i + 1, j, arr, k) + dfs(i, j + 1, arr, k)
  }
  return dfs(0, 0, arr, k)

};
//这个函数是按位+
var getSum = function (a) {
  let sum = a % 10
  let sum1 = Math.floor(a / 10)
  while (sum1 > 0) {
    sum += sum1 % 10
    sum1 = Math.floor(sum1 / 10)
  }
  return sum
}