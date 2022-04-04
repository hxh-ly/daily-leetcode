/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 * 
 */
/* 
【题目】：给你一个无向连通图中一个节点的引用，返回该图的深拷贝
【例子】：
        adjList = [[2,4],[1,3],[2,4],[1,3]]
       解释： 1的领接点 2 4
              2的邻接点 1 3
              3的邻接点 2 4
              4的邻接点 1 3
      存在属性的neighbors中        
*/

//bfs  queue + map
var cloneGraph = function (node) {
  if (!node) return null;
  let queue = [node]
  let map = new Map()
  map.set(node, new Node(node.val))
  while (queue.length) {
    let head = queue.pop()
    for (let i = 0; i < node.neighbors.length; i++) {
      if (!map.has(node.neighbors[i])) {
        map.set(node.neighbors[i], new Node(node.neighbors[i].val))
        queue.push(node.neighbors[i])
      }
      //直接加到父里面
      map.get(head).neighbors.push(map.get(node.neighbors[i]))
    }
  }
  return map.get(node)
}
//dfs  map
var dfs_cloneGraph = function (node) {
  if (!node) return null;
  if (map.has(node)) {
    return map.get(node)
  }
  map.set(node, new Node(node.val))
  for (let cur of node.neighbors) {
    map.get(node).neighbors.push(dfs_cloneGraph(cur))
  }
  return map.get(node)
}