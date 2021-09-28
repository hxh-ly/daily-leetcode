/* 
【题目】：树路径中存在 targetSum的数量
输入：root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8
输出：3
解释：和等于 8 的路径有 3 条，如图所示。

*/
/* 双递归  一个就是普通的计算  一个递归自己的左右结点计算 */
/* 可以用减法  不一样要用加法来转移阿 */
var pathSum = function (root, targetSum) {
  var res = 0
  var sum = function (root, targetSum) {
    if (!root) return 0;
    dfs(root, targetSum)
    sum(root.left, targetSum)
    sum(root.right, targetSum)
  }
  var dfs = function (root, targetSum) {
    if (!root) return;
    targetSum -= root.val
    if (targetSum == 0) {
      res++;
      /* 不能return  因为（-5）（+5）又抵消了 */
    }
    dfs(root.left, targetSum)
    dfs(root.right, targetSum)
  }
  sum(root, targetSum)
  return res;
}
