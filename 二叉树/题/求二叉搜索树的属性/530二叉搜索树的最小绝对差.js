//二叉搜索树的中序遍历是升序
var getMin = function (root) {
  let pre = -1;
  let res = Number.MIN_VALUE
  var inorder = function (root) {
    if (root == null) return res;
    inorder(root.left)
    if (pre < 0) {
      pre = root.val
    }
    else {
      let tem = Math.abs(pre - root.val)
      res = Math.min(tem, res)
      pre = root.val
    }
    inorder(root.right)
  }
inorder(root)
 return res
}