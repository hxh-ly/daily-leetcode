var findBottomLeftValue = function (root) {
  /**
   * 【思路】
   * 1.dfs
   * 2. 递归  叶子更新判断层数 及值
   *          
   *  
   */
  let Max = Number.MIN_VALUE
  let res = 0;
  //dfs
  var dfs = function (root, depth) {
    if (root != null) {
      //如果是叶子节点 更新max  更新值
      if (root.left == null && root.right == null) {
        if (max < depth) {
          max = depth
          res = root.val
        }
        dfs(root.left, depth + 1)
        dfs(root.right, depth + 1)
      }
    }
  }
  dfs(root, 1)
  return res



  //2. BFS  
  // 【思路】
  //  queue 
  // 先右
  // 后左
}


