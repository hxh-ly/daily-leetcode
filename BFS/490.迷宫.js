function hasPath(maze, start, destination) {
  let directionX = [0, 0, 1, -1], directionY = [1, -1, 0, 0]
  let found = false
  let visited = Array(maze.length).fill(0).map(item => Array.from(maze[0].length).fill(false))
  //visited[start[0]][start[1]] = true
  dfs(maze, start[0], start[1], visited)
  return found;
}
function dfs(maze, i, j, visited) {
  if (i < 0 || j < 0 || i >= maze.length || j >= maze[0].length || visited[i][j]) {
    return;
  }
  if (found) { return }
  visited[i][j] = true
  if (i == destination[0] && j == destination[1]) {
    found = true
    return;
  }

  for (let direction = 0; direction < 4; direction++) {
    let nx = i + directionX[direction], ny = j + directionY[direction]

    dfs(maze, nx, ny, visited)
  }
}

function bfs(maze, i, j, visited) {
  if(found) return 
  if (i == destination[0] && j == destination[1]) {
    found = true
    return;
  }
  let m = maze[0].length
  visited[i][j] =true
  let code = i * m + j;
  let queue = [code] 
  while(queue.length) {
    let head=queue.shift()
    let x = ~~(head/m)
    let y = (head%m)
    
  for (let direction = 0; direction < 4; direction++) {
    let nx = x + directionX[direction], ny = y + directionY[direction]
    if (nx < 0 || ny < 0 || nx >= maze.length || ny >= maze[0].length || visited[nx][ny]) {
      continue;
    }
    queue.push(nx*m+ny)
  }
  }
}