//二分  ( ]  
// 条件 >
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {

  return nums == null ? null : dfs(nums, 0, nums.length - 1);
};
var dfs = function (nums, l, r) {
  if (l>r) return null;
  let mid = Math.floor(l+(r - l)/2);
  console.log(mid)
 let  root = new TreeNode(nums[mid]);
  root.left = dfs(nums, l, mid-1);
  root.right = dfs(nums, mid + 1, r);
  return root;
}