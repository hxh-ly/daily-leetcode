/* 
【0，0，0】，
【0，1，0】
【1，1，1】

1 修改为 到最近的0的距离

【0，0，0】
【0，1，0】
【1，2，1】

*/
/* 

bfs 
【思路】： 1.    遇到0入 queue  遇到 1 置为最大值
          2.     每一个点 上下左右搜素找到周围比他大的，来更新周围
                 周围的继续入queue  检测
*/
var updateMatrix = function (mat) {
  var direction = [[0, -1], [0, 1], [1, 0], [-1, 0]]
 /*  BFS思想, 把所有1都置为最大值, 把所有为0的位置加入队列中, 每次从队列中poll
  一个节点, 更新其四周的节点, 如果被更新的节点距离变小了就将其入队列准备更新其邻接点 */
  var m = mat.length, n = mat[0].length
  let queue = []
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (mat[i][j] == '0') {
              queue.push([i, j])
          } else {
              mat[i][j] = m + n
          }
      }
  }
  while (queue.length) {
      let [x, y] = queue.shift()
      for (let did = 0; did < 4; did++) {
          let nx = x + direction[did][0]
          let ny = y + direction[did][1]
          if (nx >= 0 && ny >= 0 && nx < m && ny < n &&
              mat[nx][ny] > mat[x][y]+1
          ) {
              mat[nx][ny] = mat[x][y] + 1
              queue.push([nx, ny])
          }
      }

  }
  return mat;
};