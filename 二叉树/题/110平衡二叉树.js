/*     【平衡二叉树】

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。 */
//自顶向下 （浪费计算深度)
var isBalanced = function (root) {
  if (root == null) return true;
  return Math.abs(treeLength(root.left) - treeLength(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
var treeLength = function (root) {
  if (root == null) return 0;
  return Math.max(treeLength(root.left), treeLength(root.right)) + 1
}

//自底向上
var isBalanced = function (root) {

  return treeLength(root) >= 0
};

//改造计算深度的递归式, 
var treeLength = function (root) {
  if (root == null) return 0;
  let leftHeight = treeLength(root.left)
  let rightHeight = treeLength(root.right)
  //递归到某一层 就看到 差值过大就停了
  //当出现－1  往上直接返负1了  
  if (leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) {
    return -1;
  }
  return Math.max(leftHeight, rightHeight) + 1;
}
