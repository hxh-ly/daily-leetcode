/*
输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)

B是A的子结构， 即 A中有出现和B相同的结构和节点值。
*/

/* 
【思路】

isSub 判断 是否从该根结点处相同 不是就递归下取

dfs 判断 是否相同
*/
var isSub = function (A, B) {
  if (A == null || B == null) return false 
  return dfs(A, B) || isSub(A.left, B) || isSub(A.right, B)
}
var dfs = function (A, B) {
  if (B == null) return true; //越过B的叶子结点
  if (A == null) return false; //越过A还没有匹配到 false
  return A.val == B.val && dfs(A.left, B.left) && dfs(A.right, B.right)
}
