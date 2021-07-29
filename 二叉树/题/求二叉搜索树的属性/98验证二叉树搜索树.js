/* 给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。 */


var isValidBST = function (root) {

  return dfs(root, -Infinity, +Infinity)
};

var dfs = function (root, lower, higher) {


  if (root == null) return true;
  if (root.val <= lower || root.val >= higher) {
    return false
  }
  return dfs(root.left, lower, root.val) && dfs(root.right, root.val, higher)
}


//方法二
var isValidBST = function (root) {
  let stack = []
  let init = -Infinity
  //一直往左
  while (root != null || stack.length != 0) {
    if (root != null) {
      stack.push(root)
      root = root.left
    }
    //左边到头了,pop 转右边
    else {
      root = stack.pop()
      if (init >= root.val) {
        return false;
      }
      init = root.val
      root = root.right
    }
  }
  return true;
}