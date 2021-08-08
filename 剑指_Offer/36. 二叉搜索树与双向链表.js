/* 
【题目】
         4
     2      5
  1     3

 转化为   双向循环        
  
*/
/*
二叉搜索树 空 | 左《根《右
特性： 中序遍历有序
*/
var treeToDoublList = function (root) {
  if (!root) return null;
  let pre, head;
  dfs(root)
  //首尾绑定
  //pre 现在在最右下
  pre.left = head
  head.right = pre
  return head
}
var dfs = function (cur) {
  if (!cur) return;
  dfs(cur.left)
  //最左下结点链上head
  if (!pre) head = cur
  //绑定
  else if (pre) {
    pre.right = cur
  }
  cur.left = pre
  //交替
  pre = cur
  dfs(cur.right)
}