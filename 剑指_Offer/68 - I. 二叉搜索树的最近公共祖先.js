/* 
【题目】
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
           6
        2   8
    0   4  7   9
       3 5     
    2 8
【性质】！中序有序 ！   
*/

var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null
  //在一侧，往一侧找
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    //在两侧  直接return root
    //包含了根就是p | q的情况
    return root;
  }
};



var lowestCommonAncestor = function (root, p, q) {
  return dfs(root, p, q)
};
var dfs = function (root, p, q) {
  //大多数根都与查找的没关系
  //本身是所查找|空 返回
  if (root == null || root == p || root == q) { return root }
  let left = dfs(root.left, p, q)
  let right = dfs(root.right, p, q)
  //同时找到说明这就是祖先
  if (left && right) {
    return root;
  }
  //找到谁就向上返
  if (!left || right) {
    return right
  }
  else if (!right || left) {
    return left
  }
  //大多数都没关系
  else {
    return null;
  }
}