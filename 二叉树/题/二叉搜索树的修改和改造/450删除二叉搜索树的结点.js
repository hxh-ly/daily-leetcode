var deleteNode = function (root, key) {
  //1 null
  //2 <
  //3 >
  //4 = 
  //4.1 leaf
  //4.2 root.right.left==null
  //4.3  pre.left=small.right   small.left=root.left small.right=root.right

  if (root == null) return null
  if (key < root.val) {
      root.left = deleteNode(root.left, key)
      return root;
  }
  else if (key > root.val) {
      root.right = deleteNode(root.right, key)
      return root;
  }
  if (root.left == null || root.right == null) {
      return root.left == null ? root.right : root.left
  } else if (root.right.left == null) {
      root.right.left = root.left;
      return root.right
  }
  let pre = null, small = root.right
  while (small.left != null) {
      pre = small;
      small = small.left;
  }
  pre.left = small.right;
  small.left = root.left;
  small.right = root.right;
  return small
};