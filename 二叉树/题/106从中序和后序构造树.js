var buildTree = function (inorder, postorder) {
  let idx_map = new Map()
  let post_idx = postorder.length - 1;
  inorder.forEach((val, idx) => {
      idx_map.set(val, idx)
  })
/*   【思路】
  1.结束 分到不能分
  2.从后序[length] 取
  3.建立map在中序【】查
  4.建立root
  5.length--
  6.构建右 再左
  7.return root */
  function helper(in_left, in_right) {
      if (in_left > in_right) return null;
      const val_root = postorder[post_idx]
      const index = idx_map.get(val_root)
      const root = new TreeNode(val_root)
      post_idx--;
      root.right = helper(index + 1, in_right)
      root.left = helper(in_left, index - 1)
      return root
  }
  return helper(0, inorder.length - 1)

};