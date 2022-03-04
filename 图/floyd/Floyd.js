/* 
1 graph
2 path ！！
*/
function floyd(n, graph, path) {

  var A = Array(graph.length).fill(0).map(() => new Array(graph[0].length).fill(0))
  var path = Array(graph.length).fill(0).map(() => new Array(graph[0].length).fill(-1))
  //初始化
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      A[i][j] = graph[i][j]
    }
  }
  for (let v = 0; v < graph.length; v++) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph.length; j++) {
        if (A[i][j] > A[i][v] + A[v][j]) {
          A[i][j] = A[i][v] + A[v][j]
          path[i][j] = v;
        }
      }
    }
  }
}

//中间点
function printPath(u, v, path) {
  if (path[u][v] === -1) {
    console.log(`<${u},${v}>`);
  } else {
    var mid = path[u][v]
    printPath(u, mid, path)
    printPath(mid + 1, v, path)
  }
}
