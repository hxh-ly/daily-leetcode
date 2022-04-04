var initData = [
  [[0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
  ],
  [0, 4],
  [4,4]
]
function shortDistance(maze, start, destination) {
  if (start.toString() == destination.toString()) {
    return 0;
  }
  //bfs
function bfs(maze, start, visited) {
  let m = maze[0].length
  let code = start[0] * m + start[1];
  let queue = [code]
  visited[start[0]][start[1]] = true
  while (queue.length) {
    let head = queue.shift()
    let x = ~~(head / m)
    let y = (head % m)

    for (let direction = 0; direction < 4; direction++) {
      let nx = x
      let ny = y
      delta = 0;
      while (nx + directionX[direction] >= 0 && nx + directionX[direction] < maze.length && ny + directionY[direction] >= 0 && ny + directionY[direction] < maze.length && maze[nx + directionX[direction]][ny + directionY[direction]] == 0) {
        nx += directionX[direction];
        ny += directionY[direction];
        delta++;
      }
      if (visited[x][y] + delta < visited[nx][ny]) {
        queue.push(nx * m + ny)
        visited[nx][ny] = visited[x][y] + delta
        maze[nx][ny] = 2
      }
    }
  }
}

  //变换方向的位置用2标识
  maze[start[0]][start[1]] = 2;

  let directionX = [0, 0, 1, -1], directionY = [1, -1, 0, 0]

  let visited = Array(maze.length).fill(0).map(() => Array(maze[0].length).fill(Number.MAX_SAFE_INTEGER))

  visited[start[0]][start[1]] = 1;
    console.log(visited);
  bfs(maze, start, visited)
  console.log(visited);
  return visited[destination[0]][destination[1]] == Number.MAX_SAFE_INTEGER ? -1 : visited[destination[0]][destination[1]]
}

//横冲直撞的重写最小的距离
function dfs(maze, i, j, visited, length) {
  /*   if (i < 0 || j < 0 || i >= maze.length || j >= maze[0].length || visited[i][j]) {
      return;
    } */
  // if(visited[i][j]) return;
  if (found) { return }
  visited[i][j] = true
  if (i == destination[0] && j == destination[1]) {
    res = Math.min(res, length)
    console.log(length);
    found = true
    return;
  }

  for (let direction = 0; direction < 4; direction++) {
    let nx = i + directionX[direction], ny = j + directionY[direction]
    if (nx < 0 || ny < 0 || nx >= maze.length || ny >= maze[0].length || visited[nx][ny] || maze[nx][ny]) {
      continue;
    }
    dfs(maze, nx, ny, visited, length + 1)
  }
}
console.log(shortDistance(...initData)); 