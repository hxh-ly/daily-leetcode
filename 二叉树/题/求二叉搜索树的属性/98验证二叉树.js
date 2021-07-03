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