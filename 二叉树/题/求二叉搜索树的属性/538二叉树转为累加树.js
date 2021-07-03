// 右中左
var convertBST = function (root) {
  //右中左
  let num = 0;
  var reverse = function (root) {
    if (root == null) return null;
    //右
    reverse(root.right)
    //中
    root.val = root.val + num;
    num = root.val
    //左
    reverse(root.left)
    return root;
  }
  return reverse(root)
}