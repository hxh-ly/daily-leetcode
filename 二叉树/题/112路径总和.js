
let dfs = function (root, target, cur) {
  if (!root) return 0;
  cur += root.val
  if (!root.left && !root.right) {
    return cur === target
  }
  return dfs(root.left, target, cur) || dfs(root.right, target, cur)
}