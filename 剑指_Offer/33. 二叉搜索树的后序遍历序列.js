/*
【题目】
根据一个【】判断是不是二叉搜索树的后序遍历
【规律】
因为是二叉搜索树
【左右中】
【小大中】
p指针一定能循环到最后
[ )
*/
var recur = function (postorder, i, j) {
  if (i >= j) return true;
  let p = i;
  while (postorder[p] < postorder[j]) p++;
  let m = p; //记录第一个大于根的结点（右的开始）
  while (postorder[p] > postorder[j]) p++;
  return p == j && recur(postorder, i, m - 1) && recur(postorder, m, j - 1)
}