//直接做
var invertTree = function (root) {
  //1.递归
  if (root == null) return root;
  /*  let temp = root.left;
   root.left = root.right;
   root.right = temp;
   invertTree(root.left)
   invertTree(root.right)
   return root */
  //2.dfs
  let queue = []
  let head = root;
  queue.push(root)
  while (queue.length != 0) {
      const node = queue.shift()
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) {
          queue.push(node.left)
      }
      if (node.right) {
          queue.push(node.right)
      }
  }
  return root
};