/* 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出：3
解释：节点 5 和节点 1 的最近公共祖先是节点 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree */
/* 
【注意】
参数 p q 是结点还是val
【理解】
找到p q 往返,
大多数叶子往返都是null ~~
*/

var dfs = function (root, o1, o2) {
  if (root == null || root.val == o1 || root.val == o2) {
    return root;
  }
  //遍历整颗树
  let left = dfs(root.left, o1, o2)
  let right = dfs(root.right, o1, o2)
  if (left && right) return root;
  if (left && !right) return left
  if (!left && right) return right
  else {
     //都不存在
     return null
  }
}