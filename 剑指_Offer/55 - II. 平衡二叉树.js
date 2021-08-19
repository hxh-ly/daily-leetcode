var main = function (root) {
  return dfs(root) >= 0
}
var dfs = function (root) {
  if (!root) return 0;
  let left = dfs(root.left)
  let right = dfs(root.right)
  //左右有不满足的就返-1  最终<0则不构成
  if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}