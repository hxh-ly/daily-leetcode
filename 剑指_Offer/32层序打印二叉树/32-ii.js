/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = []
  let queue = [root]
  let temp = null
  while (queue.length != 0) {
    let list = []
    //这里要从 queue.length 开始 --
    for (let i = queue.length; i > 0; i--) {
      temp = queue.shift()
      list.push(temp.val)
      if (temp.left) {
        queue.push(temp.left)
      } if (temp.right) {
        queue.push(temp.right)
      }
    }
    res.push(list)
  }
  return res
};