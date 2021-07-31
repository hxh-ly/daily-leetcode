/* 
     4                    4
  2   7                7     2
1 3  6 9            9  6    3   1
*/
/* 
【思路】
递归到叶子结点 保留值
做交换
往上返  做交换
*/
var mirrorTree = function (root) {
  if (root == null) return false
  let temp = root.left
  let left = mirrorTree(root.left)
  let right = mirrorTree(root.right)
  root.left = right
  root.right = temp
  return root
}