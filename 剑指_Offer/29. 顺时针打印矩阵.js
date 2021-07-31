/* 
顺时针打印
右
下
左
上
走完范围缩小
*/

var spiralOrder = function (matrix) {
  if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
    return []
  }
  //m是多少行 n是多少列
  let m = matrix.length, n = matrix[0].length
  let num = 0
  let arr = Array(m * n).fill(0)
  //  列                          行
  let left = 0, right = n - 1, up = 0, down = m - 1;
  while (num < m * n) {
    //右
    for (let i = left; i <= right && num < m * n; i++) {
      arr[num++] = matrix[up][i]
    }
    up++;
    //下
    for (let i = up; i <= down && num < m * n; i++) {
      arr[num++] = matrix[i][right]
    }
    right--;
    //左
    for (let i = right; i >= left && num < m * n; i--) {
      arr[num++] = matrix[down][i]
    }
    down--;
    //上
    for (let i = down; i >= up && num < m * n; i--) {
      arr[num++] = matrix[i][left]
    }
    left++;
  }
  return arr
}