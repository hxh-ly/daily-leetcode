/* 
【题目】


【思路】
从边界 逆流而上，找到水位递增的 pacific  atlantic
取共同是true的部分，就能联通太平洋和大西洋

*/
var pacificAtlantic = function (heights) {
  //pacific
  //atlantic
  // 上下横 （遍历列）
  // 左右竖 （遍历行）
  // 取交集
  let direction = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  let m = heights.length, n = heights[0].length
  let pacific = Array(m).fill(0).map(() => Array(n).fill(0))
  let atlantic = Array(m).fill(0).map(() => Array(n).fill(0))
  let res = []
  var dfs = function (matrix, i, j) {
      matrix[i][j] = true
      for (let did = 0; did < 4; did++) {
          let nx = i + direction[did][0]
          let ny = j + direction[did][1]
          if (inArea(nx, ny) && !matrix[nx][ny]) {
              if (heights[i][j] <= heights[nx][ny]) {
                  dfs(matrix, nx, ny)
              }
          }
      }
  }
  var inArea = function (a, b) {
      return a >= 0 && a < m && b >= 0 && b < n
  }
  // 怎么保存中间经过的节点

  // 横
  for (let i = 0; i < n; i++) {
      dfs(pacific, 0, i)
      dfs(atlantic, m - 1, i)
  }
  // 竖
  for (let j = 0; j < m; j++) {
      dfs(pacific, j, 0)
      dfs(atlantic, j, n - 1)
  }
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (pacific[i][j] && atlantic[i][j]) {
              res.push([i, j])
          }
      }
  }
  return res;
  }