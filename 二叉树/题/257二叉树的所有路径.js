var binaryTreePaths = function (root) {
  //1.dfs
  /* 【思路】
  1.根
  2.有左右  --> 递归 （根 有左右）
  3.无左右 push的到paths */
  const paths = []
  function getRoad(root, str) {

    if (root) {
      str += root.val.toString()
      if (root.left == null && root.right == null) {
        paths.push(str)
      } else {
        str += '->'
        getRoad(root.left, str)
        getRoad(root.right, str)
      }
    }
  }
  getRoad(root, '')
  return paths;


  //2.bfs
  /* 【思路】
  1.nodeQueue pathQueue
  2.无节点 push到PATHS
  3.有节点  有左建左 nodeQueue入左   有右建右 nodeQueue入右 */
  const paths = []
  if (root === null) return []
  const nodeQueue = [root]
  const pathQueue = [root.val.toString()]
  while (nodeQueue.length != 0) {
    const node = nodeQueue.shift()
    const path = pathQueue.shift()
    if (node.left == null && node.right == null) {
      //结算
      paths.push(path)
    } else {
      if (node.left) {
        nodeQueue.push(node.left)
        //路径更新组成
        pathQueue.push(path + '->' + node.left.val.toString())
      }
      if (node.right) {
        nodeQueue.push(node.right)
        //路径组成
        pathQueue.push(path + '->' + node.right.val.toString())
      }
    }
  }
  return paths
};