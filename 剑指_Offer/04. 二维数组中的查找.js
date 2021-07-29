/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

[
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
// → 递增
// ↓ 递增
//【思路】  右上角开始看是Binary Search Tree 
//          小  ←列    
//          大  ↓行
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length == 0) return false
  let a = 0, b = matrix[0].length - 1
  while (a < matrix.length && b >= 0) {
    if (target < matrix[a][b]) {
      b -= 1
    }
    else if (target > matrix[a][b]) {
      a += 1
    }
    else {
      return true
    }
  }
  return false
};