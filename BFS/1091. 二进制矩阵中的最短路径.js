/* 
【0，0，0】，  
【1，1，0】，
【1，1，0】  

【0，0， 】，  
【 ， ，0】，
【 ， ，0】  
*/

/* 
【思考】： dfs是一条一条搜，不行再换，只要找到一种结果就好，不一定是最优
          bfs 一开始就尝试所有的情况，到达了就是最优的， 用于找【最短路径】
 */
var shortestPathBinaryMatrix = function (grid) {
  //特判起点

  //visited

  //queue

  //while  { for(i..size) {  for( j ...8)  {找到结束}  }  在抉择下一步 dist+1 }
  let m = grid.length, n = grid[0].length
  var direction = [[1, 1], [0, 1], [1, 0]
    , [-1, 1], [1, -1], [-1, 0], [0, -1], [-1, -1]
  ]
  var visited = Array(m).fill(0).map(() => Array(n).fill(0))
  if (grid[0][0] == 1) return -1
  if (grid[m - 1][n - 1] == 1) return -1;
  if (m == 1) return 1
  let queue = [[0, 0]], dist = 1;
  // bfs
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let head = queue.shift()
      let i = head[0]
      let j = head[1]
      for (let did = 0; did < 8; did++) {
        let nx = i + direction[did][0]
        let ny = j + direction[did][1]
        if (nx == m - 1 && ny == n - 1) {
          return dist + 1
        }
        if (nx < 0 || ny < 0 || nx >= m || ny >= n || grid[nx][ny] == 1 || visited[nx][ny]) {
          continue;
        }
        queue.push([nx, ny])
        visited[nx][ny] = 1
      }
    }
    //这里才走的第一步
    dist += 1;
  }
  return -1;
}