
var sameTree = function (left, right) {
  if (left == null) return right == null;
  if (right == null) return false;
  if (left.val != right.val) {
    return false
  }
  return sameTree(left.left, right.right) && sameTree(left.right, right.left)
}