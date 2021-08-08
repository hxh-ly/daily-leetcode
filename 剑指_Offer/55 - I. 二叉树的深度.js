/* 


*/
var maxDepth = function (root) {
  //dfs 
  if (!root) { return 0 }
  let left = maxDepth(root.left)
  let right = maxDepth(root.right)
  //谁多就往上返
  return maxDepth(left + 1, right + 1)

  //bfs
  if (!root) return 0;
  let queue = [root], count = 0;
  while (queue.length) {
    //记录层数
    count++;
    for (let i = queue.length; i > 0; i--) {
      //一层
      let temp = queue.shift()
      if (temp.left) { queue.push(temp.left) }
      if (temp.right) { queue.push(temp.right) }
    }
  }
  return count;
}