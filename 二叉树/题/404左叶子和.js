var sumOfLeftLeaves = function (root) {
  return root == null ? 0 : dfs(root)
};

//递归
// 左子 +叶子
// 不是就递归 累加保存
var dfs = function (root) {
  let res = 0
  //左子
  if (root.left) {
      res += isLeaf(root.left) ? root.left.val : dfs(root.left)
  }
  if (root.right) {
      res += dfs(root.right)
  }
  return res;
}

//是叶子？
var isLeaf = function (root) {
  return root.left == null && root.right == null
}