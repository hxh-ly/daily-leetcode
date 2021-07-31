/* 1
/ \
2   2
/ \ / \
3  4 4  3 */
var isSymmetric = function (root) {
  if (!root) return true;

  return sameTree(root.left, root, right)
}
var sameTree = function (left, right) {
  if (left == null) return right == null
  if (right == null) return false
  if (left.val != right.val) {
    return false
  }
  return sameTree(left.left, right.right) && sameTree(left.right, right.left)
}